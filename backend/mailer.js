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

async function sendBookingEmail(booking) {
  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #222;">
      <h2 style="border-bottom: 2px solid #222; padding-bottom: 12px;">🍖 새 예약이 들어왔습니다</h2>
      <table style="width:100%; border-collapse:collapse; margin-top:16px;">
        <tr><td style="padding:8px 0; color:#666; width:120px;">예약번호</td><td style="padding:8px 0;"><strong>#${String(booking.id).padStart(6,'0')}</strong></td></tr>
        <tr><td style="padding:8px 0; color:#666;">투어명</td><td style="padding:8px 0;">${esc(booking.tourName)}</td></tr>
        <tr><td style="padding:8px 0; color:#666;">예약자</td><td style="padding:8px 0;">${esc(booking.name)}</td></tr>
        <tr><td style="padding:8px 0; color:#666;">이메일</td><td style="padding:8px 0;">${esc(booking.email)}</td></tr>
        <tr><td style="padding:8px 0; color:#666;">인원</td><td style="padding:8px 0;">${booking.travelers}명</td></tr>
        <tr><td style="padding:8px 0; color:#666;">날짜</td><td style="padding:8px 0;">${esc(booking.date)}</td></tr>
        <tr><td style="padding:8px 0; color:#666;">총 금액</td><td style="padding:8px 0;"><strong>₩${booking.totalPrice.toLocaleString()}</strong></td></tr>
        <tr><td style="padding:8px 0; color:#666;">예약 시각</td><td style="padding:8px 0;">${new Date(booking.createdAt).toLocaleString('ko-KR')}</td></tr>
      </table>
      <p style="margin-top:24px; font-size:12px; color:#999;">한판 HANPAN 예약 알림</p>
    </div>
  `;

  await transporter.sendMail({
    from: `"한판 HANPAN" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: `[한판] 새 예약 — ${booking.tourName} (${booking.name}, ${booking.travelers}명)`,
    html,
  });
}

module.exports = { sendBookingEmail };
