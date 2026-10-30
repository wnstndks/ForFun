# 이소진 연대기 (ForFun)

친구 **이소진**의 출생부터 현재까지를 장난스럽게 다룬 한 페이지짜리 웹사이트.
거창하지 않게, 간단하게. GitHub Pages로 배포한다.

## 톤 가이드
- 진지한 위인전/다큐인 척하면서 사소한 일을 과장해서 웃기게 쓴다.
- 대상은 실존 친구다. 친구끼리 하는 놀림(외모 변천사, 쌍꺼풀 수술 썰 등)은 사용자가 준 내용 그대로 쓰되, **본인이 보고 같이 웃을 수 있는 수준**을 넘지 않게 한다.
- 공개 사이트이므로 가족 실명, 연락처, 상세 주소, 인스타 계정 링크 같은 신상 정보는 넣지 않는다. (가족은 "어머님"으로 표기)
- UI와 모든 텍스트는 한국어.
- 범위는 출생 ~ 현재까지만 (미래 예언 콘텐츠는 넣지 않음).

## 구조
```
index.html   한 페이지: 히어로 → 연대기 → 갤러리 → 퀴즈 → 푸터
style.css    전체 스타일 (모바일 우선, 데스크톱에서 타임라인 좌우 교차)
script.js    data.js를 읽어 렌더링, 스크롤 등장 애니메이션, 라이트박스, 퀴즈
data.js      ★ 콘텐츠 전부: window.SOJIN = { timeline, gallery, quiz, titles }
images/      사진·동영상 (git에 포함되어 배포됨)
```

## 규칙
- **콘텐츠 수정은 `data.js`만** 고친다. 에피소드/캡션/퀴즈 추가 때문에 HTML·JS를 건드리지 않는다.
- 빌드 도구·프레임워크·npm 의존성 없음. 순수 HTML/CSS/JS. 외부 리소스는 Google Fonts만.
- `data.js`는 fetch가 아니라 `<script>`로 로드한다 → `index.html`을 더블클릭(file://)해도 동작해야 한다.
- 이미지 경로는 항상 상대경로(`images/xxx.jpg`). GitHub Pages는 `/ForFun/` 하위 경로라 `/images/...` 절대경로는 깨진다.
- 이미지 파일이 없으면 이모지 자리표시로 대체된다(`script.js`의 `onerror`). 파일명은 영문 소문자 권장, GitHub Pages는 대소문자 구분.
- `// TODO` 표시된 항목은 아직 더미 내용이다.

## data.js 형식
- `timeline[]`: `{ year, age, emoji, title, desc, image? }`
- `gallery[]`: `{ src, emoji, caption }` — src가 `.mp4`면 동영상으로 표시 (아이폰 HEVC 영상은 일부 브라우저에서 재생 안 될 수 있음 → 이모지로 대체)
- `quiz[]`: `{ q, options: [4개], answer: 정답 인덱스(0부터) }`
- `titles[]`: `{ min, title, desc }` — 맞힌 개수가 `min` 이상인 것 중 가장 높은 칭호가 표시됨

## 로컬 실행
`index.html` 더블클릭, 또는 `npx serve .`

## 배포
- 레포: https://github.com/wnstndks/ForFun (브랜치 `main`)
- GitHub Pages: Settings → Pages → Deploy from a branch → `main` / `(root)`
- 주소: https://wnstndks.github.io/ForFun/ (커스텀 도메인 없음. CNAME 파일 만들지 말 것)
- `main`에 push하면 1~2분 뒤 자동 반영.
