/* ---------- EDIT THESE ---------- */
const CONFIG = {
  brand: 'Explore Vidhya',
  channelUrl: 'https://www.youtube.com/',           // your YouTube channel link
  latestUrl: 'https://www.youtube.com/',            // link to the latest live class video
  telegramUrl: 'https://t.me/explorevidhyayt',
  teacherPhoto: '',                                  // e.g. 'teacher.png' (transparent PNG next to index.html)
  upiId: 'yourname@upi',                             // your UPI ID
  payee: 'Explore Vidhya',                           // name shown in UPI apps
  gatewayLink: '',                                   // Razorpay / Cashfree payment link (optional)
  whatsapp: '',                                      // digits only with country code, e.g. 919876543210
  whatsappDisplay: 'WhatsApp channel: add link',
  email: 'hello@yourdomain.in',
  bank: { 'Account name': 'Your name', 'Bank': 'Your bank', 'Account number': '0000 0000 0000', 'IFSC': 'XXXX0000000' },
  showSampleTag: true                                // set false once you use real reviews
};
const COURSES = [
  { id:'free', classes:[8,9,10], tag:'Free · Live', title:'Free Live Classes', blurb:'Live classes for Class 8 to 10 on YouTube, with PPT and PDF notes and important MCQs.', lessons:'Live', hours:'Weekly', lang:'Hindi + English', price:0, mrp:0, glyph:'LIVE', tint:2 },
  { id:'c8m',  classes:[8],  tag:'Class 8',  title:'Class 8 Maths Complete', blurb:'Every chapter with recorded lessons, practice sets and chapter tests, explained in simple steps.', lessons:'50 lessons', hours:'38 hrs', lang:'Hindi + English', price:699, mrp:1299, glyph:'a²', tint:3 },
  { id:'c9m',  classes:[9],  tag:'Class 9',  title:'Class 9 Maths Complete', blurb:'A strong foundation for the boards, with solved NCERT examples, notes and tests.', lessons:'48 lessons', hours:'36 hrs', lang:'Hindi + English', price:799, mrp:1499, glyph:'√2', tint:1 },
  { id:'c10m', classes:[10], tag:'Class 10', title:'Class 10 Maths Board Complete', blurb:'Every NCERT chapter with recorded lessons, chapter tests, previous-year practice and a mock paper.', lessons:'62 lessons', hours:'48 hrs', lang:'Hindi + English', price:999, mrp:1999, glyph:'x²', tint:4 },
  { id:'c10q', classes:[10], tag:'MCQ pack', title:'Class 10 MCQ Mastery', blurb:'Important board-pattern MCQs chapter by chapter, with solutions and shortcut methods.', lessons:'30 lessons', hours:'20 hrs', lang:'Hindi + English', price:499, mrp:999, glyph:'MCQ', tint:2 }
];
const FILTERS = [['all','All batches'],['free','Free'],['8','Class 8'],['9','Class 9'],['10','Class 10']];
const VIDEOS = [
  { title:'Statistics: Important MCQs for Board Exam 2027', sub:'Class 10 · Live S02 E01', glyph:'x̄', tint:2 },
  { title:'Algebraic identities explained', sub:'Class 8 Maths', glyph:'(a+b)²', tint:3 },
  { title:'Understanding quadrilaterals', sub:'Class 8 Maths', glyph:'∠', tint:4 },
  { title:'Heron\'s formula with solved examples', sub:'Class 9 Maths', glyph:'Δ', tint:1 },
  { title:'Linear equations in two variables', sub:'Class 9 Maths', glyph:'ax+by', tint:2 },
  { title:'Quadratic equations by factorisation', sub:'Class 10 Maths', glyph:'x²', tint:1 }
];
const REVIEWS = [
  { name:'Ananya S.', course:'Class 10', text:'The live class made quadratic equations click for me. I rewatch the solved examples before every test.' },
  { name:'Rohit K.',  course:'Class 9',  text:'Lessons are slow and clear, and the PDF notes are short enough to revise the night before.' },
  { name:'Priya M.',  course:'Class 8',  text:'Algebra used to scare me. Seeing every step written out slowly helped a lot.' },
  { name:'Aman V.',   course:'Class 10', text:'Clear Hindi explanations, and the Telegram group answered my doubt the same day.' },
  { name:'Sana R.',   course:'Class 9',  text:'The practice sets match what comes in school tests, so I feel ready before each exam.' },
  { name:'Kunal D.',  course:'Class 8',  text:'My parents could follow along too, because every step is explained in simple words.' }
];
const FAQ = [
  ['Which classes do you teach?','We teach Class 8 to 10. Choose your class in the Classes section to see the batches made for it.'],
  ['Are the live classes free?','Yes. Live classes are free to watch on YouTube. Paid courses add recorded chapters, tests and extra practice.'],
  ['Where do I get the PPT and PDF notes?','The notes link is in each video description, and you can also get them in our Telegram group.'],
  ['How do I get access after paying?','Send the enrollment message with your payment screenshot. After we verify the payment, we share your course access on WhatsApp and email.'],
  ['Are the lessons in Hindi or English?','Lessons are explained in a mix of Hindi and English, and the notes are in English so they match your textbook.'],
  ['Which payment methods can I use?','UPI, debit and credit cards, net banking and direct bank transfer.']
];
/* ---------- END EDIT ---------- */

