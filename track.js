/* Black Mask – μέτρηση επαφών (κλήση, WhatsApp) για Google Ads.
   Μετατροπές: "Site - Click Call", "Site - Click WhatsApp" (λογ. 840-577-9745). */
(function () {
  var ADS_ID = 'AW-11255012235';
  var LABELS = {
    call: 'OvupCNrwrcEdEIu35_Yp',      // Site - Click Call
    whatsapp: '3zNJCN3wrcEdEIu35_Yp',  // Site - Click WhatsApp
    instagram: ''                      // (δεν μετριέται)
  };
  var CONSENT_KEY = 'bm_consent';

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  function readConsent() {
    try { return localStorage.getItem(CONSENT_KEY); } catch (e) { return null; }
  }
  function saveConsent(v) {
    try { localStorage.setItem(CONSENT_KEY, v); } catch (e) {}
  }
  function grantedState(v) {
    var s = v === 'granted' ? 'granted' : 'denied';
    return { ad_storage: s, ad_user_data: s, ad_personalization: s, analytics_storage: s };
  }

  // Consent Mode v2: προεπιλογή "όχι" μέχρι να απαντήσει ο επισκέπτης.
  var stored = readConsent();
  var defaults = grantedState(stored);
  defaults.wait_for_update = 500;
  gtag('consent', 'default', defaults);

  if (ADS_ID) {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + ADS_ID;
    document.head.appendChild(s);
    gtag('js', new Date());
    gtag('config', ADS_ID);
  }

  function track(kind) {
    if (!ADS_ID || !LABELS[kind]) return;
    gtag('event', 'conversion', { send_to: ADS_ID + '/' + LABELS[kind] });
  }

  function kindOf(href) {
    if (!href) return null;
    if (href.indexOf('tel:') === 0) return 'call';
    if (href.indexOf('wa.me/') !== -1 || href.indexOf('api.whatsapp.com') !== -1) return 'whatsapp';
    if (href.indexOf('instagram.com/black_mask_tattoo_studio') !== -1) return 'instagram';
    return null;
  }

  // Ένας listener για όλα τα links, και για όσα ξαναγράφει η αλλαγή γλώσσας.
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    var k = kindOf(a.getAttribute('href'));
    if (k) track(k);
  }, true);

  // Μπάνερ cookies
  function setupBanner() {
    var banner = document.getElementById('consent-banner');
    if (!banner) return;
    if (!stored) banner.hidden = false;
    function answer(v) {
      saveConsent(v);
      gtag('consent', 'update', grantedState(v));
      banner.hidden = true;
    }
    var yes = document.getElementById('consent-accept');
    var no = document.getElementById('consent-decline');
    if (yes) yes.addEventListener('click', function () { answer('granted'); });
    if (no) no.addEventListener('click', function () { answer('denied'); });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupBanner);
  } else {
    setupBanner();
  }
})();
