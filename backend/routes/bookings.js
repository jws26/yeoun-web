const router = require('express').Router();
const { bookings, tours, getNextId } = require('../data/seed');
const { sendBookingEmail } = require('../mailer');

// 이메일로 예약 조회
router.get('/', (req, res) => {
  const { email } = req.query;
  if (!email) return res.status(400).json({ error: '이메일을 입력해주세요.' });
  const result = bookings.filter(b => b.email === email.trim().toLowerCase());
  res.json(result);
});

// 예약 생성
router.post('/', (req, res) => {
  const { destinationId, name, email, phone, gender, age, travelers, date } = req.body;

  if (!destinationId || !name || !email || !travelers || !date) {
    return res.status(400).json({ error: '모든 항목을 입력해주세요.' });
  }

  const cleanName = String(name).trim().slice(0, 50);
  if (!cleanName) return res.status(400).json({ error: '이름을 입력해주세요.' });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const cleanEmail = String(email).trim().toLowerCase();
  if (!emailRegex.test(cleanEmail)) {
    return res.status(400).json({ error: '이메일 형식이 올바르지 않습니다.' });
  }

  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(date)) {
    return res.status(400).json({ error: '날짜 형식이 올바르지 않습니다.' });
  }
  if (new Date(date) < new Date(new Date().toDateString())) {
    return res.status(400).json({ error: '과거 날짜는 선택할 수 없습니다.' });
  }

  const dest = tours.find(t => t.id === Number(destinationId));
  if (!dest) return res.status(404).json({ error: '상품을 찾을 수 없습니다.' });
  if (dest.comingSoon) return res.status(400).json({ error: '아직 예약이 불가한 상품입니다.' });
  if (dest.fixedDate && date !== dest.fixedDate) {
    return res.status(400).json({ error: `이 상품은 ${dest.fixedDate} 날짜만 예약할 수 있습니다.` });
  }

  const n = Number(travelers);
  if (!Number.isInteger(n) || n < dest.minGroup || n > dest.maxGroup) {
    return res.status(400).json({
      error: `인원은 ${dest.minGroup}명 이상 ${dest.maxGroup}명 이하로 신청 가능합니다.`
    });
  }

  const booking = {
    id: getNextId(),
    destinationId: Number(destinationId),
    destinationName: dest.name,
    destinationNameEn: dest.nameEn,
    destinationNameZh: dest.nameZh,
    destinationImage: dest.image,
    duration: dest.duration,
    name: cleanName,
    email: cleanEmail,
    phone: String(phone || '').trim().slice(0, 30),
    gender: String(gender || '').trim(),
    age: String(age || '').trim(),
    travelers: n,
    date,
    pricePerPerson: dest.price,
    totalPrice: dest.price * n,
    createdAt: new Date().toLocaleString('sv-SE', { timeZone: 'Asia/Seoul' }).replace(' ', 'T') + '+09:00'
  };

  bookings.push(booking);
  console.log(`📋 새 예약: #${booking.id} ${booking.name} — ${booking.destinationName} (${n}명, ${date})`);
  sendBookingEmail(booking).catch(err => console.error('메일 발송 실패:', err));
  res.status(201).json(booking);
});

// 예약 취소
router.delete('/:id', (req, res) => {
  const idx = bookings.findIndex(b => b.id === Number(req.params.id));
  if (idx === -1) return res.status(404).json({ error: '예약을 찾을 수 없습니다.' });
  const [removed] = bookings.splice(idx, 1);
  res.json({ message: '예약이 취소되었습니다.', booking: removed });
});

module.exports = router;
