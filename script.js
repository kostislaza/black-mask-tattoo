let currentLang = 'el';

function toggleLang() {
  currentLang = currentLang === 'el' ? 'en' : 'el';
  applyLang(currentLang);
  const flag = document.getElementById('lang-flag');
  if (currentLang === 'en') {
    flag.src = 'https://flagcdn.com/w40/gr.png';
    flag.alt = 'Ελληνικά';
  } else {
    flag.src = 'https://flagcdn.com/w40/gb.png';
    flag.alt = 'English';
  }
}

const translations = {
  el: {
    about_title: 'Ποιοι Είμαστε',
    about_text: 'Το <strong>Black Mask Tattoo Studio</strong> στην Περαία Θεσσαλονίκης αποτελεί έναν σύγχρονο, καλαίσθητο και πεντακάθαρο χώρο αφιερωμένο στην τέχνη του τατουάζ. Στελεχώνεται από έμπειρους καλλιτέχνες, όπως οι <a href="https://www.instagram.com/kostis.laza?vrfl=MTRwb21pZDR0cTdwbQ%3D%3D&utm_source=qr" target="_blank" class="artist-link">Κωστής Λαζαρίδης</a> και <a href="https://www.instagram.com/john_jave?cplk=ZGc0NTI5bXBxbXJu" target="_blank" class="artist-link">Γιάννης Γκαζάκης</a>, που προσφέρουν εξατομικευμένη προσέγγιση σε κάθε σχέδιο — από το πρώτο σκίτσο μέχρι το τελικό αποτέλεσμα.',
    gallery_title: 'Οι Καλλιτέχνες μας',
    phone_label: 'Τηλέφωνο',
    address_label: 'Διεύθυνση',
    address_text: 'Αμπελοκήπων 21, 1ος Όροφος, Περαία 570 19',
    hours_label: 'Ώρες',
    hour_time: '9:00 π.μ.–9:00 μ.μ.',
    mon: 'Δευτέρα', tue: 'Τρίτη', wed: 'Τετάρτη',
    thu: 'Πέμπτη', fri: 'Παρασκευή', sat: 'Σάββατο', sun: 'Κυριακή',
  },
  en: {
    about_title: 'About Us',
    about_text: '<strong>Black Mask Tattoo Studio</strong> in Peraia, Thessaloniki, is a modern, stylish and spotlessly clean space dedicated to the art of tattooing. Staffed by experienced artists such as <a href="https://www.instagram.com/kostis.laza?vrfl=MTRwb21pZDR0cTdwbQ%3D%3D&utm_source=qr" target="_blank" class="artist-link">Kostis Lazaridis</a> and <a href="https://www.instagram.com/john_jave?cplk=ZGc0NTI5bXBxbXJu" target="_blank" class="artist-link">Giannis Gkazakis</a>, we offer a personalized approach to every design — from the first sketch to the final result.',
    gallery_title: 'Our Artists',
    phone_label: 'Phone',
    address_label: 'Address',
    address_text: '21 Ampelokypon St., 1st Floor, Peraia 570 19',
    hours_label: 'Hours',
    hour_time: '9:00 AM–9:00 PM',
    mon: 'Monday', tue: 'Tuesday', wed: 'Wednesday',
    thu: 'Thursday', fri: 'Friday', sat: 'Saturday', sun: 'Sunday',
  }
};

function get(id) { return document.getElementById(id); }

function applyLang(lang) {
  const t = translations[lang];
  get('about-title').textContent = t.about_title;
  get('about-text').innerHTML = t.about_text;
  get('gallery-title').textContent = t.gallery_title;
  get('phone-label').textContent = t.phone_label;
  get('address-label').textContent = t.address_label;
  get('address-text').textContent = t.address_text;
  get('hours-label').textContent = t.hours_label;
  get('day-mon').textContent = t.mon;
  get('day-tue').textContent = t.tue;
  get('day-wed').textContent = t.wed;
  get('day-thu').textContent = t.thu;
  get('day-fri').textContent = t.fri;
  get('day-sat').textContent = t.sat;
  get('day-sun').textContent = t.sun;
  document.querySelectorAll('.hour-time').forEach(el => el.textContent = t.hour_time);
  get('hero-title').textContent = lang === 'en' ? 'Tattoo Studio in Peraia, Thessaloniki' : 'Tattoo Studio στην Περαία Θεσσαλονίκης';
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (!(key in i18nEl)) i18nEl[key] = el.innerHTML;
    el.innerHTML = lang === 'en' ? (i18nEn[key] || i18nEl[key]) : i18nEl[key];
  });
}

// Greek texts are read from the page itself; English versions below.
const i18nEl = {};
const i18nEn = {
  styles_title: 'Tattoo Styles',
  styles_intro: 'Every tattoo is designed from scratch for you. These are the styles we specialise in:',
  style_fineline: 'Thin, clean lines for subtle, elegant designs.',
  style_lettering: 'Names, dates and quotes in lettering designed for you.',
  style_minimal: 'Simple, small designs with a clean result.',
  style_blackwork: 'Bold black ink, graphic and geometric patterns.',
  style_neotrad: 'Bold outlines, depth and colour.',
  style_japanese: 'Dragons, waves, koi and classic Japanese motifs.',
  style_oldschool: 'Classic traditional designs with bold outlines and bright colours.',
  style_realism: 'Realistic designs and portraits with fine detail.',
  faq_title: 'FAQ',
  faq_q1: 'How do I book a tattoo appointment?',
  faq_a1: 'Call or WhatsApp us at <a href="tel:+306981647973">+30 698 164 7973</a> or send a DM on Instagram <a href="https://www.instagram.com/black_mask_tattoo_studio/" target="_blank" rel="noopener">@black_mask_tattoo_studio</a>. Send us your idea, the placement and the approximate size.',
  faq_q2: 'How much does a tattoo cost?',
  faq_a2: 'The price depends on the size, the level of detail and the placement. Send us your idea and we will give you the price before you book.',
  faq_q3: 'Are you open on Sundays?',
  faq_a3: 'Yes. We are open every day, including Sunday, 09:00–21:00, by appointment.',
  faq_q4: 'Where is the studio?',
  faq_a4: '21 Ampelokipon St., 1st floor, Peraia, Thessaloniki 570 19. We welcome clients from Peraia, Nea Epivates, Agia Triada, Kalamaria, Thermi and all of Thessaloniki.',
  faq_q5: 'Can you design my own tattoo?',
  faq_a5: 'Yes. We can create a design from scratch for you or adapt a design you already like, depending on what you want.',
  faq_q6: 'What do I do after my tattoo?',
  faq_a6: 'After every session we give you aftercare instructions for proper healing and we are here for anything you need.'
};
