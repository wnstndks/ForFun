// 사이트의 모든 내용은 이 파일에서 수정하세요.
// TODO 표시된 항목은 아직 더미 내용입니다.

window.SOJIN = {
  // 생애 연대기 — 위에서부터 순서대로 표시됩니다.
  // image는 선택. 예: image: "images/baby.jpg"
  timeline: [
    {
      year: "20XX", // TODO: 출생년도
      age: "0세",
      emoji: "👶",
      title: "전설의 시작",
      desc: "어느 평범한 날, 평범하지 않은 울음소리와 함께 이소진이 지구에 착륙했다. 담당 간호사는 훗날 \"그 눈빛에서 범상치 않은 기운을 느꼈다\"고 (아마도) 회고했다.", // TODO
    },
    {
      year: "20XX",
      age: "3세",
      emoji: "🍚",
      title: "첫 번째 명언",
      desc: "엄마, 아빠보다 먼저 한 말이 \"밥\"이었다는 설이 유력하다. 이때부터 인생의 우선순위가 확립되었다.", // TODO
    },
    {
      year: "20XX",
      age: "8세",
      emoji: "🎒",
      title: "초등학교 입학",
      desc: "입학식 날 교문 앞에서 사진을 47장 찍었다. 그중 눈 뜬 사진은 2장.", // TODO
    },
    {
      year: "20XX",
      age: "14세",
      emoji: "📓",
      title: "중2, 흑역사 아카이브 개설",
      desc: "이 시기의 기록은 본인 요청에 따라 국가기밀로 분류되었다. 열람 가능 시점: 2099년.", // TODO
    },
    {
      year: "20XX",
      age: "17세",
      emoji: "📚",
      title: "고등학생, 잠과의 전쟁",
      desc: "교과서를 펴고 3초 안에 잠드는 기술을 완성했다. 같은 반 친구들 사이에서 '수면 마스터'로 불렸다.", // TODO
    },
    {
      year: "20XX",
      age: "20세",
      emoji: "🎓",
      title: "성인 등극",
      desc: "드디어 어른이 되었다. 어른이 되면 다 알 줄 알았는데, 아는 건 배달 앱 쿠폰 쓰는 법뿐이었다.", // TODO
    },
    {
      year: "20XX",
      age: "현재",
      emoji: "✨",
      title: "그리고 지금",
      desc: "오늘도 이소진은 이소진답게 살아가는 중. 이 연대기는 계속 업데이트됩니다.", // TODO
    },
  ],

  // 사진 갤러리 — images 폴더에 사진을 넣고 src를 맞춰주세요.
  // 파일이 없으면 emoji가 대신 표시됩니다.
  gallery: [
    { src: "images/photo1.jpg", emoji: "😎", caption: "본인은 이게 잘 나온 사진이라고 주장함" }, // TODO
    { src: "images/photo2.jpg", emoji: "🍜", caption: "먹을 때가 제일 진지한 편" }, // TODO
    { src: "images/photo3.jpg", emoji: "😴", caption: "희귀한 장면 아님. 매우 흔함" }, // TODO
    { src: "images/photo4.jpg", emoji: "🤳", caption: "셀카 각도 연구 47년차(체감)" }, // TODO
    { src: "images/photo5.jpg", emoji: "🎉", caption: "텐션 최고점 기록 순간" }, // TODO
    { src: "images/photo6.jpg", emoji: "🫠", caption: "월요일 아침의 이소진" }, // TODO
  ],

  // 퀴즈 — answer는 정답 보기의 순서(0부터 시작)
  quiz: [
    {
      q: "이소진이 처음으로 한 말은? (설)",
      options: ["엄마", "아빠", "밥", "와이파이 비번 뭐야"],
      answer: 2,
    }, // TODO
    {
      q: "이소진의 공식 특기는?",
      options: ["3초 만에 잠들기", "피아노", "축구", "암산"],
      answer: 0,
    }, // TODO
    {
      q: "이소진의 중2 시절 기록이 공개되는 해는?",
      options: ["내년", "2030년", "2099년", "절대 안 됨"],
      answer: 2,
    }, // TODO
    {
      q: "이소진이 가장 진지해지는 순간은?",
      options: ["시험 볼 때", "밥 먹을 때", "운동할 때", "일할 때"],
      answer: 1,
    }, // TODO
    {
      q: "입학식 사진 47장 중 눈 뜬 사진은 몇 장?",
      options: ["0장", "2장", "23장", "47장"],
      answer: 1,
    }, // TODO
  ],

  // 퀴즈 결과 칭호 — 맞힌 개수가 min 이상인 것 중 가장 높은 것
  titles: [
    { min: 0, title: "지나가던 행인", desc: "이소진이 누구죠? 처음 듣는 이름인데요." },
    { min: 2, title: "얼굴만 아는 사이", desc: "복도에서 마주치면 목례 정도는 하는 사이." },
    { min: 4, title: "찐친 인증", desc: "이소진의 흑역사를 최소 3개는 알고 있다." },
    { min: 5, title: "이소진 박사", desc: "축하합니다. 이소진학 박사 학위가 수여되었습니다. 🎓" },
  ],
};
