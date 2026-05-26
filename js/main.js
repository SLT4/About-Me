const skills = [
  {
    nameAr: "لغة Lua (اللغة الأساسية)",
    nameEn: "Lua (Main Language)",
    iconClass: "fa-solid fa-code",
    percent: 100,
    descAr: "برمجة وتطوير سكربتات FiveM كاملة (خادم وعميل) بكفاءة عالية وبدون أخطاء.",
    descEn: "Developing highly optimized client/server scripts and resources for FiveM."
  },
  {
    nameAr: "قواعد البيانات (SQL)",
    nameEn: "SQL Databases",
    iconClass: "fa-solid fa-database",
    percent: 100,
    descAr: "تصميم وإدارة جداول قواعد البيانات وتحسين الاستعلامات والربط عبر oxmysql.",
    descEn: "Designing databases, managing tables, and integrating queries via oxmysql."
  },
  {
    nameAr: "واجهات المستخدم NUI (HTML & CSS & JS Vanilla)",
    nameEn: "NUI (Vanilla HTML & CSS & JS)",
    iconClass: "fa-brands fa-html5",
    percent: 70,
    descAr: "تصميم وبرمجة واجهات المستخدم داخل اللعبة وربطها بمنطق سكربتات السيرفر.",
    descEn: "Creating lightweight web interfaces and panels integrated into FiveM scripts."
  },
  {
    nameAr: "تصميم MLO & Props في بليندر",
    nameEn: "Blender (MLO & Props Design)",
    iconClass: "fa-solid fa-cube",
    percent: 95,
    descAr: "تصميم وتعديل المجسمات ثلاثية الأبعاد والخرائط الخاصة بلعبة GTA V وسيرفرات FiveM.",
    descEn: "Modeling, texturing, and designing custom maps/props in Blender for GTA V."
  }
];

const characters = [
  {
    nameAr: "لورنس ريستوفا",
    nameEn: "Lawrence Restova",
    roleAr: "شرطي",
    roleEn: "Police Officer",
    server: "West Side RP",
    status: "active",
    imageCount: 5,
    bioAr: "شرطي وحامي لديار لوسانتوس شخصياً بذاته وبنفسه وبعينه",
    bioEn: "Police officer, personally protects the lands of Los Santos",
    goalAr: "الأرتقاء بالتسلسل الوظيفي والحفاظ على المكانه الأجتماعيه",
    goalEn: "Climb the ranks and maintain my social status",
    folder: "lawrence-restova",
    avatar: "images/characters/lawrence-restova/avatar.png",
    images: [
      "images/characters/lawrence-restova/1.png",
      "images/characters/lawrence-restova/2.png",
      "images/characters/lawrence-restova/3.png",
      "images/characters/lawrence-restova/4.png",
      "images/characters/lawrence-restova/5.png",
      "images/characters/lawrence-restova/6.png",
      "images/characters/lawrence-restova/7.png",
      "images/characters/lawrence-restova/8.png",
      "images/characters/lawrence-restova/9.png",
      "images/characters/lawrence-restova/10.png",
      "images/characters/lawrence-restova/11.png",
    ],
  },
  {
    nameAr: "جون سنو (جون المينون)",
    nameEn: "Jon Snow",
    roleAr: "اغوى مجرم في لوسانتوس",
    roleEn: "The most dangerous criminal in Los Santos",
    server: "West Side RP",
    status: "active",
    imageCount: 5,
    bioAr: "مجرم غوي حده حده ومافي احد يقدر عليه",
    bioEn: "The most dangerous criminal in Los Santos",
    goalAr: "السيطره على لوسانتوس والبقاء فالقمه واللي براسه خير يجي",
    goalEn: "Control Los Santos and stay on top",
    folder: "jon-snow",
    avatar: "images/characters/jon-snow/avatar.png",
    images: [
      "images/characters/jon-snow/1.png",
      "images/characters/jon-snow/2.png",
      "images/characters/jon-snow/3.png",
      "images/characters/jon-snow/4.png",
      "images/characters/jon-snow/5.png",
    ],
  },
  {
    nameAr: "أيدين جونز",
    nameEn: "Aiden Jones",
    roleAr: "رئيس قطاع الشيرف",
    roleEn: "Sheriff Chief",
    server: "West Side RP",
    status: "retired",
    imageCount: 5,
    bioAr: "رئيس قطاع الشيرف, حامي ديار ساندي شخصياً",
    bioEn: "Sheriff Chief, personally protects the lands of Sandy.",
    goalAr: "دخاني وقهوتي الصباحيه مع اطلالة ساندي الجميله",
    goalEn: "My morning smoke and coffee with the beautiful view of Sandy",
    folder: "aiden-jones",
    avatar: "images/characters/aiden-jones/avatar.png",
    images: [
      "images/characters/aiden-jones/1.png",
      "images/characters/aiden-jones/2.png",
      "images/characters/aiden-jones/3.png",
    ],
  }
];

