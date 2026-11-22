/* ===== Question bank: [question, CORRECT answer, wrong1, wrong2, wrong3] ===== */
const BANK = [
  ["شنوّا يعني Stop Loss في التداول؟ 🛑", "أمر يسكّر الصفقة أوتوماتيكي كي الخسارة توصل لحدّ معيّن", "أمر يزيد في الربح متاعك", "أمر يشري عملة جديدة وحدو", "أمر يسكّر حسابك عند الوسيط"],
  ["شنوّا يعني Take Profit؟ 🎯", "أمر يسكّر الصفقة أوتوماتيكي كي الربح يوصل للهدف اللي حطّيتو", "أمر يوقّف الخسارة", "أمر يبدّل العملة", "أمر يزيد الرافعة المالية"],
  ["شكون الّي خلق البيتكوين (Bitcoin)؟ ₿", "ساتوشي ناكاموتو", "إيلون ماسك", "بيل غيتس", "فيتاليك بوتيرين"],
  ["قدّاه أقصى عدد من البيتكوين يتخلق؟ ⛏️", "21 مليون", "100 مليون", "مليار", "ما عندوش حدّ"],
  ["شنوّا هو سوق الفوريكس (Forex)؟ 💱", "سوق صرف العملات الأجنبية", "سوق بيع الذهب برك", "سوق الأسهم التونسية", "سوق العملات الرقمية برك"],
  ["كي نقولو زوج EUR/USD طلع، شنوّا يعني؟ 🇪🇺🇺🇸", "الأورو غلى مقابل الدولار", "الدولار غلى مقابل الأورو", "الإثنين نقصو", "السوق مسكّر"],
  ["الشمعة الخضراء في الشارت (Candlestick) تعني شنوّا؟ 🕯️", "السعر سكّر أعلى من ما فتح (صعود)", "السعر سكّر أقلّ من ما فتح (نزول)", "السوق مسكّر", "ما صار حتى تغيير"],
  ["شنوّا هو الدعم (Support)؟ 🧱", "مستوى سعر وين المشتريين يكونو أقوى والسعر يرتدّ للفوق", "مستوى وين البايعين يكونو أقوى", "ربح مضمون", "مؤشر يقيس الحجم"],
  ["شنوّا هي المقاومة (Resistance)؟ 🚧", "مستوى سعر وين البايعين يكونو أقوى والسعر يرجع للتحت", "مستوى وين السعر يطلع دايمًا", "اسم منصة تداول", "نوع من العملات الرقمية"],
  ["كي نقولو السوق Bull Market (سوق الثور) 🐂 شنوّا نقصدو؟", "السوق طالع والأسعار تزيد", "السوق ينزل برشا", "السوق واقف ما يتحرّكش", "السوق مسكّر"],
  ["كي نقولو Bear Market (سوق الدبّ) 🐻 شنوّا نقصدو؟", "السوق ينزل والأسعار تنقص", "السوق طالع للسما", "السوق بلا حجم", "السوق مفتوح 24 ساعة"],
  ["مؤشر RSI كي يفوت 70 يعني غالبًا شنوّا؟ 📊", "الأصل في منطقة Overbought (مشري برشا)", "الأصل في منطقة Oversold (مباع برشا)", "الأصل مات", "لازم تشري فورًا بلا تفكير"],
  ["شنوّا النصيحة الذهبية في إدارة المخاطر (Risk Management)؟ 🛡️", "ما تخسّرش أكثر من 1-2% من رأس مالك في الصفقة الوحدة", "حطّ كلّ فلوسك في صفقة وحدة", "ما تستعملش Stop Loss", "زيد في الصفقة كي تخسر باش تعوّض"],
  ["المتوسط المتحرّك (Moving Average) شنوّا يعمل؟ 📉", "يحسب متوسط سعر الإغلاق على مدّة معيّنة ويهدّي الحركة", "يتوقّع السعر بنسبة 100%", "يعطيك إشارة ربح مضمونة", "يحسب عمولة الوسيط"],
  ["الرافعة المالية (Leverage) شنوّا تعمل؟ ⚖️", "تخلّيك تتداول بمبلغ أكبر من رأس مالك، وتكبّر الربح والخسارة زوز", "تكبّر الربح برك", "تنقّص الخسارة برك", "تلغي الـ Spread"],
  ["شنوّا هو الـ Pip في الفوريكس؟ 📐", "أصغر حركة في سعر زوج العملات", "اسم عملة رقمية", "نوع من الشموع", "عمولة الوسيط"],
  ["الظلّ (Wick/Shadow) في الشمعة يمثّل شنوّا؟ 🕯️", "أعلى وأدنى سعر وصلو السعر في المدّة", "سعر الفتح برك", "حجم التداول", "اسم الوسيط"],
  ["شمعة الـ Doji معناها شنوّا؟ ⚖️", "سعر الفتح والإغلاق قريبين برشا، والسوق متردّد", "صعود قوي برشا", "نزول قوي برشا", "السوق مسكّر"],
  ["شنوّا هو الـ Blockchain؟ 🔗", "سلسلة بلوكات مشفّرة وموزّعة تسجّل المعاملات", "تطبيق للمحادثة", "بنك مركزي", "نوع من أنواع الشموع"],
  ["شنوّا يصير كي تتعرّض لـ Liquidation (تصفية)؟ 💥", "الوسيط يسكّر صفقتك خاطر الرصيد ما عادش يكفي", "تربح ضعف الفلوس", "الصفقة تتحوّل لعملة أخرى", "يرجعولك فلوسك كاملة"],
  ["شنوّا هو الـ Ethereum (ETH)؟ 🔷", "منصّة بلوكتشين تخدم بالـ Smart Contracts", "اسم آخر للبيتكوين", "بنك رقمي", "عملة تونسية"],
  ["الـ FOMO في التداول معناها شنوّا؟ 😱", "الخوف من فوات الفرصة، يخليك تشري بالعجلة", "استراتيجية رابحة 100%", "مؤشر فني", "نوع من الأوامر"],
  ["نسبة Risk/Reward = 1:3 معناها شنوّا؟ 🧮", "تخاطر بـ 1 باش تربح 3", "تخاطر بـ 3 باش تربح 1", "تربح دايمًا", "ما فما حتى مخاطرة"],
  ["مؤشر MACD يستعمل في شنوّا؟ 📈", "يقيس الزخم (Momentum) ويكشف تغيّر الاتجاه", "يحسب الضرائب", "يعرض أخبار السوق", "يحدّد الـ Spread"],
  ["العملة المستقرّة (Stablecoin) كيما USDT شنوّا ميزتها؟ 💵", "سعرها مربوط بالدولار تقريبًا", "تطلع كل يوم 10%", "ما تتباعش", "ما عندهاش بلوكتشين"],
  ["الـ Day Trading معناها شنوّا؟ ☀️", "تفتح وتسكّر الصفقات في نفس النهار", "تشدّ العملة سنين", "تتداول كان نهار الأحد", "تتداول بلا شارت"],
  ["شنوّا يعني Hodl في عالم الكريبتو؟ 💎🙌", "تشدّ العملة لمدّة طويلة وما تبيعش بسرعة", "تبيع في نفس الدقيقة", "تخسر كلّ شي", "تتداول بالرافعة"],
  ["شنوّا هو التنويع (Diversification)؟ 🧺", "ما تحطّش كلّ فلوسك في أصل واحد", "تشري عملة وحدة برك", "تتداول بلا Stop Loss", "تبيع كلّ شي"],
  ["الـ Spread في التداول هو شنوّا؟ 💸", "الفرق بين سعر الشراء وسعر البيع", "ربح اليوم", "اسم المنصّة", "عدد الصفقات المفتوحة"]
];