const $ = (s, r = document) => r.querySelector(s);
const inr = n => '₹' + Number(n).toLocaleString('en-IN');
function h(tag, props, ...kids) {
  const el = document.createElement(tag);
  for (const k in (props || {})) {
    const v = props[k];
    if (k === 'class') el.className = v;
    else if (k === 'text') el.textContent = v;
    else if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
    else if (v !== false && v != null) el.setAttribute(k, v === true ? '' : v);
  }
  kids.flat().forEach(c => { if (c != null) el.append(c.nodeType ? c : document.createTextNode(c)); });
  return el;
}
const PLAY = '<svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M3 1.5v15l13-7.5z"/></svg>';

/* branding + links */
document.querySelectorAll('[data-brand]').forEach(e => e.textContent = CONFIG.brand);
['navLive:channelUrl','heroYt:channelUrl','commYt:channelUrl','fYt:channelUrl','latestYt:latestUrl','navTg:telegramUrl','latestTg:telegramUrl','commTg:telegramUrl','fTg:telegramUrl'].forEach(p => { const [id, key] = p.split(':'); $('#' + id).href = CONFIG[key]; });
$('#fMail').textContent = CONFIG.email; $('#fWa').textContent = CONFIG.whatsappDisplay;
$('#yr').textContent = new Date().getFullYear();

/* mobile menu */
const head = $('.site-head'), menuBtn = $('#menuBtn');
menuBtn.addEventListener('click', () => { const o = head.classList.toggle('open'); menuBtn.setAttribute('aria-expanded', o); });
$('#nav').addEventListener('click', e => { if (e.target.closest('a')) { head.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); } });

/* batches */
let filter = 'all';
function renderFilters() {
  const box = $('#filters'); box.replaceChildren();
  FILTERS.forEach(([id, label]) => box.append(h('button', { type:'button', 'aria-pressed': String(filter === id), text: label, onclick: () => { filter = id; renderFilters(); renderCourses(); } })));
}
function renderCourses() {
  const grid = $('#courseGrid'); grid.replaceChildren();
  COURSES.filter(c => filter === 'all' || (filter === 'free' ? c.price === 0 : c.classes.includes(Number(filter)))).forEach(c => {
    const free = c.price === 0;
    const off = !free && c.mrp > c.price ? Math.round((1 - c.price / c.mrp) * 100) : 0;
    const priceRow = free
      ? h('div', { class:'price-row' }, h('span', { class:'price', text:'Free' }))
      : h('div', { class:'price-row' }, h('span', { class:'price', text:inr(c.price) }), c.mrp > c.price ? h('s', { class:'mrp', text:inr(c.mrp) }) : null, off ? h('span', { class:'off', text:off + '% off' }) : null);
    const actions = free
      ? h('div', { class:'actions' },
          h('a', { class:'btn btn-primary', href:CONFIG.channelUrl, target:'_blank', rel:'noopener noreferrer', text:'Watch live classes' }),
          h('a', { class:'btn btn-ghost', href:CONFIG.telegramUrl, target:'_blank', rel:'noopener noreferrer', text:'Join Telegram' }))
      : h('div', { class:'actions' },
          h('a', { class:'btn btn-primary', href:'#enroll', text:'Enroll now', onclick: () => chooseCourse(c.id) }),
          h('a', { class:'btn btn-ghost', href:CONFIG.channelUrl, target:'_blank', rel:'noopener noreferrer', text:'Free demo' }));
    grid.append(h('article', { class:'course' },
      h('div', { class:'thumb', 'data-tint': c.tint }, h('span', { class:'glyph', text:c.glyph }), h('span', { class:'chip' + (free ? ' free' : ''), text:c.tag })),
      h('div', { class:'course-body' },
        h('h3', { text:c.title }),
        h('p', { class:'muted', text:c.blurb }),
        h('ul', { class:'meta' }, [c.lessons, c.hours, c.lang].map(t => h('li', { text:t }))),
        priceRow, actions)));
  });
}