const socials = [
  {
    nameAr: "منصة كيك",
    nameEn: "Kick",
    descAr: "لا تنسى تتابعني في كيك اذا ودك تشوف البثوث",
    descEn: "Don't forget to follow me on Kick to watch my streams",
    iconClass: "fa-brands fa-kickstarter",
    url: "https://kick.com/uslt"
  },
  {
    nameAr: "ديسكورد",
    nameEn: "Discord",
    descAr: "حياكم في سيرفر الديسكورد الخاص فيني",
    descEn: "Welcome to my Discord server",
    iconClass: "fa-brands fa-discord",
    url: "https://discord.gg/G4rEHC3P7N"
  },
  {
    nameAr: "تويتر",
    nameEn: "Twitter",
    descAr: "حسابي في تويتر اذا ودك تتابعني و شكراََ",
    descEn: "Follow me on Twitter to stay updated, thank you!",
    iconClass: "fa-brands fa-x-twitter",
    url: "https://twitter.com/uSULTAN0"
  },
  {
    nameAr: "دعم",
    nameEn: "Support",
    descAr: "اذا حبيت تدعمني تقدر من هنا و الله يجزاك خير (تنويه الدعم مو اجباري)",
    descEn: "If you want to support me, you can do so here (optional)",
    iconClass: "fa-solid fa-heart",
    url: "https://botrix.live/k/uslt/tip"
  }
];

(function () {
  document.body.classList.add('loading');
  const loader = document.getElementById('slt-loader');

  function done() {
    loader.classList.add('reveal');
    setTimeout(() => {
      loader.classList.add('done');
      document.body.classList.remove('loading');
    }, 950);
  }

  if (document.readyState === 'complete') {
    done();
  } else {
    window.addEventListener('load', done);
  }
})();

