/* ============================================
   رویا بیوتی — جاوااسکریپت (نسخه حرفه‌ای)
   ============================================ */

/* ===== تزریق آیکون‌های SVG ===== */
(function injectSprite() {
    var div = document.createElement('div');
    div.style.display = 'none';
    div.setAttribute('aria-hidden', 'true');
    div.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' +
        '<symbol id="ic-search" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></symbol>' +
        '<symbol id="ic-calendar" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></symbol>' +
        '<symbol id="ic-clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></symbol>' +
        '<symbol id="ic-eye" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></symbol>' +
        '<symbol id="ic-heart" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></symbol>' +
        '<symbol id="ic-heart-fill" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></symbol>' +
        '<symbol id="ic-spa" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9z"/><path d="M12 22C12 17.03 7.03 13 2 13c0 4.97 4.03 9 10 9z"/><path d="M12 22V12"/><path d="M12 7c0-4.97-4.03-9-9-9 0 4.97 4.03 9 9 9z"/></symbol>' +
        '<symbol id="ic-brush" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 22v-3c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v3H3z"/><path d="M7 17V7"/><path d="M7 7C7 4.24 9.24 2 12 2s5 2.24 5 5v1H7V7z"/></symbol>' +
        '<symbol id="ic-scissors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12"/></symbol>' +
        '<symbol id="ic-leaf" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></symbol>' +
        '<symbol id="ic-home" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></symbol>' +
        '<symbol id="ic-info" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></symbol>' +
        '<symbol id="ic-chevron-l" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m15 18-6-6 6-6"/></symbol>' +
        '<symbol id="ic-chevron-r" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></symbol>' +
        '<symbol id="ic-arrow-l" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 5l-7 7 7 7"/></symbol>' +
        '<symbol id="ic-arrow-r" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></symbol>' +
        '<symbol id="ic-fire" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></symbol>' +
        '<symbol id="ic-star" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></symbol>' +
        '<symbol id="ic-tag" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></symbol>' +
        '<symbol id="ic-mail" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></symbol>' +
        '<symbol id="ic-bulb" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></symbol>' +
        '<symbol id="ic-book" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></symbol>' +
        '<symbol id="ic-list" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></symbol>' +
        '<symbol id="ic-users" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></symbol>' +
        '<symbol id="ic-quote" viewBox="0 0 24 24" fill="currentColor"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></symbol>' +
        '</svg>';
    document.body.insertBefore(div, document.body.firstChild);
})();

/* ===== دکمه برگشت به بالا ===== */
window.addEventListener('scroll', function () {
    var btn = document.getElementById('btnTop');
    if (btn) btn.style.display = window.scrollY > 300 ? 'flex' : 'none';
    updateReadingBar();
});

function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

/* ===== نوار پیشرفت ===== */
function updateReadingBar() {
    var bar = document.getElementById('readingBar');
    if (!bar) return;
    var total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (total > 0 ? (window.scrollY / total * 100) : 0) + '%';
}

/* ===== ارسال جستجو به search.html ===== */
function submitSearch(event) {
    event.preventDefault();
    var input = document.getElementById('headerSearchInput');
    var q = input ? input.value.trim() : '';
    if (q.length > 0) {
        window.location.href = 'search.html?q=' + encodeURIComponent(q);
    }
}

/* ===== جستجوی زنده روی صفحه اصلی ===== */
function liveSearch() {
    var input   = document.getElementById('liveSearchInput');
    if (!input) return;
    var keyword = input.value.trim().toLowerCase();
    var cards   = document.querySelectorAll('.card');
    var found   = 0;

    cards.forEach(function (card) {
        var text = card.innerText.toLowerCase();
        if (keyword === '' || text.indexOf(keyword) !== -1) {
            card.style.display = '';
            found++;
        } else {
            card.style.display = 'none';
        }
    });

    var msg = document.getElementById('searchResultMsg');
    if (!msg) return;
    if (keyword === '') { msg.innerHTML = ''; return; }
    msg.innerHTML = found === 0
        ? '<p class="no-result-inline">هیچ مقاله‌ای با عبارت «' + keyword + '» پیدا نشد.</p>'
        : '<p class="found-inline"><strong>' + found + '</strong> مقاله یافت شد.</p>';
}

/* ===== اسلایدشو ===== */
var _slide = 0, _timer = null, _slides = [], _dots = [];

function initSlideshow() {
    _slides = Array.from(document.querySelectorAll('.hero-slide'));
    _dots   = Array.from(document.querySelectorAll('.slide-dot'));
    if (_slides.length === 0) return;
    gotoSlide(0);
    _timer = setInterval(function () { gotoSlide(_slide + 1); }, 4500);
}

