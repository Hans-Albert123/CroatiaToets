/* ==========================================================================
   CROATIA HONEYMOON REVEAL - CONFIGURATION & LOGIC
   ========================================================================== */

const honeymoon = {
  // Wagkode om die webwerf te ontsluit
  passcode: "19092026",

  // Persoonlike besonderhede
  fianceeName: "Mieke",
  yourName: "Hans-Albert",

  // Vertrek-/landingstyd vir die aftelling
  departureDate: "2026-09-24T13:45:00",

  // Hero-besonderhede
  heroSubtitle: "Split, Dubrovnik, Stari Grad (Hvar) en Trogir.",
  heroImages: [
    "images/hero-bg-01.avif",
    "images/hero-bg-02.avif",
    "images/hero-bg-03.jpg"
  ],

  sectionBackgroundSets: {
    journey: [
      "images/hero-bg-04.jpg",
      "images/hero-bg-05.jpg",
      "images/hero-bg-06.jpg"
    ],
    accommodations: [
      "images/hero-bg-07.jpg",
      "images/hero-bg-08.jpg",
      "images/hero-bg-09.jpg"
    ],
    "location-details": [
      "images/hero-bg-10.jpg",
      "images/hero-bg-11.jpg",
      "images/hero-destination.avif"
    ],
    essentials: [
      "images/hero-bg-04.jpg",
      "images/hero-bg-07.jpg",
      "images/hero-bg-10.jpg"
    ]
  },

  // Liefdebrief-inhoud
  loveLetter: [
    "Ek het hierdie klein passion project aanmekaar geslaan in my tussen tyd. Dit is iets om vir uit te sien.",
    "Maak gereed want ons pak amper ons tasse Kroasië toe!",
    "Hieronder is informasie oor ons roete deur Split, Dubrovnik, Stari Grad en Trogir."
  ],

  // Gedetailleerde dag-vir-dag roete
  destinations: [
    {
      day: "Been 1: Dae 1 tot 6",
      date: "(24 Sept – 30 Sept)",
      location: "Split Old Town",
      hotel: '<a href="https://www.airbnb.com/rooms/35148933?unique_share_id=fe061ca1-c0ad-4fd6-acd0-4cbc85b56244&viralityEntryPoint=1&s=76" target="_blank" rel="noopener">Split AirBnB</a>',
      activities: [
        "24 Sept: Land op Split-lughawe en incheck by die AirBnB.",
        "26 Sept: Geboekte zipline dag.",
        "30 Sept: Vertrek op bus Dubrovnik toe."
      ],
      notes: ""
    },
    {
      day: "Been 2: Dae 7 & 8",
      date: "(30 Sept – 2 Okt)",
      location: "Dubrovnik",
      hotel: '<a href="https://www.airbnb.com/rooms/2993057?unique_share_id=b513da2c-a0df-4830-9b8b-a06688648877&viralityEntryPoint=1&s=76" target="_blank" rel="noopener">Dubrovnik AirBnB</a>',
      activities: [
        "30 Sept: Busrit van Split na Dubrovnik",
        "1 Okt: Volle dag in Dubrovnik — ons het altwee die Dubrovnik day pass wat ons toegang to baie bekende landmerke en museums gee.",
        "2 Okt: Ferry na Stari Grad"
      ],
      notes: ""
    },
    {
      day: "Been 3: Dae 9 & 10",
      date: "(2 Okt – 4 Okt)",
      location: "Stari Grad, Hvar-eiland",
      hotel: '<a href="https://www.airbnb.com/rooms/1431895588031523990?unique_share_id=806b8d7e-f5a6-49ab-a417-a6116b52a573&viralityEntryPoint=1&s=76" target="_blank" rel="noopener">Stari Grad AirBnB</a>',
      activities: [
        "2 Okt: Ferry arriveer by Hvar-eiland gevolg met kort busrit na Stari Grad (kaartjies is cash!)",
        "3 Okt: Stari Grad oggend, gevolg met wine tasting by <a href=\"https://maps.app.goo.gl/ST3yGCGUwLkZE3Vu5\" target=\"_blank\" rel=\"noopener\">Tomic wynmaker</a> die middag",
        "4 Okt: Ferry Split toe"
      ],
      notes: ""
    },
    {
      day: "Been 4: Dae 11 tot 13",
      date: "(4 Okt – 7 Okt)",
      location: "Trogir",
      hotel: '<a href="https://www.airbnb.com/rooms/48226338?unique_share_id=b550b1a6-cee3-4e8b-811e-8059ba4bf409&viralityEntryPoint=1&s=76" target="_blank" rel="noopener">Trogir AirBnB</a>',
      activities: [
        "4 Okt: Ferry arriveer op Split-hawe gevolg met busrit na Trogir toe",
        "7 Okt: Taxi/Bus na Split-lughawe vir die terugvlieg SA toe."
      ],
      notes: ""
    }
  ],

  // AirBnB verblyfkaarte
  hotels: [
    {
      name: "Split Old Town",
      location: "Split, Kroasië",
      image: "images/SplitAirBnB.webp",
      uniqueImage: "images/split-unique.jpg",
      description: "",
      mapsUrl: "https://maps.app.goo.gl/yB1jWXFsAatJBami6",
      websiteUrl: "https://www.airbnb.com/rooms/35148933?unique_share_id=fe061ca1-c0ad-4fd6-acd0-4cbc85b56244&viralityEntryPoint=1&s=76"
    },
    {
      name: "Dubrovnik",
      location: "Dubrovnik, Kroasië",
      image: "images/DubrovnikAirBnB",
      uniqueImage: "images/dubrovnik-unique.jpg",
      description: "",
      mapsUrl: "https://maps.app.goo.gl/EeNbEfyRkuU3enah8",
      websiteUrl: "https://www.airbnb.com/rooms/2993057?unique_share_id=b513da2c-a0df-4830-9b8b-a06688648877&viralityEntryPoint=1&s=76"
    },
    {
      name: "Stari Grad, Hvar-eiland",
      location: "Hvar-eiland, Kroasië",
      image: "images/StariGradAirBnB.avif",
      uniqueImage: "images/stari-grad-unique.jpg",
      description: "",
      mapsUrl: "https://maps.app.goo.gl/KqCH3FuA7ypQak717",
      websiteUrl: "https://www.airbnb.com/rooms/1431895588031523990?unique_share_id=806b8d7e-f5a6-49ab-a417-a6116b52a573&viralityEntryPoint=1&s=76"
    },
    {
      name: "Trogir",
      location: "Trogir, Kroasië",
      image: "images/TrogirAirBnB.avif",
      uniqueImage: "images/trogir-unique.jpg",
      description: "",
      mapsUrl: "https://maps.app.goo.gl/DdkbDyagAPtEWbpk8",
      websiteUrl: "https://www.airbnb.com/rooms/48226338?unique_share_id=b550b1a6-cee3-4e8b-811e-8059ba4bf409&viralityEntryPoint=1&s=76"
    }
  ],

  // Toeristegalery
  gallery: [
    { url: "images/gallery-1.jpg", caption: "Diocletian se Paleis se klipboë in Split" },
    { url: "images/gallery-2.jpg", caption: "Die historiese stadsmure van Dubrovnik" },
    { url: "images/gallery-3.jpg", caption: "Katamaran oor die turkoois Adriatiese See" },
    { url: "images/gallery-4.jpg", caption: "Rustige hawe-aande in Stari Grad, Hvar" },
    { url: "images/gallery-5.jpg", caption: "Palmbome langs die water in Trogir" }
  ],

  // Kaartweergave vir die Kroatiese kusroete met al vier stoppe in volgorde
  routeStops: [
    { name: "Split", coords: [43.508858, 16.440150] },
    { name: "Dubrovnik", coords: [42.641794, 18.109508] },
    { name: "Stari Grad", coords: [43.183748, 16.598632] },
    { name: "Trogir", coords: [43.516865, 16.250049] }
  ],

  // Verwagte weer
  weather: [
    { location: "Split", temp: "24°C", condition: "Ligte herfs-son" },
    { location: "Dubrovnik", temp: "23°C", condition: "Aangename kusbries" },
    { location: "Stari Grad", temp: "22°C", condition: "Heldere Adriatiese lug" },
    { location: "Trogir", temp: "22°C", condition: "Sonig en sagte golwe" }
  ],

  // Inpaklys
  yourPackingChecklist: [
    "Skoene (plakkies, tekkies, sneakers)",
    "Ligte baadjie",
    "Klere",
    "Europa krag adapter proppe",
    "Swemklere en handoek",
    "Sonbril en hoed",
    "Water bottel"
  ],
  herPackingChecklist: [
    "Skoene",
    "Baadjie",
    "Klere",
    "Sonbril",
    "Ipad",
    "Handoeksyl",
    "Water bottel"
  ],
  sharedPackingChecklist: [
    "Paspoorte & reisdokumente",
    "AirBnB-bevestigingsdokumente",
    "Akkommodasie-uitskrifte",
    "Reis- en mediese versekeringsbesonderhede",
    "Bankkaart / kontant vir die reis"
  ],

  // Reistip
  travelTips: {
    currency: "Euro (€)",
    language: "Kroaties (Engels word oral gepraat)",
    powerPlugs: "Tipe C / F (230V)",
    emergency: "112 (Universele EU-noodhulp)",
    timeZone: "CEST (UTC +2)"
  },

  // Playlist-skakel
  playlistLinkUrl: "https://music.apple.com/za/playlist/pl.u-pMylleaiW29p2dy?a=join&it=8zaXXvVi3MgEMewc4aejN",

  // Travel tickets link
  surprise: {
    title: "travel tickets",
    description: "https://drive.google.com/drive/folders/1djaI372uOiN10wqwPg-Own3nzUJI7zRj?usp=sharing"
  }
};

