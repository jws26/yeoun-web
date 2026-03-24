// ──────────────────────────────────────────
//  여운 YeoUn — 투어 데이터
// ──────────────────────────────────────────

const tours = [

  // ── 실제 판매 투어 ──────────────────────
  {
    id: 1,
    type: 'tour-half',
    comingSoon: false,
    name:     "솥뚜껑 삼겹살&한강 피크닉",
    nameEn:   "Cast-Iron Samgyeopsal & Han River Picnic",
    nameZh:   "铁锅五花肉 & 汉江野餐",
    image: "/images/samgyeopsal.jpeg",
    price: 50000,
    duration: "반나절 (약 4시간)",
    fixedDate: "2026-04-04",
    minGroup: 1,
    maxGroup: 6,
    schedule: [
      { time: "17:00", emoji: "📍", label: "홍대입구역 9번 출구 집합", detail: "홍대입구역 9번 출구 앞에서 가이드와 만납니다." },
      { time: "17:00~17:20", emoji: "🚶", label: "삼겹살 식당으로 도보 이동", detail: "가이드와 함께 도보 20분, 골목 풍경을 구경하며 식당으로 이동합니다." },
      { time: "17:20~18:50", emoji: "🍖", label: "솥뚜껑 삼겹살 + 소맥", detail: "달군 솥뚜껑 위에서 직접 굽는 두툼한 삼겹살. 황금비율 소맥 한 잔과 함께 1시간 30분 식사." },
      { time: "18:50~19:00", emoji: "🚕", label: "택시로 망원 한강공원 이동", detail: "택시를 타고 10분, 망원 한강공원으로 이동합니다." },
      { time: "19:00~21:00", emoji: "🍺", label: "망원 한강 피크닉", detail: "피크닉 매트 위에서 시원한 맥주와 함께 2시간 한강 피크닉. 노을과 야경을 즐기며 마무리." }
    ],
    description: "달군 솥뚜껑에 지글지글 구운 삼겹살과 황금비율 소맥으로 1부를 채우고, 한강공원으로 이동해 피크닉 매트 위 치맥으로 마무리하는 약 4시간의 서울 먹놀 투어. 외국인도, 서울 토박이도 모두 반하는 로컬 경험.",
    descriptionEn: "Start with thick samgyeopsal sizzling on a cast-iron pot lid, paired with a perfectly mixed somaek (soju + beer). Then head to Han River Park for a laid-back chimaek (chicken + beer) picnic on the grass. The ultimate Seoul local experience — about 4 hours.",
    descriptionZh: "先在烧热的铁锅锅盖上烤出厚实的五花肉，搭配黄金比例调配的烧啤（烧酒+啤酒）度过第一部分；再移步汉江公园，在野餐垫上享用炸鸡配啤酒，欣赏夕阳或夜景，圆满结束约4小时的首尔美食之旅。",
    highlights: ["솥뚜껑 삼겹살 무한 제공", "소맥 황금비율 믹싱 비법", "한강 피크닉 세트 (매트·치킨·맥주)", "소규모 (1~6인) 밀착 진행"],
    highlightsEn: ["Unlimited cast-iron samgyeopsal", "Secret somaek golden ratio", "Han River picnic kit (mat · chicken · beer)", "Small group (1–6 pax)"],
    highlightsZh: ["铁锅五花肉无限量", "烧啤黄金调配秘诀", "汉江野餐套装（垫子·炸鸡·啤酒）", "小组出行（1~6人）"]
  },

  {
    id: 2,
    type: 'tour-half',
    comingSoon: false,
    name:     "한강 자전거 & 치맥 피크닉",
    nameEn:   "Han River Cycling & Chimaek Picnic",
    nameZh:   "汉江骑行 & 炸鸡啤酒野餐",
    image: "/images/hangang.jpeg",
    price: 50000,
    duration: "반나절 (약 3시간)",
    minGroup: 1,
    maxGroup: 6,
    schedule: [
      { time: "17:00", emoji: "📍", label: "여의도역 집합", detail: "여의도역 출구에서 가이드와 만납니다. 자전거 대여 및 안전 안내 후 출발." },
      { time: "17:00~17:30", emoji: "🚲", label: "한강 자전거 라이딩", detail: "여의도 한강공원을 따라 30분간 자전거 라이딩. 시원한 강바람과 함께 서울의 풍경을 즐깁니다." },
      { time: "17:30~19:30", emoji: "🍺", label: "치맥 피크닉 & 여운 게임", detail: "피크닉 매트에 자리를 잡고 치킨을 시켜 시원한 맥주와 함께 즐깁니다. 여운이 준비한 작은 게임들로 더욱 특별한 시간을." }
    ],
    description: "여의도 한강공원에서 자전거로 바람을 가르고, 피크닉 매트 위에서 치킨과 맥주로 여유롭게 마무리하는 2시간 30분 코스. 여운이 준비한 소소한 게임들로 처음 만난 사이도 금세 친해집니다.",
    descriptionEn: "Cruise along Yeouido Han River Park on a bike, then settle in on a picnic mat with crispy fried chicken and cold beer. Yeoun's hand-picked mini-games make sure everyone has a great time — even if you're meeting for the first time.",
    descriptionZh: "骑着自行车穿越汉江公园，然后在野餐垫上享用炸鸡和冰啤酒。余韵精心准备的小游戏让大家迅速熟络，度过轻松愉快的2.5小时。",
    highlights: ["자전거 대여 포함", "치킨 & 맥주 제공", "여운 시그니처 미니 게임", "소규모 (1~6인) 밀착 진행"],
    highlightsEn: ["Bicycle rental included", "Fried chicken & beer provided", "Yeoun signature mini-games", "Small group (1–6 pax)"],
    highlightsZh: ["含自行车租借", "含炸鸡与啤酒", "余韵特色小游戏", "小组出行（1~6人）"]
  },

  // ── Coming Soon ─────────────────────────
  {
    id: 3,
    type: 'tour-half',
    comingSoon: true,
    name:     "새벽 노량진 수산시장 & 즉석 회 피크닉",
    nameEn:   "Dawn Noryangjin Fish Market & Fresh Sashimi Picnic",
    nameZh:   "凌晨鹭梁津水产市场 & 即食生鱼片野餐",
    image: "/images/noryangjin.jpeg",
    price: 75000,
    duration: "반나절 (약 4시간)",
    durationEn: "Half-Day (approx. 4 hrs)",
    durationZh: "半日（约4小时）",
    minGroup: 1,
    maxGroup: 6,
    description: "이른 새벽 노량진 수산시장에서 직접 고른 활어를 즉석 회로 떠서 한강에서 즐기는 투어. 곧 오픈 예정!",
    descriptionEn: "Choose your own fresh fish at dawn in Noryangjin Market, then enjoy custom-sliced sashimi by the Han River. Coming soon!",
    descriptionZh: "在凌晨的鹭梁津水产市场亲手挑选活鱼，即时切片后在汉江边享用。即将开放！",
    highlights: ["노량진 수산시장 투어", "즉석 회 세팅", "한강 피크닉"],
    highlightsEn: ["Noryangjin Market tour", "Fresh sashimi setup", "Han River picnic"],
    highlightsZh: ["鹭梁津市场游览", "即切生鱼片", "汉江野餐"]
  },
  {
    id: 4,
    type: 'tour-half',
    comingSoon: true,
    name:     "광장시장 야식 투어 & 청계천 야경 산책",
    nameEn:   "Gwangjang Night Food Tour & Cheonggyecheon Stream Walk",
    nameZh:   "广藏市场夜宵游 & 清溪川夜景散步",
    image: "/images/gwangjang.jpeg",
    price: 55000,
    duration: "반나절 (약 3.5시간)",
    durationEn: "Half-Day (approx. 3.5 hrs)",
    durationZh: "半日（约3.5小时）",
    minGroup: 1,
    maxGroup: 8,
    description: "100년 전통 광장시장에서 빈대떡·마약김밥·순대를 맛보고, 청계천 야경을 산책하는 서울 야간 미식 투어. 곧 오픈!",
    descriptionEn: "Taste bindaetteok, mayak gimbap, and sundae at the century-old Gwangjang Market, then stroll along the illuminated Cheonggyecheon Stream. Opening soon!",
    descriptionZh: "在拥有百年历史的广藏市场品尝绿豆煎饼、麻药紫菜包饭、血肠，再漫步清溪川欣赏夜景。即将开放！",
    highlights: ["광장시장 야식 투어", "현지 가이드 해설", "청계천 야경 산책"],
    highlightsEn: ["Gwangjang night food tour", "Local guide narration", "Cheonggyecheon night walk"],
    highlightsZh: ["广藏市场夜宵游", "本地导游讲解", "清溪川夜景散步"]
  },
  {
    id: 5,
    type: 'tour-half',
    comingSoon: true,
    name:     "홍대 포장마차 투어 & 한강 불꽃 감상",
    nameEn:   "Hongdae Street Pojangmacha Tour & Han River Fireworks",
    nameZh:   "弘大路边摊游 & 汉江烟火欣赏",
    image: "/images/hongdae.jpeg",
    price: 70000,
    duration: "반나절 (약 4시간)",
    durationEn: "Half-Day (approx. 4 hrs)",
    durationZh: "半日（约4小时）",
    minGroup: 1,
    maxGroup: 8,
    description: "홍대 골목 포장마차에서 떡볶이·어묵·계란빵을 먹고, 한강변으로 이동해 야경과 불꽃을 감상하는 감성 투어. 곧 오픈!",
    descriptionEn: "Graze on tteokbokki, eomuk, and egg bread at Hongdae's street stalls, then head to the Han River to enjoy the skyline and fireworks. Coming soon!",
    descriptionZh: "在弘大小巷的路边摊品尝炒年糕、鱼糕、鸡蛋面包，再移步汉江边欣赏夜景与烟火。即将开放！",
    highlights: ["홍대 포장마차 투어", "떡볶이·어묵 시식", "한강 야경 & 불꽃"],
    highlightsEn: ["Hongdae pojangmacha tour", "Tteokbokki & eomuk tasting", "Han River night view & fireworks"],
    highlightsZh: ["弘大路边摊游", "炒年糕·鱼糕品尝", "汉江夜景与烟火"]
  }
];

const fs = require('fs');
const path = require('path');
const DB_PATH = path.join(__dirname, 'bookings.json');

function load() {
  try {
    if (fs.existsSync(DB_PATH)) return JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
  } catch (e) {}
  return { bookings: [], nextId: 1 };
}

function save() {
  fs.writeFileSync(DB_PATH, JSON.stringify({ bookings, nextId }, null, 2));
}

const stored = load();
const bookings = stored.bookings;
let nextId = stored.nextId;

function getNextId() {
  const id = nextId++;
  save();
  return id;
}

const _push = bookings.push.bind(bookings);
bookings.push = function(...args) { const r = _push(...args); save(); return r; };

const _splice = bookings.splice.bind(bookings);
bookings.splice = function(...args) { const r = _splice(...args); save(); return r; };

module.exports = { tours, bookings, getNextId };
