const { timeline, gallery, quiz, titles } = window.SOJIN;

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

// 이미지가 없으면 이모지로 대체
function imageOrEmoji(src, emoji, alt) {
  const wrap = document.createDocumentFragment();
  if (!src) {
    wrap.append(emoji);
    return wrap;
  }
  const img = new Image();
  img.src = src;
  img.alt = alt || "";
  img.loading = "lazy";
  img.onerror = () => img.replaceWith(emoji);
  wrap.append(img);
  return wrap;
}

// ---------- 연대기 ----------
const list = document.getElementById("timeline-list");
timeline.forEach((item) => {
  const li = el("li", "tl-item");
  li.append(el("span", "tl-dot", item.emoji));

  const card = el("div", "tl-card");
  card.append(el("div", "tl-meta", `${item.year} · ${item.age}`));
  card.append(el("h3", null, item.title));
  card.append(el("p", null, item.desc));
  if (item.image) {
    const img = new Image();
    img.src = item.image;
    img.alt = item.title;
    img.loading = "lazy";
    img.onerror = () => img.remove();
    card.append(img);
  }
  li.append(card);
  list.append(li);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);
document.querySelectorAll(".tl-item").forEach((li) => observer.observe(li));

// ---------- 갤러리 ----------
const grid = document.getElementById("gallery-grid");
const lightbox = document.getElementById("lightbox");
const lbMedia = document.getElementById("lightbox-media");
const lbCaption = document.getElementById("lightbox-caption");

gallery.forEach((photo) => {
  const fig = el("figure", "g-item");
  const thumb = el("div", "g-thumb");
  thumb.append(imageOrEmoji(photo.src, photo.emoji, photo.caption));
  fig.append(thumb, el("figcaption", null, photo.caption));
  fig.addEventListener("click", () => openLightbox(fig, photo));
  grid.append(fig);
});

function openLightbox(fig, photo) {
  lbMedia.replaceChildren();
  const img = fig.querySelector("img");
  if (img) {
    lbMedia.append(img.cloneNode());
  } else {
    lbMedia.append(el("div", "big-emoji", photo.emoji));
  }
  lbCaption.textContent = photo.caption;
  lightbox.hidden = false;
}

function closeLightbox() {
  lightbox.hidden = true;
}
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox || e.target.classList.contains("lightbox-close")) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

// ---------- 퀴즈 ----------
const quizBox = document.getElementById("quiz-box");
let current = 0;
let score = 0;

function renderQuestion() {
  const item = quiz[current];
  quizBox.replaceChildren();
  quizBox.append(el("div", "quiz-progress", `문제 ${current + 1} / ${quiz.length}`));
  quizBox.append(el("p", "quiz-q", item.q));

  const options = el("div", "quiz-options");
  const feedback = el("p", "quiz-feedback");
  const buttons = item.options.map((text, i) => {
    const btn = el("button", "quiz-opt", text);
    btn.addEventListener("click", () => {
      buttons.forEach((b) => (b.disabled = true));
      buttons[item.answer].classList.add("correct");
      if (i === item.answer) {
        score++;
        feedback.textContent = "정답! 이소진학 1학점 획득 🎉";
        feedback.style.color = "var(--correct)";
      } else {
        btn.classList.add("wrong");
        feedback.textContent = "땡! 이소진이 실망했습니다 😢";
        feedback.style.color = "var(--wrong)";
      }
      const next = el("button", "btn", current + 1 < quiz.length ? "다음 문제 →" : "결과 보기");
      next.addEventListener("click", () => {
        current++;
        current < quiz.length ? renderQuestion() : renderResult();
      });
      quizBox.append(next);
    });
    options.append(btn);
    return btn;
  });

  quizBox.append(options, feedback);
}

function renderResult() {
  const rank = [...titles].sort((a, b) => b.min - a.min).find((t) => score >= t.min) || titles[0];
  quizBox.replaceChildren();
  const result = el("div", "quiz-result");
  result.append(el("p", "score", `${score} / ${quiz.length}`));
  result.append(el("h3", null, rank.title));
  result.append(el("p", null, rank.desc));
  const retry = el("button", "btn", "다시 도전");
  retry.addEventListener("click", () => {
    current = 0;
    score = 0;
    renderQuestion();
  });
  result.append(retry);
  quizBox.append(result);
}

renderQuestion();