/* ==========================================================================
   INITIALIZATION & PASSCODE LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initPasscode();
  initTheme();
  populateContent();
  initRouteMap();
  startCountdown();
  initHeroBackgroundSlideshow();
  initSectionBackgroundSlideshows();
  initAmbientParticles();
  initScrollAnimations();
  initModalListeners();
  initNavbarScroll();
});

/* --- Passcode Protection --- */
function initPasscode() {
  const overlay = document.getElementById('passcode-overlay');
  const input = document.getElementById('passcode-input');
  const submitBtn = document.getElementById('passcode-submit-btn');
  const errorMsg = document.getElementById('passcode-error');

  function checkCode() {
    if (input.value === honeymoon.passcode) {
      overlay.classList.add('unlocked');
      errorMsg.style.display = 'none';
    } else {
      errorMsg.style.display = 'block';
      input.value = '';
      input.focus();
    }
  }

  submitBtn.addEventListener('click', checkCode);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkCode();
  });
}

/* --- Theme Toggle --- */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('honeymoon-theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('honeymoon-theme', newTheme);
  });
}

/* --- Populate Dynamic Content --- */
function populateContent() {
  const letterName = document.getElementById('letter-fiancee-name');
  if (letterName) {
    letterName.innerText = honeymoon.fianceeName;
  }
  document.getElementById('hero-subtitle').innerText = honeymoon.heroSubtitle;
  
  if (honeymoon.heroImages && honeymoon.heroImages.length) {
    const heroBg = document.getElementById('hero-bg');
    heroBg.style.backgroundImage = `url('${honeymoon.heroImages[0]}')`;
  }

  const letterBody = document.getElementById('love-letter-body');
  letterBody.innerHTML = honeymoon.loveLetter.map(p => `<p>${p}</p>`).join('');
  document.getElementById('letter-signature').innerText = `liefde, ${honeymoon.yourName}`;

  // Itinerary
  const timelineContainer = document.getElementById('timeline-container');
  timelineContainer.innerHTML = honeymoon.destinations.map(item => `
    <div class="timeline-item fade-in-element">
      <div class="timeline-dot"></div>
      <div class="glass-card timeline-card">
        <span class="timeline-date">${item.day} ${item.date}</span>
        <h3 class="timeline-location">${item.location}</h3>
        <p class="timeline-hotel">📍 ${item.hotel}</p>
        <ul class="timeline-activities">
          ${item.activities.map(act => `<li>${act}</li>`).join('')}
        </ul>
        <div class="timeline-notes">${item.notes}</div>
      </div>
    </div>
  `).join('');

  // Stays
  const hotelContainer = document.getElementById('accommodations-container');
  hotelContainer.innerHTML = honeymoon.hotels.map(hotel => `
    <div class="glass-card hotel-card fade-in-element">
      <div class="hotel-image-wrapper">
        <img src="${hotel.image}" alt="${hotel.name}" class="hotel-image" loading="lazy">
      </div>
      <div class="hotel-content">
        <h3 class="hotel-name">${hotel.name}</h3>
        <p class="hotel-description">${hotel.description}</p>
        <div class="hotel-links">
          <a href="${hotel.mapsUrl}" target="_blank" rel="noopener" class="hotel-link">Google Maps ↗</a>
          <a href="${hotel.websiteUrl}" target="_blank" rel="noopener" class="hotel-link">AirBnB-skakel ↗</a>
        </div>
      </div>
      <div class="hotel-unique-photo">
        <img src="${hotel.uniqueImage}" alt="${hotel.name} unieke foto" loading="lazy">
      </div>
    </div>
  `).join('');

  // Map
  const mapContainer = document.getElementById('map-container');
  mapContainer.innerHTML = `
    <div id="route-map" class="route-map-panel" aria-label="Croatia route overview">
      <div class="route-map-surface">
        <div class="route-map-coastline"></div>

        <div class="route-pin route-pin-split">
          <span class="route-pin-dot"></span>
          <span class="route-pin-label">Split</span>
        </div>

        <div class="route-pin route-pin-dubrovnik">
          <span class="route-pin-dot"></span>
          <span class="route-pin-label">Dubrovnik</span>
        </div>

        <div class="route-pin route-pin-stari-grad">
          <span class="route-pin-dot"></span>
          <span class="route-pin-label">Stari Grad</span>
        </div>

        <div class="route-pin route-pin-trogir">
          <span class="route-pin-dot"></span>
          <span class="route-pin-label">Trogir</span>
        </div>
      </div>

      <div class="route-map-legend" aria-label="Route stops">
        <span>Split</span>
        <span>Dubrovnik</span>
        <span>Stari Grad</span>
        <span>Trogir</span>
      </div>

      <a class="route-map-button" href="https://www.google.com/maps/dir/?api=1&origin=43.508858,16.440150&destination=43.516865,16.250049&waypoints=42.641794,18.109508%7C43.183748,16.598632&travelmode=driving" target="_blank" rel="noopener">Open in Google Maps</a>
    </div>
  `;

  // Weather
  document.getElementById('weather-container').innerHTML = honeymoon.weather.map(w => `
    <div class="weather-item">
      <div>
        <div class="weather-location">${w.location}</div>
        <div class="weather-cond">${w.condition}</div>
      </div>
      <div class="weather-temp">${w.temp}</div>
    </div>
  `).join('');

  // Checklist
  const meChecklistKey = 'honeymoon-checklist-me';
  const herChecklistKey = 'honeymoon-checklist-her';
  const sharedChecklistKey = 'honeymoon-checklist-shared';
  const savedMyItems = JSON.parse(localStorage.getItem(meChecklistKey) || '[]');
  const savedHerItems = JSON.parse(localStorage.getItem(herChecklistKey) || '[]');
  const savedSharedItems = JSON.parse(localStorage.getItem(sharedChecklistKey) || '[]');

  document.getElementById('checklist-container').innerHTML = `
    <div class="shared-checklist-wrapper">
      <div class="checklist-column shared-column">
        <h4 class="checklist-column-title">Gedeelde pakkies</h4>
        ${honeymoon.sharedPackingChecklist.map((item) => `
          <div class="check-item ${savedSharedItems.includes(item) ? 'completed' : ''}" data-user="shared" data-item="${item}" onclick="toggleCheck(this)">
            <div class="check-box"></div>
            <span>${item}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="checklist-columns">
      <div class="checklist-column personal-column">
        <h4 class="checklist-column-title">Hans se lys</h4>
        ${honeymoon.yourPackingChecklist.map((item) => `
          <div class="check-item ${savedMyItems.includes(item) ? 'completed' : ''}" data-user="you" data-item="${item}" onclick="toggleCheck(this)">
            <div class="check-box"></div>
            <span>${item}</span>
          </div>
        `).join('')}
      </div>
      <div class="checklist-column personal-column">
        <h4 class="checklist-column-title">Mieke se lys</h4>
        ${honeymoon.herPackingChecklist.map((item) => `
          <div class="check-item ${savedHerItems.includes(item) ? 'completed' : ''}" data-user="her" data-item="${item}" onclick="toggleCheck(this)">
            <div class="check-box"></div>
            <span>${item}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Tips
  document.getElementById('tips-container').innerHTML = `
    <div class="tip-item"><span class="tip-label">Currency</span><span class="tip-value">${honeymoon.travelTips.currency}</span></div>
    <div class="tip-item"><span class="tip-label">Language</span><span class="tip-value">${honeymoon.travelTips.language}</span></div>
    <div class="tip-item"><span class="tip-label">Power Outlets</span><span class="tip-value">${honeymoon.travelTips.powerPlugs}</span></div>
    <div class="tip-item"><span class="tip-label">Emergency</span><span class="tip-value">${honeymoon.travelTips.emergency}</span></div>
    <div class="tip-item"><span class="tip-label">Time Zone</span><span class="tip-value">${honeymoon.travelTips.timeZone}</span></div>
  `;

  // Playlist
  document.getElementById('playlist-container').innerHTML = `
    <div class="playlist-link-card">
      <a href="${honeymoon.playlistLinkUrl}" target="_blank" rel="noopener" class="btn btn-gold btn-large">Open playlist</a>
    </div>
  `;
}

/* --- Countdown Timer --- */
function startCountdown() {
  const targetDate = new Date(honeymoon.departureDate).getTime();

  function update() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      document.getElementById('cd-days').innerText = "00";
      document.getElementById('cd-hours').innerText = "00";
      document.getElementById('cd-minutes').innerText = "00";
      document.getElementById('cd-seconds').innerText = "00";
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('cd-days').innerText = String(days).padStart(2, '0');
    document.getElementById('cd-hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('cd-minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('cd-seconds').innerText = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

function toggleCheck(element) {
  const user = element.dataset.user;
  const item = element.dataset.item;

  let key = 'honeymoon-checklist-me';
  if (user === 'her') key = 'honeymoon-checklist-her';
  if (user === 'shared') key = 'honeymoon-checklist-shared';

  const savedItems = JSON.parse(localStorage.getItem(key) || '[]');
  const itemIndex = savedItems.indexOf(item);

  if (itemIndex >= 0) {
    savedItems.splice(itemIndex, 1);
  } else {
    savedItems.push(item);
  }

  localStorage.setItem(key, JSON.stringify(savedItems));
  element.classList.toggle('completed', savedItems.includes(item));
}

function openLightbox(url, caption) {
  const modal = document.getElementById('lightbox-modal');
  document.getElementById('lightbox-img').src = url;
  document.getElementById('lightbox-caption').innerText = caption;
  modal.classList.add('active');
}

function initRouteMap() {
  const routeMap = document.getElementById('route-map');
  if (!routeMap) return;

  const openButton = routeMap.querySelector('a');
  if (openButton) {
    openButton.addEventListener('click', () => {
      window.open(
        'https://www.google.com/maps/dir/?api=1&origin=43.508858,16.440150&destination=43.516865,16.250049&waypoints=42.641794,18.109508%7C43.183748,16.598632&travelmode=driving',
        '_blank',
        'noopener,noreferrer'
      );
    });
  }
}

function initModalListeners() {
  const lightboxClose = document.getElementById('lightbox-close');
  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      document.getElementById('lightbox-modal').classList.remove('active');
    });
  }

  const surpriseModal = document.getElementById('surprise-modal');
  const revealBtn = document.getElementById('reveal-surprise-btn');
  const surpriseClose = document.getElementById('surprise-close');

  if (revealBtn && surpriseModal) {
    revealBtn.addEventListener('click', () => {
      document.getElementById('surprise-title').innerText = honeymoon.surprise.title;
      document.getElementById('surprise-body').innerText = honeymoon.surprise.description;
      surpriseModal.classList.add('active');
    });
  }

  if (surpriseClose && surpriseModal) {
    surpriseClose.addEventListener('click', () => {
      surpriseModal.classList.remove('active');
    });
  }

  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      e.target.classList.remove('active');
    }
  });
}

function initHeroBackgroundSlideshow() {
  const heroBg = document.getElementById('hero-bg');
  if (!heroBg || !honeymoon.heroImages || !honeymoon.heroImages.length) return;

  let heroIndex = 0;

  function showNextHeroImage() {
    heroIndex = (heroIndex + 1) % honeymoon.heroImages.length;
    heroBg.style.backgroundImage = `url('${honeymoon.heroImages[heroIndex]}')`;
  }

  setInterval(showNextHeroImage, 6500);
}

function initSectionBackgroundSlideshows() {
  if (!honeymoon.sectionBackgroundSets) return;

  Object.entries(honeymoon.sectionBackgroundSets).forEach(([sectionId, imageSet]) => {
    const section = document.getElementById(sectionId);
    if (!section || !imageSet.length) return;

    let index = 0;
    section.style.backgroundImage = `linear-gradient(rgba(7, 10, 16, 0.24), rgba(7, 10, 16, 0.4)), url('${imageSet[0]}')`;
    section.style.backgroundSize = 'cover';
    section.style.backgroundPosition = 'center';
    section.style.backgroundRepeat = 'no-repeat';

    setInterval(() => {
      index = (index + 1) % imageSet.length;
      section.style.backgroundImage = `linear-gradient(rgba(7, 10, 16, 0.24), rgba(7, 10, 16, 0.4)), url('${imageSet[index]}')`;
    }, 8000);
  });
}

function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in-element').forEach(el => observer.observe(el));
}

function initAmbientParticles() {
  const canvas = document.getElementById('ambient-particles');
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedY = -(Math.random() * 0.3 + 0.1);
      this.opacity = Math.random() * 0.5 + 0.1;
    }
    update() {
      this.y += this.speedY;
      if (this.y < 0) this.reset();
    }
    draw() {
      ctx.fillStyle = `rgba(197, 160, 89, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  for (let i = 0; i < 40; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();
}