/* class tiles */
[[8,'Build strong basics','Concepts, practice sets and tests to make your foundation solid.'],[9,'Bridge to the boards','Step-by-step lessons that connect the basics to board-level questions.'],[10,'Be board exam ready','Live classes, important MCQs and full-length practice for Board Exam 2027.']].forEach(([n, t, d]) => $('#classGrid').append(h('a', { class:'cls', href:'#batches', onclick: () => { filter = String(n); renderFilters(); renderCourses(); } }, h('div', { class:'num' }, h('b', { text:String(n) }), h('span', { text:'Class' })), h('h3', { text:t }), h('p', { text:d }), h('span', { class:'go', text:'View Class ' + n + ' batches →' }))));

/* videos */
VIDEOS.forEach(v => {
  const thumb = h('div', { class:'screen', 'data-tint': v.tint }, h('span', { class:'glyph', text:v.glyph }), h('span', { class:'play' }));
  thumb.querySelector('.play').innerHTML = PLAY;
  $('#videoGrid').append(h('a', { class:'vid', href:v.url || CONFIG.channelUrl, target:'_blank', rel:'noopener noreferrer', 'aria-label': v.title + ', opens on YouTube' }, thumb, h('div', {}, h('p', { class:'eyebrow', text:v.sub }), h('h3', { text:v.title }))));
});

/* reviews */
REVIEWS.forEach(r => {
  $('#reviewGrid').append(h('figure', { class:'review' },
    h('div', { class:'stars', role:'img', 'aria-label':'5 out of 5 stars', text:'★★★★★' }),
    h('blockquote', { text:r.text }),
    h('figcaption', { class:'who' }, h('div', {}, h('strong', { text:r.name }), h('br'), h('span', { text:r.course })), CONFIG.showSampleTag ? h('span', { class:'sample', text:'Sample' }) : null)));
});

/* faq */
FAQ.forEach(([q, a]) => $('#faqList').append(h('details', {}, h('summary', { text:q }), h('p', { text:a }))));

/* enrollment + payment (paid courses only) */
const PAID = COURSES.filter(c => c.price > 0);
const sel = $('#courseSel');
PAID.forEach(c => sel.append(h('option', { value:c.id, text:c.title + ' (' + inr(c.price) + ')' })));
sel.value = 'c10m';
const course = () => PAID.find(c => c.id === sel.value);
function chooseCourse(id) { sel.value = id; updatePay(); $('#done').hidden = true; }
function updatePay() {
  const c = course();
  $('#sumCourse').textContent = c.title;
  $('#sumAmt').textContent = inr(c.price);
  $('#upiId').textContent = CONFIG.upiId;
  $('#upiAmt').textContent = String(c.price);
  const qr = $('#qr'); qr.replaceChildren();
  const uri = 'upi://pay?pa=' + encodeURIComponent(CONFIG.upiId) + '&pn=' + encodeURIComponent(CONFIG.payee) + '&am=' + c.price + '&cu=INR&tn=' + encodeURIComponent(c.title);
  if (typeof QRCode !== 'undefined') { try { new QRCode(qr, { text: uri, width: 160, height: 160, colorDark:'#000000', colorLight:'#ffffff', correctLevel: QRCode.CorrectLevel.M }); } catch (e) { qr.textContent = 'QR unavailable'; } }
  else qr.textContent = 'QR unavailable';
}
sel.addEventListener('change', () => { updatePay(); $('#done').hidden = true; });

