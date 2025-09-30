const socials = [
  {
    nameAr: "كيك",
    nameEn: "Kick",
    class: "kick",
    logo: '<i class="fa-brands fa-kickstarter fa-2x"></i>',
    descAr: "لا تنسى تتابعني في كيك اذا ودك تشوف البثوث",
    descEn: "Don't forget to follow me on Kick to watch my streams",
    url: "https://kick.com/uslt",
  },
  {
    nameAr: "تويتر",
    nameEn: "Twitter",
    class: "twitter",
    logo: '<i class="fa-brands fa-twitter fa-2x"></i>',
    descAr: "حسابي في تويتر اذا ودك تتابعني و شكراََ",
    descEn: "Follow me on Twitter to stay updated, thank you!",
    url: "https://twitter.com/uSULTAN0",
  },
  {
    nameAr: "انستقرام",
    nameEn: "Instagram",
    class: "instagram",
    logo: '<i class="fa-brands fa-instagram fa-2x"></i>',
    descAr: "حساب الانستقرام اذا ودك تتابعني بعد و شكراً",
    descEn: "Follow me on Instagram as well, thank you!",
    url: "https://www.instagram.com/uslt0",
  },
  {
    nameAr: "سناب شات",
    nameEn: "Snapchat",
    class: "snapchat",
    logo: '<i class="fa-brands fa-snapchat fa-2x"></i>',
    descAr: "اصور يومياتي والحصريات المهمه حياكم في سنابي",
    descEn: "I share my daily life and exclusive content on Snapchat",
    url: "https://t.snapchat.com/W63eKuRf",
  },
  {
    nameAr: "يوتيوب",
    nameEn: "YouTube",
    class: "youtube",
    logo: '<i class="fa-brands fa-youtube fa-2x"></i>',
    descAr: "عاد هنا لازم تشترك في قناتي و لا تنسى اللايك",
    descEn: "Don't forget to subscribe to my channel and leave a like",
    url: "https://www.youtube.com/channel/UC1aub5ke8F30YrbWBmgGy9w",
  },
  {
    nameAr: "ديسكورد",
    nameEn: "Discord",
    class: "discord",
    logo: '<i class="fa-brands fa-discord fa-2x"></i>',
    descAr: "حياكم في سيرفر الديسكورد الخاص فيني",
    descEn: "Welcome to my Discord server",
    url: "https://discord.gg/G4rEHC3P7N",
  },
  {
    nameAr: "دعم",
    nameEn: "Support",
    class: "donate",
    logo: '<i class="fa-solid fa-heart fa-2x"></i>',
    descAr:
      "اذا حبيت تدعمني تقدر من هنا و الله يجزاك خير (تنويه الدعم مو اجباري)",
    descEn: "If you want to support me, you can do so here (optional)",
    url: "https://botrix.live/k/uslt/tip",
  },
];

function renderSocialCards(lang = "ar") {
  const container = document.getElementById("socialCards");
  container.innerHTML = "";

  socials.forEach((social) => {
    const cardWrap = document.createElement("div");
    cardWrap.className = "card-wrapper";

    const name = lang === "ar" ? social.nameAr : social.nameEn;
    const desc = lang === "ar" ? social.descAr : social.descEn;
    const tooltipText = lang === "ar" ? "اضغط للانتقال" : "Click to visit";

    cardWrap.innerHTML = `
      <div class="card ${social.class}" onclick="window.open('${social.url}', '_blank')">
        <div class="platform-logo">${social.logo}</div>
        <div class="platform-name">
          <p data-en="${social.nameEn}" data-ar="${social.nameAr}">${name}</p>
        </div>
        <div class="platform-desc">
          <p data-en="${social.descEn}" data-ar="${social.descAr}">${desc}</p>
        </div>
      </div>
      <div class="tooltip">
        <strong data-en="Click to visit" data-ar="اضغط للانتقال">${tooltipText}</strong><i>🔗</i>
      </div>
    `;
    container.appendChild(cardWrap);
  });
}

function setLanguage(lang) {
  document.querySelectorAll("[data-en]").forEach((element) => {
    element.textContent = element.getAttribute(`data-${lang}`);
  });

  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  localStorage.setItem("preferred-language", lang);

  renderSocialCards(lang);
}
// not working👇🏻
function smoothScroll() {
  const currentScroll = window.pageYOffset;
  const targetScroll = document.querySelector(".container-cards").offsetTop;

  window.scrollTo({
    top: targetScroll,
    behavior: "smooth",
  });
}

function checkScrollPossible() {
  const scrollArrow = document.querySelector(".scroll-arrow");
  const containerCards = document.querySelector(".container-cards");

  if (containerCards.getBoundingClientRect().bottom > window.innerHeight) {
    scrollArrow.style.display = "block";
  } else {
    scrollArrow.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  renderSocialCards("ar");

  document
    .querySelector(".scroll-arrow")
    .addEventListener("click", smoothScroll);

  checkScrollPossible();

  window.addEventListener("resize", checkScrollPossible);

  const langButtons = document.querySelectorAll(".lang-btn");
  langButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const lang = this.getAttribute("data-lang");
      setLanguage(lang);

      langButtons.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
