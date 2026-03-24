// ── API 통신 유틸리티 ──────────────────────
// 이 파일은 백엔드 서버와 대화하는 역할을 합니다.
// BASE_URL = 우리 서버 주소

const BASE_URL = 'https://yeoun-web-production.up.railway.app/api';

async function apiFetch(path, options = {}) {
  const res = await fetch(BASE_URL + path, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });
  const data = await res.json();
  if (!res.ok) throw data;
  return data;
}