function gotoSlide(n) {
    if (_slides.length === 0) return;
    _slide = ((n % _slides.length) + _slides.length) % _slides.length;
    _slides.forEach(function (s, i) { s.classList.toggle('slide-active', i === _slide); });
    _dots.forEach(function (d, i) { d.classList.toggle('dot-active', i === _slide); });
}

function nextSlide() { gotoSlide(_slide + 1); clearInterval(_timer); _timer = setInterval(function(){gotoSlide(_slide+1);}, 4500); }
function prevSlide() { gotoSlide(_slide - 1); clearInterval(_timer); _timer = setInterval(function(){gotoSlide(_slide+1);}, 4500); }
function dotSlide(n) { gotoSlide(n); clearInterval(_timer); _timer = setInterval(function(){gotoSlide(_slide+1);}, 4500); }

/* ===== لایک ===== */
function toggleLike(btn) {
    var n   = parseInt(btn.dataset.count) || 0;
    var on  = btn.dataset.liked === 'true';
    btn.dataset.liked = !on;
    btn.dataset.count = on ? n - 1 : n + 1;
    btn.querySelector('.like-count').innerText = on ? n - 1 : n + 1;
    var useEl = btn.querySelector('use');
    if (useEl) useEl.setAttribute('href', on ? '#ic-heart' : '#ic-heart-fill');
    btn.classList.toggle('liked', !on);
    if (!on) { btn.style.transform = 'scale(1.28)'; setTimeout(function(){btn.style.transform='';}, 180); }
}

/* ===== خبرنامه ===== */
function subscribeNewsletter(ev) {
    ev.preventDefault();
    var el = document.getElementById('newsletterEmail');
    if (!el) return false;
    var email = el.value.trim();
    if (!email) { showToast('لطفاً ایمیل خود را وارد کنید.', 'error'); return false; }
    if (!email.includes('@') || !email.includes('.')) { showToast('آدرس ایمیل معتبر وارد کنید.', 'error'); return false; }
    el.value = '';
    showToast('عضویت شما با موفقیت ثبت شد. ممنون!', 'success');
    return false;
}

function showToast(msg, type) {
    var t = document.createElement('div');
    t.style.cssText = 'position:fixed;bottom:90px;left:50%;transform:translateX(-50%);padding:12px 28px;border-radius:28px;font-size:14px;font-family:inherit;font-weight:600;z-index:9999;box-shadow:0 6px 24px rgba(0,0,0,.2);color:white;transition:opacity .4s;background:' + (type === 'success' ? '#2E7D4F' : '#6B1E3C') + ';';
    t.innerText = msg;
    document.body.appendChild(t);
    setTimeout(function () { t.style.opacity = '0'; setTimeout(function () { t.remove(); }, 400); }, 3000);
}

/* ===== شمارنده ===== */
function animateCounter(id, target, dur) {
    var el = document.getElementById(id);
    if (!el) return;
    var step = Math.ceil(target / (dur / 40));
    var cur  = 0;
    var t    = setInterval(function () {
        cur += step;
        if (cur >= target) { cur = target; clearInterval(t); }
        el.innerText = cur.toLocaleString();
    }, 40);
}

/* ===== تیپ روز ===== */
var TIPS = [
    'کرم ضدآفتاب را هر روز بزنید، حتی در روزهای ابری و داخل خانه.',
    'قبل از خواب آرایش را با پاک‌کننده مناسب کاملاً پاک کنید.',
    'روزانه ۸ لیوان آب بنوشید — هیدراتاسیون پوست از درون شروع می‌شود.',
    'ماساژ روزانه پوست سر، گردش خون و رشد مو را تحریک می‌کند.',
    'بالشت ابریشمی انتخاب کنید — اصطکاک کمتر، چروک کمتر.',
    'عسل یک مرطوب‌کننده طبیعی و ضدباکتری بی‌نظیر است.',
    'مو را تا زمانی که کمی خشک نشده، شانه نزنید.'
];

function showDailyTip() {
    var el = document.getElementById('dailyTip');
    if (el) el.innerText = TIPS[new Date().getDay() % TIPS.length];
}

/* ===== اجرا در لود ===== */
window.addEventListener('load', function () {
    initSlideshow();
    showDailyTip();
    animateCounter('counter1', 36, 1200);
    animateCounter('counter2', 4, 600);
    animateCounter('counter3', 12500, 1500);
});
