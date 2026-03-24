const TRANSLATIONS = {
  ko: {
    nav_explore:   '여행지 탐색',
    nav_guides:    '가이드 소개',
    nav_bookings:  '내 예약',
    guides_title:  '가이드 소개',
    guides_sub:    '여운의 모든 투어는 서울을 깊이 아는 로컬 가이드와 함께합니다.',
    guide1_name: '김민준', guide1_role: '역사·궁궐 전문 가이드',
    guide1_bio: '서울대 한국사 출신. 경복궁·창덕궁 해설 7년 경력. 딱딱한 역사가 아닌 조선 왕실의 생생한 이야기를 들려드립니다.',
    guide2_name: '이서연', guide2_role: '미식·시장 전문 가이드',
    guide2_bio: '10년간 서울 골목 미식을 연구해온 푸드 저널리스트. 광장시장부터 신당동 떡볶이 타운까지, 현지인만 아는 맛집의 이야기를 함께합니다.',
    guide3_name: '박준서', guide3_role: '아웃도어·웰니스 가이드',
    guide3_bio: '산악 가이드 자격증 보유. 관악산·인왕산 코스 전문. 등산 후 하산주 문화까지 서울의 산을 제대로 즐기는 방법을 안내합니다.',
    guide4_name: '최유진', guide4_role: '카페·문화공간 큐레이터',
    guide4_bio: '연희동·연남동·성수동을 주무대로 활동하는 독립 큐레이터. 숨겨진 카페와 독립 서점, 아티스트 공방을 직접 발굴해 소개합니다.',
    guide5_name: '정도현', guide5_role: '전통주·공예 클래스 강사',
    guide5_bio: '전통주 소믈리에 & 도예 작가. 막걸리 양조부터 도자기 성형까지, 손으로 빚는 한국의 전통 문화를 가르칩니다.',
    guide6_name: '한지원', guide6_role: '야경·야간 투어 전문 가이드',
    guide6_bio: '남산·청계천 야경 투어 전문. 낮과 전혀 다른 서울의 밤을 가장 아름다운 앵글로 안내합니다. 야경 포토그래피 팁도 함께 드립니다.',
    hero_ornament: 'Yeoun Travel',
    hero_title:    '서울이 남긴\n여운',
    hero_sub:      '스쳐 지나는 관광이 아닌\n오래도록 마음에 머무는 서울의 경험을 선별합니다.',
    hero_scroll:   'scroll ↓',
    section_title: '여행 상품',
    section_sub_pre:  '총 ',
    section_sub_post: '개의 상품이 준비되어 있습니다.',
    filter_all:   '전체',
    filter_class: '원데이 클래스',
    filter_half:  '반나절 투어',
    filter_full:  '하루 투어',
    book_now:          '예약하기 →',
    coming_soon_btn:   '준비 중입니다',
    per_person:        ' / 1인',
    footer_slogan:     '여행이 끝난 후에도 오래 남는 기억',
    // booking
    booking_title:    '예약 정보 입력',
    booking_sub:      '아래 정보를 입력하고 예약을 완료하세요.',
    label_name:       '예약자 이름 *',
    label_email:      '이메일 주소 *',
    label_travelers:  '인원 수 *',
    label_date:       '출발 날짜 *',
    ph_name:          '홍길동',
    ph_email:         'example@email.com',
    ph_travelers:     '선택하세요',
    person_unit:      '명',
    total_label:      '예상 총 금액',
    submit_btn:       '✈️ 예약 완료하기',
    submitting:       '처리 중...',
    success_title:    '예약이 완료되었습니다!',
    success_sub:      '소중한 여정이 기대됩니다.\n예약 확인서는 이메일로 발송됩니다.',
    booking_id_pre:   '예약번호: #',
    view_bookings:    '내 예약 보기',
    explore_more:     '더 둘러보기',
    group_hint_pre:   '이 상품은 ',
    group_hint_mid:   '명 이상 ',
    group_hint_post:  '명 이하로 신청 가능합니다.',
    // my-bookings
    my_title:              '내 예약 목록',
    my_sub:                '이메일 주소로 예약 내역을 조회하세요.',
    label_email_search:    '이메일 주소',
    ph_email_search:       '예약 시 입력한 이메일',
    search_btn:            '조회하기',
    cancel_btn:            '취소',
    canceling:             '취소 중...',
    cancel_confirm:        '이 예약을 취소하시겠습니까?',
    depart_suffix:         ' 출발',
    people_unit:           '명',
    empty_no_booking:      '해당 이메일로 등록된 예약이 없습니다.',
    empty_all_canceled:    '모든 예약이 취소되었습니다.',
    explore_link:          '여행지 둘러보기',
    total_pre:             '총 ',
    total_post:            '개의 예약이 있습니다.',
    loading_bookings:      '예약 내역을 조회 중...',
    server_error:          '서버에 연결할 수 없습니다.\n백엔드 서버가 실행 중인지 확인해주세요.',
    query_error:           '조회 중 오류가 발생했습니다. 서버 연결을 확인해주세요.',
  },

  en: {
    nav_explore:   'Explore',
    nav_guides:    'Our Guides',
    nav_bookings:  'My Bookings',
    guides_title:  'Meet Our Guides',
    guides_sub:    'Every Yeoun tour is led by a local guide who knows Seoul deeply.',
    guide1_name: 'Minjun Kim', guide1_role: 'History & Palace Specialist',
    guide1_bio: 'Seoul National University Korean History graduate. 7 years interpreting Gyeongbokgung and Changdeokgung. Brings Joseon royal history to life.',
    guide2_name: 'Seoyeon Lee', guide2_role: 'Food & Market Specialist',
    guide2_bio: 'Food journalist who has spent 10 years exploring Seoul\'s alleys. From Gwangjang Market to Sindang-dong Tteokbokki Town — she knows every hidden gem.',
    guide3_name: 'Junseo Park', guide3_role: 'Outdoor & Wellness Guide',
    guide3_bio: 'Certified mountain guide specialising in Gwanaksan and Inwangsan trails. Leads the full experience: summit, descent, and the traditional post-hike makgeolli ritual.',
    guide4_name: 'Yujin Choi', guide4_role: 'Café & Culture Curator',
    guide4_bio: 'Independent curator based in Yeonhui-dong, Yeonnam-dong, and Seongsu-dong. Personally scouts hidden cafés, indie bookshops, and artist workshops.',
    guide5_name: 'Dohyun Jung', guide5_role: 'Traditional Spirits & Craft Instructor',
    guide5_bio: 'Certified makgeolli sommelier and ceramic artist. Teaches the hands-on traditions of Korea — from brewing to pottery.',
    guide6_name: 'Jiwon Han', guide6_role: 'Night Tour Specialist',
    guide6_bio: 'Expert in Namsan and Cheonggyecheon night tours. Reveals a Seoul that looks nothing like daytime — with photography tips included.',
    hero_ornament: 'Yeoun Travel',
    hero_title:    "Seoul's\nLasting Impression",
    hero_sub:      "Not just sightseeing —\nwe curate experiences in Seoul that stay with you long after.",
    hero_scroll:   'scroll ↓',
    section_title: 'Experiences',
    section_sub_pre:  '',
    section_sub_post: ' experiences available',
    filter_all:   'All',
    filter_class: 'One-Day Class',
    filter_half:  'Half-Day Tour',
    filter_full:  'Full-Day Tour',
    book_now:          'Book Now →',
    coming_soon_btn:   'Coming Soon',
    per_person:        ' / person',
    footer_slogan:     'Memories that linger long after the journey.',
    // booking
    booking_title:    'Booking Details',
    booking_sub:      'Fill in the details below to complete your booking.',
    label_name:       'Full Name *',
    label_email:      'Email Address *',
    label_travelers:  'Number of Guests *',
    label_date:       'Date *',
    ph_name:          'Jane Doe',
    ph_email:         'example@email.com',
    ph_travelers:     'Select',
    person_unit:      '',
    total_label:      'Estimated Total',
    submit_btn:       '✈️ Complete Booking',
    submitting:       'Processing...',
    success_title:    'Booking Confirmed!',
    success_sub:      'We look forward to your journey.\nA confirmation will be sent to your email.',
    booking_id_pre:   'Booking ID: #',
    view_bookings:    'My Bookings',
    explore_more:     'Explore More',
    group_hint_pre:   'This experience accepts ',
    group_hint_mid:   ' to ',
    group_hint_post:  ' guests.',
    // my-bookings
    my_title:              'My Bookings',
    my_sub:                'Look up your reservations by email address.',
    label_email_search:    'Email Address',
    ph_email_search:       'Email used during booking',
    search_btn:            'Search',
    cancel_btn:            'Cancel',
    canceling:             'Canceling...',
    cancel_confirm:        'Are you sure you want to cancel this booking?',
    depart_suffix:         ' departure',
    people_unit:           ' guest(s)',
    empty_no_booking:      'No bookings found for this email.',
    empty_all_canceled:    'All bookings have been canceled.',
    explore_link:          'Explore Experiences',
    total_pre:             '',
    total_post:            ' booking(s) found.',
    loading_bookings:      'Searching for bookings...',
    server_error:          'Unable to connect to the server.\nPlease make sure the backend is running.',
    query_error:           'An error occurred. Please check your server connection.',
  },

  zh: {
    nav_explore:   '探索体验',
    nav_guides:    '导游介绍',
    nav_bookings:  '我的预订',
    guides_title:  '导游介绍',
    guides_sub:    '每一场旅程都由深谙首尔的本地导游全程陪伴。',
    guide1_name: '金敏俊', guide1_role: '历史·宫殿专业导游',
    guide1_bio: '首尔大学韩国史毕业，景福宫·昌德宫解说经验7年。以生动的故事带您走进朝鲜王室的历史世界。',
    guide2_name: '李瑞妍', guide2_role: '美食·市场专业导游',
    guide2_bio: '深耕首尔胡同美食十年的美食记者。从广藏市场到新堂洞炒年糕城，带您发现只有当地人才知道的美味。',
    guide3_name: '朴俊瑞', guide3_role: '户外·健康导游',
    guide3_bio: '持有登山导游资格证，专注冠岳山·仁王山路线。从登顶到下山后的马格利文化，带您完整体验首尔的山野魅力。',
    guide4_name: '崔宥真', guide4_role: '咖啡馆·文化空间策展人',
    guide4_bio: '活跃于延禧洞、延南洞、圣水洞的独立策展人。亲自发掘隐秘咖啡馆、独立书店与艺术家工坊。',
    guide5_name: '郑道铉', guide5_role: '传统酒·工艺课程讲师',
    guide5_bio: '传统酒侍酒师兼陶艺师。从马格利酿造到陶器制作，传授韩国传统手工文化的精髓。',
    guide6_name: '韩智媛', guide6_role: '夜景·夜游专业导游',
    guide6_bio: '专注南山·清溪川夜游。带您发现与白天截然不同的首尔夜色之美，并分享夜景摄影技巧。',
    hero_ornament: 'Yeoun Travel',
    hero_title:    '首尔留下的\n余韵',
    hero_sub:      '不只是观光，\n而是精心甄选久久留在心中的首尔体验。',
    hero_scroll:   'scroll ↓',
    section_title: '体验项目',
    section_sub_pre:  '共',
    section_sub_post: '个体验项目',
    filter_all:   '全部',
    filter_class: '一日课程',
    filter_half:  '半日游',
    filter_full:  '全日游',
    book_now:          '立即预订 →',
    coming_soon_btn:   '即将推出',
    per_person:        ' / 人',
    footer_slogan:     '旅程结束后，记忆长存。',
    // booking
    booking_title:    '填写预订信息',
    booking_sub:      '请填写以下信息以完成预订。',
    label_name:       '预订人姓名 *',
    label_email:      '电子邮箱 *',
    label_travelers:  '人数 *',
    label_date:       '出发日期 *',
    ph_name:          '张三',
    ph_email:         'example@email.com',
    ph_travelers:     '请选择',
    person_unit:      '人',
    total_label:      '预计总金额',
    submit_btn:       '✈️ 确认预订',
    submitting:       '处理中...',
    success_title:    '预订成功！',
    success_sub:      '期待您的旅程。\n确认函将发送至您的邮箱。',
    booking_id_pre:   '预订编号：#',
    view_bookings:    '我的预订',
    explore_more:     '继续浏览',
    group_hint_pre:   '此项目接受 ',
    group_hint_mid:   ' 至 ',
    group_hint_post:  ' 人预订。',
    // my-bookings
    my_title:              '我的预订',
    my_sub:                '请输入邮箱地址查询预订记录。',
    label_email_search:    '电子邮箱',
    ph_email_search:       '预订时填写的邮箱',
    search_btn:            '查询',
    cancel_btn:            '取消预订',
    canceling:             '取消中...',
    cancel_confirm:        '确定要取消此预订吗？',
    depart_suffix:         '出发',
    people_unit:           '人',
    empty_no_booking:      '该邮箱暂无预订记录。',
    empty_all_canceled:    '所有预订已取消。',
    explore_link:          '浏览体验项目',
    total_pre:             '共',
    total_post:            '条预订记录。',
    loading_bookings:      '正在查询预订记录...',
    server_error:          '无法连接服务器。\n请确认后端服务是否正在运行。',
    query_error:           '查询时发生错误，请检查服务器连接。',
  }
};