const gw = $('#gwBtn');
if (CONFIG.gatewayLink) gw.href = CONFIG.gatewayLink; else { gw.removeAttribute('href'); gw.setAttribute('aria-disabled', 'true'); $('#gwNote').hidden = false; }
Object.entries(CONFIG.bank).forEach(([k, v]) => $('#bankList').append(h('dt', { text:k }), h('dd', { text:v })));

document.querySelectorAll('.tab').forEach(tab => tab.addEventListener('click', () => {
  document.querySelectorAll('.tab').forEach(t => { const on = t === tab; t.setAttribute('aria-selected', on); $('#' + t.getAttribute('aria-controls')).hidden = !on; });
}));

function selectText(el) { const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); }
function copyText(text, btn, src) {
  const label = btn.dataset.label || btn.textContent; btn.dataset.label = label;
  const ok = () => { btn.textContent = 'Copied'; setTimeout(() => btn.textContent = label, 1400); };
  const fail = () => { if (src) selectText(src); btn.textContent = 'Press copy'; setTimeout(() => btn.textContent = label, 1800); };
  try { navigator.clipboard.writeText(text).then(ok, fail); } catch (e) { fail(); }
}
document.querySelectorAll('[data-copy]').forEach(b => b.addEventListener('click', () => { const src = $('#' + b.dataset.copy); copyText(src.textContent, b, src); }));

$('#enrollForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = $('#fName').value.trim();
  const phone = $('#fPhone').value.replace(/\D/g, '').replace(/^91(?=\d{10}$)/, '');
  const email = $('#fEmail').value.trim();
  const errs = [];
  if (name.length < 2) errs.push('Enter the student name.');
  if (!/^[6-9]\d{9}$/.test(phone)) errs.push('Enter a valid 10-digit mobile number.');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.push('Enter a valid email address.');
  $('#formErr').replaceChildren(...errs.map(t => h('li', { text:t })));
  if (errs.length) return;
  const c = course(), d = new Date();
  const ref = 'EV-' + String(d.getDate()).padStart(2, '0') + String(d.getMonth() + 1).padStart(2, '0') + '-' + Math.random().toString(36).slice(2, 6).toUpperCase();
  const msg = ['Hello, I want to enroll.', 'Course: ' + c.title, 'Amount paid: ' + inr(c.price), 'Name: ' + name, 'Phone: ' + phone, 'Email: ' + email, 'Reference: ' + ref, 'I am attaching the payment screenshot.'].join('\n');
  const pre = h('pre', { text: msg });
  const copyBtn = h('button', { class:'btn btn-ghost', type:'button', text:'Copy message', onclick: ev => copyText(msg, ev.currentTarget, pre) });
  const row = h('div', { class:'row' });
  if (/^\d{10,15}$/.test(CONFIG.whatsapp)) row.append(h('a', { class:'btn btn-primary', href:'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(msg), target:'_blank', rel:'noopener noreferrer', text:'Send on WhatsApp' }));
  row.append(copyBtn);
  const done = $('#done');
  done.replaceChildren(
    h('h4', { text:'Reference ' + ref, tabindex:'-1', id:'doneHead' }),
    h('p', { text:'Last step: send this message to us with your payment screenshot. Your access is shared once we verify the payment.' }),
    pre, row);
  done.hidden = false;
  $('#doneHead').focus();
});

/* hero: teacher photo + typing line */
if (CONFIG.teacherPhoto) $('#teacherSlot').replaceChildren(h('img', { class:'teacher-img', src:CONFIG.teacherPhoto, alt:'Teacher' }));
(function () {
  const LINES = ["Class 8 · Algebraic identities", "Class 9 · Heron's formula", "Class 10 · Quadratic equations", "Important MCQs with solutions", "PPT and PDF notes"];
  const el = $('#typed');
  el.textContent = LINES[0];
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let i = 0, j = LINES[0].length, del = true;
  function tick() {
    const t = LINES[i];
    el.textContent = t.slice(0, j);
    if (!del && j === t.length) { del = true; setTimeout(tick, 1600); return; }
    if (del && j === 0) { del = false; i = (i + 1) % LINES.length; setTimeout(tick, 300); return; }
    j += del ? -1 : 1;
    setTimeout(tick, del ? 30 : 65);
  }
  setTimeout(tick, 1800);
})();

renderFilters(); renderCourses(); updatePay();
