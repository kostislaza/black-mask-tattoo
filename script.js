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
}