const DURATION_MAP = {
  '원데이 (약 3시간)': { en: 'One Day (~3 hrs)', zh: '一日（约3小时）' },
  '원데이 (약 4시간)': { en: 'One Day (~4 hrs)', zh: '一日（约4小时）' },
  '반나절 (약 3시간)': { en: 'Half Day (~3 hrs)', zh: '半日（约3小时）' },
  '반나절 (약 4시간)': { en: 'Half Day (~4 hrs)', zh: '半日（约4小时）' },
  '하루 (약 7시간)': { en: 'Full Day (~7 hrs)', zh: '全日（约7小时）' },
  '하루 (약 8시간)': { en: 'Full Day (~8 hrs)', zh: '全日（约8小时）' },
  '하루 (약 9시간)': { en: 'Full Day (~9 hrs)', zh: '全日（约9小时）' },
};

let currentLang = localStorage.getItem('yeoun_lang') || 'ko';

function t(key) {
  return (TRANSLATIONS[currentLang] || TRANSLATIONS.ko)[key] || key;
}

function localizedDuration(ko) {
  if (currentLang === 'ko') return ko;
  return (DURATION_MAP[ko] || {})[currentLang] || ko;
}

function localizedField(obj, field) {
  if (currentLang === 'en') return obj[field + 'En'] || obj[field];
  if (currentLang === 'zh') return obj[field + 'Zh'] || obj[field];
  return obj[field];
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('yeoun_lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
}

function initLang() {
  setLang(currentLang);
}
