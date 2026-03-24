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

// CORS — 허용 출처 제한
const allowedOrigins = [
  'https://jws26.github.io',
  'https://yeoun-web-production.up.railway.app',
  'http://localhost:4000',
  'http://127.0.0.1:4000',
];
app.use(cors({
  origin: (origin, cb) => {
    if (!origin || origin === 'null' || allowedOrigins.includes(origin)) return cb(null, true);
    cb(new Error('CORS 차단: 허용되지 않은 출처'));
  }
}));

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
app.use('/api/tours',        require('./routes/tours'));
app.use('/api/destinations', require('./routes/destinations'));
app.use('/api/bookings',     require('./routes/bookings'));

// 프론트엔드 정적 파일 제공
const FRONTEND_DIR = path.join(__dirname, 'frontend');
app.use(express.static(FRONTEND_DIR));

// 경로 디버그 (Railway 확인용)
app.get('/api/debug', (req, res) => {
  const fs = require('fs');
  res.json({
    cwd: process.cwd(),
    dirname: __dirname,
    frontend_dir: FRONTEND_DIR,
    frontend_exists: fs.existsSync(FRONTEND_DIR),
    index_exists: fs.existsSync(path.join(FRONTEND_DIR, 'index.html')),
    files: fs.existsSync(FRONTEND_DIR) ? fs.readdirSync(FRONTEND_DIR) : []
  });
});

// 각 HTML 페이지 명시적 라우트 (Railway static 폴백)
app.get('/', (req, res) => res.sendFile(path.join(FRONTEND_DIR, 'index.html')));
app.get('/booking.html', (req, res) => res.sendFile(path.join(FRONTEND_DIR, 'booking.html')));
app.get('/my-bookings.html', (req, res) => res.sendFile(path.join(FRONTEND_DIR, 'my-bookings.html')));
app.get('/guides.html', (req, res) => res.sendFile(path.join(FRONTEND_DIR, 'guides.html')));

app.listen(PORT, () => {
  const fs = require('fs');
  console.log('\n🍖  한판 HANPAN 서버 시작!');
  console.log(`   http://localhost:${PORT}`);
  console.log(`   프론트엔드 경로: ${FRONTEND_DIR}`);
  console.log(`   프론트엔드 존재: ${fs.existsSync(FRONTEND_DIR)}\n`);
});