function renderSkills(lang) {
  const container = document.getElementById('skillsContainer');
  if (!container) return;
  container.innerHTML = '';
  skills.forEach(skill => {
    const card = document.createElement('div');
    card.className = 'skill-card reveal';

    const name = lang === 'ar' ? skill.nameAr : skill.nameEn;
    const desc = lang === 'ar' ? skill.descAr : skill.descEn;

    card.innerHTML = `
      <div class="skill-card-top">
        <div class="skill-name-wrap">
          <i class="${skill.iconClass} skill-icon"></i>
          <span class="skill-name">${name}</span>
        </div>
        <span class="skill-percentage">${skill.percent}%</span>
      </div>
      <p class="skill-desc">${desc}</p>
      <div class="skill-bar-track">
        <div class="skill-bar-fill" data-percent="${skill.percent}"></div>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderCharacters(lang) {
  const container = document.getElementById('charactersContainer');
  if (!container) return;
  container.innerHTML = '';
  characters.forEach((char, index) => {
    const card = document.createElement('div');
    card.className = 'character-card reveal';

    const name = lang === 'ar' ? char.nameAr : char.nameEn;
    const role = lang === 'ar' ? char.roleAr : char.roleEn;
    const server = char.server;
    const bio = lang === 'ar' ? char.bioAr : char.bioEn;
    const statusText = lang === 'ar'
      ? (char.status === 'active' ? 'نشط' : 'متقاعد')
      : (char.status === 'active' ? 'Active' : 'Retired');
    const statusClass = char.status === 'active' ? 'status-active' : 'status-retired';

    card.innerHTML = `
  <div class="char-header">
    <img class="char-avatar" src="${char.avatar}" alt="${name}">
    <span class="char-name">${name}</span>
    <span class="char-badge ${statusClass}">${statusText}</span>
  </div>
  <div class="char-meta-row">
    <span class="meta-item"><i class="fa-solid fa-briefcase"></i> ${role}</span>
    <span class="meta-item"><i class="fa-solid fa-server"></i> ${server}</span>
  </div>
  <p class="char-bio">${bio}</p>
`;

    card.addEventListener('click', () => openCharDialog(index, lang));
    container.appendChild(card);
  });
}

function openCharDialog(index, lang) {
  const char = characters[index];
  const name = lang === 'ar' ? char.nameAr : char.nameEn;
  const role = lang === 'ar' ? char.roleAr : char.roleEn;
  const bio  = lang === 'ar' ? char.bioAr  : char.bioEn;
  const goal = lang === 'ar' ? char.goalAr : char.goalEn;
  const statusText = lang === 'ar'
    ? (char.status === 'active' ? 'نشط' : 'متقاعد')
    : (char.status === 'active' ? 'Active' : 'Retired');
  const statusClass = char.status === 'active' ? 'status-active' : 'status-retired';

  let galleryHTML = '';
  char.images.forEach((src, i) => {
    galleryHTML += `
      <div class="gallery-item">
        <img
          data-src="${src}"
          data-index="${i}"
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          class="gallery-img lazy-img"
          alt="${name} ${i + 1}"
        >
      </div>
    `;
  });

  const body = document.getElementById('charDialogBody');
  body.innerHTML = `
    <div class="dialog-char-header">
      <img class="dialog-avatar" src="${char.avatar}" alt="${name}">
      <div class="dialog-char-info">
        <h2 class="dialog-char-name">${name}</h2>
        <div style="display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap;">
          <span class="dialog-char-role"><i class="fa-solid fa-briefcase" style="margin-inline-end:0.3rem;"></i>${role}</span>
          <span class="char-badge ${statusClass}">${statusText}</span>
        </div>
      </div>
    </div>

    <div class="dialog-section">
      <h3 class="dialog-section-title">${lang === 'ar' ? 'عن الشخصية' : 'About'}</h3>
      <p class="dialog-section-text">${bio}</p>
    </div>

    <div class="dialog-section">
      <h3 class="dialog-section-title">${lang === 'ar' ? 'هدف الشخصية' : 'Goal'}</h3>
      <p class="dialog-section-text">${goal}</p>
    </div>

    <div class="dialog-section">
      <h3 class="dialog-section-title">${lang === 'ar' ? 'الصور' : 'Gallery'} (${char.images.length})</h3>
      <div class="char-gallery" id="charGallery">${galleryHTML}</div>
    </div>
  `;

  const overlay = document.getElementById('charDialogOverlay');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  requestAnimationFrame(() => {
    const lazyImgs = document.querySelectorAll('.lazy-img');
    const imgObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.onload = () => img.classList.add('loaded');
          obs.unobserve(img);
        }
      });
    }, { root: document.getElementById('charDialogPanel'), rootMargin: '200px' });
    lazyImgs.forEach(img => imgObserver.observe(img));

  document.getElementById('charGallery').addEventListener('click', (e) => {
    const img = e.target.closest('.gallery-img');
    if (!img || !img.classList.contains('loaded')) return;

    const allImgs = [...document.querySelectorAll('#charGallery .gallery-img.loaded')];
    const clickedIndex = allImgs.indexOf(img);
    const loadedSrcs = allImgs.map(i => i.src);

    openLightbox(loadedSrcs, clickedIndex);
  });
  });
}

function closeCharDialog() {
  const overlay = document.getElementById('charDialogOverlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

let lightboxImages = [];
let lightboxCurrent = 0;

function openLightbox(images, startIndex) {
  lightboxImages = images;
  lightboxCurrent = startIndex;
  const overlay = document.getElementById('lightboxOverlay');
  const img = document.getElementById('lightboxImg');
  img.src = images[startIndex];
  overlay.classList.add('active');
}

function closeLightbox() {
  document.getElementById('lightboxOverlay').classList.remove('active');
}

function lightboxNav(dir) {
  lightboxCurrent = (lightboxCurrent + dir + lightboxImages.length) % lightboxImages.length;
  document.getElementById('lightboxImg').src = lightboxImages[lightboxCurrent];
}

function renderSocials(lang) {
  const container = document.getElementById('socialsContainer');
  if (!container) return;
  container.innerHTML = '';
  socials.forEach(social => {
    const btn = document.createElement('a');
    btn.className = 'social-button reveal';
    btn.href = social.url;
    btn.target = '_blank';

    const name = lang === 'ar' ? social.nameAr : social.nameEn;
    const desc = lang === 'ar' ? social.descAr : social.descEn;

    btn.innerHTML = `
      <div class="social-btn-left">
        <i class="${social.iconClass} social-btn-icon"></i>
        <div class="social-btn-text">
          <span class="social-btn-name">${name}</span>
          <span class="social-btn-desc">${desc}</span>
        </div>
      </div>
      <i class="fa-solid fa-arrow-right social-btn-arrow"></i>
    `;
    container.appendChild(btn);
  });
}

let revealObserver = null;

function setupRevealObserver() {
  if (revealObserver) {
    revealObserver.disconnect();
  }

  const elements = document.querySelectorAll('.reveal');
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        const skillFills = entry.target.querySelectorAll('.skill-bar-fill');
        skillFills.forEach(fill => {
          const percent = fill.getAttribute('data-percent');
          setTimeout(() => {
            fill.style.width = `${percent}%`;
          }, 100);
        });
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05
  });

  elements.forEach(el => revealObserver.observe(el));
}

function setupBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  if (!backToTopBtn) return;

  function toggleVisibility() {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('scroll', toggleVisibility);
  toggleVisibility();
}

function setLanguage(lang) {
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll("[data-en]").forEach((element) => {
    element.textContent = element.getAttribute(`data-${lang}`);
  });
  localStorage.setItem("preferred-language", lang);
  renderSkills(lang);
  renderCharacters(lang);
  renderSocials(lang);
  setupRevealObserver();
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferred-language") || "ar";

  const langButtons = document.querySelectorAll(".lang-btn");
  langButtons.forEach((btn) => {
    if (btn.getAttribute("data-lang") === savedLang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }

    btn.addEventListener("click", function () {
      const lang = this.getAttribute("data-lang");
      setLanguage(lang);

      langButtons.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
    });
  });

  setupBackToTop();

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (!target) return;
          
          const headerHeight = document.querySelector('.site-header').offsetHeight;
          const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
          
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      });
  });

  document.getElementById('charDialogClose').addEventListener('click', closeCharDialog);
  document.getElementById('charDialogOverlay').addEventListener('click', function (e) {
    if (e.target === this) closeCharDialog();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeCharDialog();
  });

  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightboxPrev').addEventListener('click', () => lightboxNav(-1));
  document.getElementById('lightboxNext').addEventListener('click', () => lightboxNav(1));
  document.getElementById('lightboxOverlay').addEventListener('click', function(e) {
    if (e.target === this) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (!document.getElementById('lightboxOverlay').classList.contains('active')) return;
    if (e.key === 'ArrowLeft')  lightboxNav(-1);
    if (e.key === 'ArrowRight') lightboxNav(1);
    if (e.key === 'Escape') closeLightbox();
  });

  setLanguage(savedLang);
});