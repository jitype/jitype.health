(function () {
  var MEASUREMENT_ID = 'G-3HF7H0BQ7M';

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };

  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(MEASUREMENT_ID);
  document.head.appendChild(script);

  window.gtag('js', new Date());
  window.gtag('config', MEASUREMENT_ID);

  document.addEventListener('click', function (event) {
    var link = event.target.closest && event.target.closest('a[href]');
    if (!link || !window.gtag) return;

    var href = link.getAttribute('href') || '';
    if (href.indexOf('line-oa-qr.png') === -1) return;

    window.gtag('event', 'line_contact_click', {
      event_category: 'engagement',
      event_label: link.textContent.trim() || 'LINE contact',
      link_url: link.href,
      page_location: window.location.href
    });
  });
})();
