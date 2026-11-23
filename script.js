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
    about_title: 'Behind the Mask',
    about_text: 'Πίσω από τη μάσκα βρίσκονται καλλιτέχνες με εξειδίκευση στην τέχνη του τατουάζ, που αγαπούν αυτό που κάνουν. Το <strong>Black Mask Tattoo Studio</strong> στην Περαία Θεσσαλονίκης, με 5★ από 150+ κριτικές στη Google, ξεχωρίζει για τον επαγγελματισμό, την άψογη καθαριότητα και την προσοχή στη λεπτομέρεια. Σε βοηθάμε να βρεις το σχέδιο που σου ταιριάζει και το δουλεύουμε μαζί σου από το πρώτο σκίτσο μέχρι το τελικό αποτέλεσμα, σε ένα φιλικό και άνετο περιβάλλον. Αν είσαι λάτρης του τατουάζ, σε προσκαλούμε να ζήσεις την απόλυτη εμπειρία.',
    gallery_title: 'Οι Καλλιτέχνες μας',
    phone_label: 'Τηλέφωνο',
    address_label: 'Διεύθυνση',
    address_text: 'Αμπελοκήπων 21, 1ος Όροφος, Περαία 570 19',
    hours_label: 'Ώρες',
    hour_time: '09:00–21:00',
    mon: 'Δευτέρα', tue: 'Τρίτη', wed: 'Τετάρτη',
    thu: 'Πέμπτη', fri: 'Παρασκευή', sat: 'Σάββατο', sun: 'Κυριακή',
  },
  en: {
    about_title: 'Behind the Mask',
    about_text: 'Behind the mask are artists specialised in the art of tattooing who love what they do. <strong>Black Mask Tattoo Studio</strong> in Peraia, Thessaloniki, rated 5★ from 150+ Google reviews, stands out for its professionalism, impeccable cleanliness and attention to detail. We help you find the design that suits you and work on it with you from the first sketch to the final result, in a friendly and relaxed setting. If you love tattoos, we invite you to live the ultimate tattoo experience.',
    gallery_title: 'Our Artists',
    phone_label: 'Phone',
    address_label: 'Address',
    address_text: '21 Ampelokypon St., 1st Floor, Peraia 570 19',
    hours_label: 'Hours',
    hour_time: '09:00–21:00',
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
  artist_kostis_bio: 'A distinction graduate of the School of Fine Arts at Aristotle University of Thessaloniki with a master’s degree in Printmaking, he specialises in the art of tattooing with 6+ years of experience.',
  artist_giannis_bio: 'A graduate of the certified “Dermatostixia – Body Tattooing” training programme at KDVM2 DELTA Thessaloniki, he specialises in the art of tattooing with 8+ years of experience.',
  styles_title: 'Choose Your Style',
  styles_intro: 'Choose the style that suits you and we will bring your idea to its best version, with a custom design.',
  style_fineline: 'Thin, clean lines for subtle, elegant designs.',
  style_lettering: 'Names, dates and quotes in lettering designed for you.',
  style_minimal: 'Simple, small designs with a clean result.',
  style_blackwork: 'Bold black ink, graphic and geometric patterns.',
  style_neotrad: 'Bold outlines, depth and black & grey shading.',
  style_japanese: 'Dragons, waves, koi and classic Japanese motifs.',
  style_oldschool: 'Classic traditional designs with clean, bold lines in black.',
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
