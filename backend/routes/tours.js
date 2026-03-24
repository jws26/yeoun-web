const router = require('express').Router();
const { tours } = require('../data/seed');

// 모든 투어 목록
router.get('/', (req, res) => {
  res.json(tours);
});

// 특정 투어 상세
router.get('/:id', (req, res) => {
  const tour = tours.find(t => t.id === Number(req.params.id));
  if (!tour) return res.status(404).json({ error: '투어를 찾을 수 없습니다.' });
  res.json(tour);
});

module.exports = router;
