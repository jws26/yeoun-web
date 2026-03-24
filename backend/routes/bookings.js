const router = require('express').Router();
const { bookings, tours, getNextId } = require('../data/seed');
const { sendBookingEmail } = require('../mailer');

// 이메일로 예약 조회
router.get('/', (req, res) => {
  const { email } = req.query;
  const result = email
    ? bookings.filter(b => b.email === email)
    : bookings;
  res.json(result);
});

// 예약 생성
router.post('/', (req, res) => {
  const { tourId, name, email, travelers, date } = req.body;

  if (!tourId || !name || !email || !travelers || !date) {
    return res.status(400).json({ error: '모든 항목을 입력해주세요.' });
  }

  // 이름: 문자열, 최대 50자
  const cleanName = String(name).trim().slice(0, 50);
  if (!cleanName) return res.status(400).json({ error: '이름을 입력해주세요.' });

  // 이메일 형식 검증
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const cleanEmail = String(email).trim().toLowerCase();
  if (!emailRegex.test(cleanEmail)) {
    return res.status(400).json({ error: '이메일 형식이 올바르지 않습니다.' });
  }

  // 날짜: YYYY-MM-DD 형식 + 과거 날짜 거부
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(date)) {
    return res.status(400).json({ error: '날짜 형식이 올바르지 않습니다.' });
  }
  if (new Date(date) < new Date(new Date().toDateString())) {
    return res.status(400).json({ error: '과거 날짜는 선택할 수 없습니다.' });
  }

  const tour = tours.find(t => t.id === Number(tourId));
  if (!tour) {
    return res.status(404).json({ error: '투어를 찾을 수 없습니다.' });
  }
  if (tour.comingSoon) {
    return res.status(400).json({ error: '아직 예약이 불가한 투어입니다.' });
  }

  const n = Number(travelers);
  if (!Number.isInteger(n) || n < tour.minGroup || n > tour.maxGroup) {
    return res.status(400).json({
      error: `인원은 ${tour.minGroup}명 이상 ${tour.maxGroup}명 이하로 신청 가능합니다.`
    });
  }

  const booking = {
    id: getNextId(),
    tourId: Number(tourId),
    tourName: tour.name,
    tourNameEn: tour.nameEn,
    tourNameZh: tour.nameZh,
    tourImage: tour.image,
    duration: tour.duration,
    name: cleanName,
    email: cleanEmail,
    travelers: n,
    date,
    pricePerPerson: tour.price,
    totalPrice: tour.price * n,
    createdAt: new Date().toISOString()
  };

  bookings.push(booking);
  console.log(`📋 새 예약: #${booking.id} ${booking.name} — ${booking.tourName} (${n}명, ${date})`);
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
