require('dotenv').config();
const express   = require('express');
const cors      = require('cors');
const path      = require('path');
const helmet    = require('helmet');
const rateLimit = require('express-rate-limit');

const app  = express();
const PORT = process.env.PORT || 4000;

// 보안 헤더
app.use(helmet({ contentSecurityPolicy: false }));

// CORS
app.use(cors());

// JSON 크기 제한 (10kb)
app.use(express.json({ limit: '10kb' }));

// 예약 API 요청 제한: IP당 10분에 10회
const bookingLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 10,
  message: { error: '요청이 너무 많습니다. 잠시 후 다시 시도해주세요.' }
});
app.use('/api/bookings', bookingLimiter);

app.use((req, res, next) => {
  res.setHeader('ngrok-skip-browser-warning', 'true');
  console.log(req.method, req.url);
  next();
});

// API 라우트
app.use('/api/tours',    require('./routes/tours'));
app.use('/api/bookings', require('./routes/bookings'));

// 프론트엔드 정적 파일 제공
app.use(express.static(path.join(__dirname, '../frontend')));

app.listen(PORT, () => {
  console.log('\n🍖  한판 HANPAN 서버 시작!');
  console.log(`   http://localhost:${PORT}\n`);
});