const LEVELS = { easy: ["🟢 ساهل", 5], medium: ["🟡 متوسط", 10], hard: ["🔴 صعيب", 15] };
const TIME = 10;
const LETTERS = ["A", "B", "C", "D"];

const $ = id => document.getElementById(id);
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

let state = { name: "", level: null, qs: [], idx: 0, score: 0, answered: false, time: TIME, history: [] };
let interval = null, autoNext = null;

function show(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  $(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ===== Welcome ===== */
document.querySelectorAll(".level").forEach(b => b.addEventListener("click", () => {
  document.querySelectorAll(".level").forEach(x => x.classList.remove("selected"));
  b.classList.add("selected");
  state.level = b.dataset.level;
  $("error").textContent = "";
}));

function showError(msg) {
  const e = $("error"); e.textContent = msg;
  e.classList.remove("shake"); void e.offsetWidth; e.classList.add("shake");
}

$("startBtn").addEventListener("click", () => {
  const name = $("playerName").value.trim();
  if (!name) return showError("⚠️ اكتب اسمك قبل ما تبدا!");
  if (!state.level) return showError("⚠️ اختار المستوى متاعك قبل ما تبدا!");
  startQuiz(name, state.level);
});
$("playerName").addEventListener("keydown", e => { if (e.key === "Enter") $("startBtn").click(); });

/* ===== Quiz ===== */
function startQuiz(name, level) {
  clearTimers();
  const count = LEVELS[level][1];
  state = {
    name, level, idx: 0, score: 0, answered: false, time: TIME, history: [],
    qs: shuffle(BANK).slice(0, count).map(q => {
      const options = shuffle(q.slice(1));
      return { q: q[0], options, correct: options.indexOf(q[1]) };
    })
  };
  $("qPlayer").textContent = name;
  show("quiz");
  loadQuestion();
}

function loadQuestion() {
  clearTimers();
  const cur = state.qs[state.idx];
  state.answered = false;
  $("qNum").textContent = `سؤال ${state.idx + 1} / ${state.qs.length}`;
  $("qScore").textContent = state.score;
  $("progressBar").style.width = (state.idx / state.qs.length * 100) + "%";
  $("question").textContent = cur.q;
  $("feedback").textContent = "";
  $("feedback").style.color = "";
  $("nextBtn").disabled = true;
  $("nextBtn").textContent = state.idx === state.qs.length - 1 ? "🏁 شوف النتيجة" : "NEXT QUESTION ⬅️";

  const box = $("answers"); box.innerHTML = "";
  cur.options.forEach((txt, i) => {
    const b = document.createElement("button");
    b.className = "answer";
    b.style.animationDelay = (i * 0.07) + "s";
    b.innerHTML = `<span class="letter">${LETTERS[i]}</span><span></span>`;
    b.lastChild.textContent = txt;
    b.addEventListener("click", () => selectAnswer(i));
    box.appendChild(b);
  });
  startTimer();
}

function startTimer() {
  state.time = TIME;
  renderTime();
  // reset bar instantly to full, then let it animate
  const bar = $("timeBar");
  bar.style.transition = "none"; bar.style.width = "100%"; void bar.offsetWidth; bar.style.transition = "";
  interval = setInterval(() => {
    state.time--;
    renderTime();
    if (state.time <= 0) { clearInterval(interval); interval = null; timeUp(); }
  }, 1000);
  requestAnimationFrame(() => { bar.style.width = ((TIME - 1) / TIME * 100) + "%"; });
}

function renderTime() {
  $("timeLeft").textContent = state.time;
  const low = state.time <= 3;
  $("timer").classList.toggle("low", low);
  $("timeBar").classList.toggle("low", low);
  if (state.time < TIME) $("timeBar").style.width = (state.time / TIME * 100) + "%";
}

function revealCorrect() {
  const cur = state.qs[state.idx];
  const btns = $("answers").children;
  [...btns].forEach(b => b.disabled = true);
  btns[cur.correct].classList.add("correct");
}

function selectAnswer(i) {
  if (state.answered) return;           // prevent multiple selections
  state.answered = true;
  clearInterval(interval); interval = null;
  const cur = state.qs[state.idx];
  const btns = $("answers").children;
  revealCorrect();
  const ok = i === cur.correct;
  if (ok) {
    state.score++;
    $("qScore").textContent = state.score;
    $("feedback").textContent = "🎉 برافو! إجابة صحيحة +1";
    $("feedback").style.color = "var(--green)";
  } else {
    btns[i].classList.add("wrong");
    $("feedback").textContent = "😅 غالط! الإجابة الصحيحة باللون الأخضر";
    $("feedback").style.color = "var(--red)";
  }
  state.history.push({ chosen: i, ok });
  $("nextBtn").disabled = false;
}

function timeUp() {
  if (state.answered) return;
  state.answered = true;
  revealCorrect();
  state.history.push({ chosen: null, ok: false });
  $("feedback").textContent = "⏰ الوقت سلّك! نمرّو للسؤال الجاي...";
  $("feedback").style.color = "var(--gold)";
  autoNext = setTimeout(nextQuestion, 1800);   // auto move on
}

function nextQuestion() {
  if (!state.answered) return;
  clearTimers();
  state.idx++;
  state.idx < state.qs.length ? loadQuestion() : showResult();
}
$("nextBtn").addEventListener("click", nextQuestion);

function clearTimers() {
  clearInterval(interval); interval = null;
  clearTimeout(autoNext); autoNext = null;
}

/* ===== Result ===== */
function showResult() {
  const total = state.qs.length;
  const correct = state.score;
  const unanswered = state.history.filter(h => h.chosen === null).length;
  const wrong = total - correct - unanswered;
  const pct = Math.round(correct / total * 100);
  let emoji, msg;
  if (pct >= 90) { emoji = "🏆"; msg = "🏆 ممتاز! إنت محترف!"; }
  else if (pct >= 70) { emoji = "🔥"; msg = "🔥 باهي برشا! عندك معلومات قوية!"; }
  else if (pct >= 50) { emoji = "👍"; msg = "👍 موش خايب، أما تنجم تتحسّن!"; }
  else { emoji = "📚"; msg = "📚 يلزمك تزيد تتعلّم على Trading!"; }

  $("progressBar").style.width = "100%";
  $("resEmoji").textContent = emoji;
  $("resMsg").textContent = msg;
  $("resPercent").textContent = pct + "%";
  $("rName").textContent = state.name;
  $("rLevel").textContent = LEVELS[state.level][0];
  $("rTotal").textContent = total;
  $("rCorrect").textContent = correct;
  $("rWrong").textContent = wrong;
  $("rUnanswered").textContent = unanswered;
  $("rScore").textContent = `${correct} / ${total}`;
  show("result");
}

/* ===== Review ===== */
$("reviewBtn").addEventListener("click", () => {
  const list = $("reviewList"); list.innerHTML = "";
  state.qs.forEach((q, i) => {
    const h = state.history[i];
    const div = document.createElement("div");
    div.className = "rev " + (h.chosen === null ? "skip" : h.ok ? "ok" : "ko");
    const p = document.createElement("p"); p.textContent = `${i + 1}. ${q.q}`;
    const c = document.createElement("div"); c.className = "g"; c.textContent = "✅ الإجابة الصحيحة: " + q.options[q.correct];
    div.append(p, c);
    if (h.chosen === null) {
      const y = document.createElement("div"); y.className = "y"; y.textContent = "⏰ ما جاوبتش في الوقت";
      div.appendChild(y);
    } else if (!h.ok) {
      const r = document.createElement("div"); r.className = "r"; r.textContent = "❌ إجابتك: " + q.options[h.chosen];
      div.appendChild(r);
    }
    list.appendChild(div);
  });
  show("review");
});
$("backBtn").addEventListener("click", () => show("result"));

/* ===== Restart ===== */
function playAgain() {
  clearTimers();
  document.querySelectorAll(".level").forEach(x => x.classList.remove("selected"));
  state.level = null;
  $("error").textContent = "";
  show("welcome");
}
$("againBtn").addEventListener("click", playAgain);
$("againBtn2").addEventListener("click", playAgain);