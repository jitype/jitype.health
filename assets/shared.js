function computeBaseFromUrls(pageHref, scriptHref) {
  function splitSegments(pathname) {
    return pathname.split('/').filter(Boolean);
  }

  var pageUrl = new URL(pageHref);
  var scriptUrl = new URL(scriptHref);
  var pageDir = splitSegments(pageUrl.pathname.replace(/\/[^/]*$/, '/'));
  var rootDir = splitSegments(new URL('../', scriptUrl.href).pathname);
  var sharedPrefixLength = 0;

  while (
    sharedPrefixLength < pageDir.length &&
    sharedPrefixLength < rootDir.length &&
    pageDir[sharedPrefixLength] === rootDir[sharedPrefixLength]
  ) {
    sharedPrefixLength += 1;
  }

  var depth = pageDir.length - sharedPrefixLength;
  return depth > 0 ? '../'.repeat(depth) : '';
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { computeBaseFromUrls };
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
(function () {
  /* ── Nav HTML ── */
  const NAV_HTML = `
<header id="site-header">
  <div class="header-inner">
    <a href="/" class="site-logo">
      <div class="logo-icon">
        <svg viewBox="0 0 24 24"><path d="M12 2 L2 20 L12 15 L22 20 Z"/></svg>
      </div>
      <span class="logo-text">極態 <span>JITYPE</span></span>
    </a>

    <nav class="desktop-nav">

      <!-- 氫氧知識 -->
      <div class="nav-item">
        <button class="nav-parent">氫氧知識
          <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="nav-dropdown">
          <a href="/knowledge/science.html">氫氧科學原理</a>
          <a href="/knowledge/hrv.html">HRV 是什麼</a>
          <a href="/knowledge/faq.html">氫氧機 FAQ</a>
          <div class="nav-divider"></div>
          <a href="/knowledge/articles.html">全部文章</a>
        </div>
      </div>

      <!-- 機型介紹 -->
      <div class="nav-item">
        <button class="nav-parent">機型介紹
          <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="nav-dropdown">
          <a href="/products/portable.html">隨身款 100ml <span class="dd-tag">新品</span></a>
          <a href="/products/entry.html">輕盈款 600ml</a>
          <a href="/products/flagship.html">旗艦款 1200ml <span class="dd-tag">熱銷</span></a>
          <a href="/products/water.html">氫水機</a>
          <div class="nav-divider"></div>
          <a href="/products/subscription.html">月費訂閱方案</a>
        </div>
      </div>

      <!-- 服務說明 -->
      <div class="nav-item">
        <button class="nav-parent">服務說明
          <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="nav-dropdown">
          <a href="/service/hrv-process.html">HRV 評估流程</a>
          <a href="/service/home-visit.html">到府體驗服務</a>
          <a href="/service/monthly.html">月費追蹤服務</a>
        </div>
      </div>

    </nav>

    <a href="/#cta" class="nav-cta">免費諮詢</a>
    <button class="hamburger" id="hamburger" onclick="toggleMobileMenu()" aria-label="選單">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>

<div id="mobile-menu">
  <div class="mobile-group">
    <div class="mobile-group-title">氫氧知識</div>
    <a href="/knowledge/science.html">氫氧科學原理</a>
    <a href="/knowledge/hrv.html">HRV 是什麼</a>
    <a href="/knowledge/faq.html">氫氧機 FAQ</a>
    <a href="/knowledge/articles.html">全部文章</a>
  </div>
  <div class="mobile-group">
    <div class="mobile-group-title">機型介紹</div>
    <a href="/products/portable.html">隨身款 100ml</a>
    <a href="/products/entry.html">輕盈款 600ml</a>
    <a href="/products/flagship.html">旗艦款 1200ml</a>
    <a href="/products/water.html">氫水機</a>
    <a href="/products/subscription.html">月費訂閱方案</a>
  </div>
  <div class="mobile-group">
    <div class="mobile-group-title">服務說明</div>
    <a href="/service/hrv-process.html">HRV 評估流程</a>
    <a href="/service/home-visit.html">到府體驗服務</a>
    <a href="/service/monthly.html">月費追蹤服務</a>
  </div>
  <a href="/#cta" class="nav-cta" onclick="closeMobileMenu()">免費諮詢</a>
</div>`;

  /* ── Footer HTML ── */
  const FOOTER_HTML = `
<section class="shared-cta">
  <div class="container">
    <span class="section-label">立即開始</span>
    <h2 class="section-title reveal">讓數據陪你做更好的<br/>健康選擇</h2>
    <p class="section-sub reveal">加入極態 LINE OA，預約 HRV 到府健康評估。</p>
    <div class="cta-actions reveal">
      <a href="/images/line-oa-qr.png" class="btn-line" target="_blank">
        <svg viewBox="0 0 24 24"><path d="M21.5 10.2c0-4.5-4.5-8.2-10-8.2s-10 3.7-10 8.2c0 4 3.6 7.4 8.4 8.1.3.1.8.2.9.5.1.3 0 .6 0 .9l-.1.9c0 .3-.2 1.1.9.6 1.1-.5 6-3.5 8.2-6 1.5-1.6 2.7-3.7 2.7-6z"/></svg>
        加入 LINE 預約體驗
      </a>
      <a href="tel:+886912345678" class="btn btn-outline" style="color:#fff;border-color:rgba(255,255,255,.3);padding:14px 28px;">📞 直接來電</a>
    </div>
    <div class="line-qr-panel reveal">
      <img src="/images/line-oa-qr.png" alt="極態 JITYPE LINE OA QR Code" loading="lazy" decoding="async">
      <div>
        <strong>掃碼加入 LINE OA</strong>
        <span>用手機掃描 QR Code，直接加入極態 JITYPE 官方 LINE。</span>
      </div>
    </div>
  </div>
</section>

<footer id="site-footer">
  <div class="container">
    <div class="footer-inner">
      <div>
        <span class="footer-brand-text">極態 <span>JITYPE</span></span>
        <p class="footer-desc">以數據量化健康改變<br/>以氫氧陪伴日常保健<br/>極態是你忙碌生活中最安靜的守護</p>
      </div>
      <div class="footer-col">
        <h5>機型介紹</h5>
        <ul>
          <li><a href="/products/portable.html">隨身款 100ml</a></li>
          <li><a href="/products/entry.html">輕盈款 600ml</a></li>
          <li><a href="/products/flagship.html">旗艦款 1200ml</a></li>
          <li><a href="/products/water.html">氫水機</a></li>
          <li><a href="/products/subscription.html">月費訂閱方案</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>氫氧知識</h5>
        <ul>
          <li><a href="/knowledge/science.html">氫氧科學原理</a></li>
          <li><a href="/knowledge/hrv.html">HRV 是什麼</a></li>
          <li><a href="/knowledge/faq.html">氫氧機 FAQ</a></li>
          <li><a href="/knowledge/articles.html">全部文章</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>聯絡管道</h5>
        <ul>
          <li><a href="/images/line-oa-qr.png" target="_blank">LINE OA 客服</a></li>
          <li><a href="https://www.facebook.com/tihy.tw" target="_blank">Facebook 粉專</a></li>
          <li><a href="https://www.instagram.com/tihy.tw" target="_blank">Instagram</a></li>
          <li><a href="/images/line-oa-qr.png" target="_blank">LINE 洽詢</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div>
        <p>© 2026 極態 JITYPE 有限公司</p>
        <p class="footer-disclaimer">⚠️ 本網站所有內容僅供日常保健參考，氫氧機非醫療器材，不作為任何疾病之診斷或治療依據。身體不適請諮詢合格醫師。</p>
      </div>
      <div class="footer-links">
        <a href="#">隱私權政策</a>
        <a href="#">服務條款</a>
      </div>
    </div>
  </div>
</footer>

<a href="/images/line-oa-qr.png" class="float-line-btn" target="_blank">
  <svg viewBox="0 0 24 24"><path d="M21.5 10.2c0-4.5-4.5-8.2-10-8.2s-10 3.7-10 8.2c0 4 3.6 7.4 8.4 8.1.3.1.8.2.9.5.1.3 0 .6 0 .9l-.1.9c0 .3-.2 1.1.9.6 1.1-.5 6-3.5 8.2-6 1.5-1.6 2.7-3.7 2.7-6z"/></svg>
  LINE 免費諮詢
</a>`;

  /* ── Compute relative root prefix ── */
  var currentScript = document.currentScript;
  var BASE = computeBaseFromUrls(
    window.location.href,
    currentScript && currentScript.src ? currentScript.src : new URL('assets/shared.js', window.location.href).href
  );

  /* ── Inject (rewrite absolute paths to relative) ── */
  var nav = NAV_HTML.replace(/href="\//g, 'href="' + BASE);
  var foot = FOOTER_HTML
    .replace(/href="\//g, 'href="' + BASE)
    .replace(/src="\//g, 'src="' + BASE);
  document.body.insertAdjacentHTML('afterbegin', nav);
  document.body.insertAdjacentHTML('beforeend', foot);

  /* ── Mobile menu ── */
  window.toggleMobileMenu = function () {
    const menu = document.getElementById('mobile-menu');
    const btn = document.getElementById('hamburger');
    menu.classList.toggle('open');
    btn.classList.toggle('open');
  };
  window.closeMobileMenu = function () {
    document.getElementById('mobile-menu').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
  };
  // Close on outside click
  document.addEventListener('click', function (e) {
    const menu = document.getElementById('mobile-menu');
    const btn = document.getElementById('hamburger');
    if (menu && menu.classList.contains('open') &&
        !menu.contains(e.target) && !btn.contains(e.target)) {
      menu.classList.remove('open');
      btn.classList.remove('open');
    }
  });

  /* ── Header shadow on scroll ── */
  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.style.boxShadow = window.scrollY > 20
        ? '0 4px 24px rgba(44,31,14,.1)' : 'none';
    });
  }

  /* ── Scroll reveal ── */
  const revealEls = document.querySelectorAll('.reveal, .reveal-l, .reveal-r');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { obs.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ── FAQ accordion ── */
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.faq-q');
    if (!btn) return;
    const item = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-a');
    const isOpen = btn.classList.contains('open');
    // Close all
    document.querySelectorAll('.faq-q.open').forEach(function (q) {
      q.classList.remove('open');
      q.closest('.faq-item').querySelector('.faq-a').classList.remove('open');
    });
    if (!isOpen) { btn.classList.add('open'); answer.classList.add('open'); }
  });

  /* ── Highlight current page in nav ── */
  const path = window.location.pathname;
  document.querySelectorAll('.nav-dropdown a, .mobile-group a').forEach(function (a) {
    if (a.getAttribute('href') === path) {
      a.style.color = 'var(--orange)';
      a.style.background = 'var(--gold-pale)';
    }
  });

})();
}
