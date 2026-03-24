// ── 다국어 지원 (한국어 · 영어 · 중국어) ────
const TRANSLATIONS = {
  ko: {
    nav_tours:    '투어 보기',
    nav_bookings: '내 예약',
    hero_ornament: 'YeoUn Travel',
    hero_title:   '한강 피크닉\nVol 1.',
    hero_sub:     '솥뚜껑 삼겹살, 소맥, 한강 치맥까지\n서울 로컬의 먹고 노는 법, 한판이 보여드립니다.',
    hero_scroll:  'scroll ↓',
    section_title: '투어 상품',
    section_sub: '5개의 투어가 준비되어 있습니다.',
    section_sub_pre:  '',
    section_sub_post: '개의 투어가 준비되어 있습니다.',
    book_now:        '예약하기 →',
    coming_soon_btn: '오픈 준비 중',
    per_person:      ' / 1인',
    footer_slogan:   '먹고 마시고 놀고 — 서울에서 한판',
    // booking
    booking_title:    '예약 정보 입력',
    booking_sub:      '아래 정보를 입력하고 예약을 완료하세요.',
    label_name:       '예약자 이름 *',
    label_email:      '이메일 주소 *',
    label_travelers:  '인원 수 *',
    label_date:       '투어 날짜 *',
    ph_name:          '홍길동',
    total_label:      '예상 총 금액',
    submit_btn:       '🍖 예약 완료하기',
    submitting:       '처리 중...',
    success_title:    '예약이 완료되었습니다!',
    success_sub:      '한판 신나게 즐겨보세요 🎉\n확인 이메일은 곧 도착합니다.',
    booking_id_pre:   '예약번호: #',
    view_bookings:    '내 예약 보기',
    explore_more:     '투어 더 보기',
    group_hint_pre:   '이 투어는 ',
    group_hint_mid:   '명 이상 ',
    group_hint_post:  '명 이하로 신청 가능합니다.',
    // my-bookings
    my_title:           '내 예약 목록',
    my_sub:             '예약 시 입력한 이메일로 조회하세요.',
    label_email_search: '이메일 주소',
    ph_email_search:    '예약 시 입력한 이메일',
    search_btn:         '조회하기',
    cancel_btn:         '예약 취소',
    canceling:          '취소 중...',
    cancel_confirm:     '이 예약을 취소하시겠습니까?',
    depart_suffix:      ' 출발',
    people_unit:        '명',
    empty_no_booking:   '해당 이메일로 등록된 예약이 없습니다.',
    explore_link:       '투어 둘러보기',
    total_pre:          '총 ',
    total_post:         '개의 예약이 있습니다.',
    loading_bookings:   '예약 내역을 조회 중...',
    server_error:       '서버에 연결할 수 없습니다.\n백엔드 서버가 실행 중인지 확인해주세요.',
    query_error:        '조회 중 오류가 발생했습니다.',
    // schedule
    schedule_title:     '투어 일정',
    highlight_title:    '포함 사항',
  },

  en: {
    nav_tours:    'Tours',
    nav_bookings: 'My Bookings',
    hero_ornament: 'YeoUn Travel',
    hero_title:   'Han River Picnics\nVol 1.',
    hero_sub:     'Cast-iron BBQ, somaek, and Han River chimaek —\nexperience Seoul the way locals do.',
    hero_scroll:  'scroll ↓',
    section_title: 'Our Tours',
    section_sub: '5 tours available.',
    section_sub_pre:  '',
    section_sub_post: ' tours available.',
    book_now:        'Book Now →',
    coming_soon_btn: 'Coming Soon',
    per_person:      ' / person',
    footer_slogan:   'Eat · Drink · Play — Seoul Style',
    booking_title:    'Booking Details',
    booking_sub:      'Fill in the form below to complete your booking.',
    label_name:       'Full Name *',
    label_email:      'Email Address *',
    label_travelers:  'Number of People *',
    label_date:       'Tour Date *',
    ph_name:          'Jane Doe',
    total_label:      'Estimated Total',
    submit_btn:       '🍖 Complete Booking',
    submitting:       'Processing...',
    success_title:    'Booking Confirmed!',
    success_sub:      'Get ready for an awesome time in Seoul 🎉\nA confirmation email is on its way.',
    booking_id_pre:   'Booking #',
    view_bookings:    'View My Bookings',
    explore_more:     'Explore More',
    group_hint_pre:   'This tour accepts ',
    group_hint_mid:   ' to ',
    group_hint_post:  ' participants.',
    my_title:           'My Bookings',
    my_sub:             'Enter your email to view your bookings.',
    label_email_search: 'Email Address',
    ph_email_search:    'Email used at booking',
    search_btn:         'Search',
    cancel_btn:         'Cancel',
    canceling:          'Canceling...',
    cancel_confirm:     'Are you sure you want to cancel this booking?',
    depart_suffix:      '',
    people_unit:        ' pax',
    empty_no_booking:   'No bookings found for this email.',
    explore_link:       'Browse Tours',
    total_pre:          '',
    total_post:         ' booking(s) found.',
    loading_bookings:   'Loading bookings...',
    server_error:       'Cannot connect to server.\nPlease make sure the backend is running.',
    query_error:        'An error occurred. Please check your connection.',
    schedule_title:     'Tour Schedule',
    highlight_title:    "What's Included",
  },

  zh: {
    nav_tours:    '查看行程',
    nav_bookings: '我的预约',
    hero_ornament: 'YeoUn Travel',
    hero_title:   '汉江野餐\nVol 1.',
    hero_sub:     '铁锅五花肉、烧啤、汉江炸鸡啤酒野餐——\n跟着首尔本地人吃喝玩乐。',
    hero_scroll:  '向下滚动 ↓',
    section_title: '行程产品',
    section_sub: '共5个行程可供选择。',
    section_sub_pre:  '共 ',
    section_sub_post: ' 个行程可供选择。',
    book_now:        '立即预约 →',
    coming_soon_btn: '即将开放',
    per_person:      ' / 人',
    footer_slogan:   '吃喝玩乐 — 首尔式享受',
    booking_title:    '填写预约信息',
    booking_sub:      '请填写以下信息完成预约。',
    label_name:       '预约人姓名 *',
    label_email:      '电子邮件 *',
    label_travelers:  '人数 *',
    label_date:       '出行日期 *',
    ph_name:          '张三',
    total_label:      '预计总金额',
    submit_btn:       '🍖 完成预约',
    submitting:       '处理中...',
    success_title:    '预约成功！',
    success_sub:      '期待与您在首尔共度美好时光 🎉\n确认邮件即将发送。',
    booking_id_pre:   '预约编号: #',
    view_bookings:    '查看我的预约',
    explore_more:     '继续浏览',
    group_hint_pre:   '本行程接受 ',
    group_hint_mid:   ' 至 ',
    group_hint_post:  ' 人参加。',
    my_title:           '我的预约',
    my_sub:             '请输入预约时使用的电子邮件进行查询。',
    label_email_search: '电子邮件',
    ph_email_search:    '预约时填写的邮箱',
    search_btn:         '查询',
    cancel_btn:         '取消预约',
    canceling:          '取消中...',
    cancel_confirm:     '确定要取消该预约吗？',
    depart_suffix:      ' 出发',
    people_unit:        '人',
    empty_no_booking:   '未找到该邮件的预约记录。',
    explore_link:       '浏览行程',
    total_pre:          '共 ',
    total_post:         ' 条预约记录。',
    loading_bookings:   '正在加载预约记录...',
    server_error:       '无法连接服务器，请确认后端服务正在运行。',
    query_error:        '查询出错，请检查网络连接。',
    schedule_title:     '行程安排',
    highlight_title:    '包含项目',
  }
};

let currentLang = localStorage.getItem('yeoun_lang') || 'ko';

function t(key) {
  return (TRANSLATIONS[currentLang] || TRANSLATIONS.ko)[key] || key;
}

function localizedField(obj, field) {
  if (currentLang === 'en') return obj[field + 'En'] || obj[field];
  if (currentLang === 'zh') return obj[field + 'Zh'] || obj[field];
  return obj[field];
}

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (val.includes('\n')) {
      el.innerHTML = val.split('\n').join('<br>');
    } else {
      el.textContent = val;
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : currentLang;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('yeoun_lang', lang);
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  applyI18n();
  if (typeof onLangChange === 'function') onLangChange();
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.addEventListener('click', () => setLang(b.dataset.lang));
    b.classList.toggle('active', b.dataset.lang === currentLang);
  });
  applyI18n();
});
