const router = require('express').Router();
const { tours } = require('../data/seed');

// 모든 목적지 목록
router.get('/', (req, res) => {
  res.json(tours);
});

// 특정 목적지 상세
router.get('/:id', (req, res) => {
  const dest = tours.find(t => t.id === Number(req.params.id));
  if (!dest) return res.status(404).json({ error: '상품을 찾을 수 없습니다.' });
  res.json(dest);
});

module.exports = router;
