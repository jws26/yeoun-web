const nodemailer = require('nodemailer');

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const GENDER_KO = { male: '남성', female: '여성', other: '기타/답변 안 함' };
const AGE_KO    = { '10s': '10대', '20s': '20대', '30s': '30대', '40s': '40대', '50s': '50대 이상' };

async function sendBookingEmail(booking) {
  const tourName = booking.destinationName || booking.tourName || '(투어명 없음)';
  const gender   = GENDER_KO[booking.gender] || booking.gender || '-';
  const age      = AGE_KO[booking.age]       || booking.age    || '-';

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #222;">
      <h2 style="border-bottom: 2px solid #e05a2b; padding-bottom: 12px; color:#e05a2b;">🍖 새 예약이 들어왔습니다</h2>
      <table style="width:100%; border-collapse:collapse; margin-top:16px;">
        <tr><td style="padding:8px 0; color:#666; width:120px;">예약번호</td><td style="padding:8px 0;"><strong>#${String(booking.id).padStart(6,'0')}</strong></td></tr>
        <tr><td style="padding:8px 0; color:#666;">투어명</td><td style="padding:8px 0;"><strong>${esc(tourName)}</strong></td></tr>
        <tr style="background:#f9f9f9;"><td style="padding:8px 0; color:#666;">예약자</td><td style="padding:8px 0;">${esc(booking.name)}</td></tr>
        <tr><td style="padding:8px 0; color:#666;">이메일</td><td style="padding:8px 0;">${esc(booking.email)}</td></tr>
        <tr style="background:#f9f9f9;"><td style="padding:8px 0; color:#666;">전화번호</td><td style="padding:8px 0;">${esc(booking.phone || '-')}</td></tr>
        <tr><td style="padding:8px 0; color:#666;">성별</td><td style="padding:8px 0;">${esc(gender)}</td></tr>
        <tr style="background:#f9f9f9;"><td style="padding:8px 0; color:#666;">연령대</td><td style="padding:8px 0;">${esc(age)}</td></tr>
        <tr><td style="padding:8px 0; color:#666;">인원</td><td style="padding:8px 0;">${booking.travelers}명</td></tr>
        <tr style="background:#f9f9f9;"><td style="padding:8px 0; color:#666;">날짜</td><td style="padding:8px 0;">${esc(booking.date)}</td></tr>
        <tr><td style="padding:8px 0; color:#666;">총 금액</td><td style="padding:8px 0;"><strong>₩${booking.totalPrice.toLocaleString()}</strong></td></tr>
        <tr style="background:#f9f9f9;"><td style="padding:8px 0; color:#666;">예약 시각</td><td style="padding:8px 0;">${new Date(booking.createdAt).toLocaleString('ko-KR')}</td></tr>
      </table>
      <p style="margin-top:24px; font-size:12px; color:#999;">여운 YeoUn 예약 알림</p>
    </div>
  `;

  await transporter.sendMail({
    from: `"여운 YeoUn" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: `[여운] 새 예약 — ${tourName} (${booking.name}, ${booking.travelers}명)`,
    html,
  });
}

module.exports = { sendBookingEmail };
