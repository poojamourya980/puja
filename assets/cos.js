const nav = document.querySelector(".cos-nav");
const docu = document.querySelector("body");

function navigation() {
  
const onScroll = (event) => {
  const scrollPosition = event.target.scrollingElement.scrollTop;
  docu.classList.toggle("scrolled-down", scrollPosition > 56)
  nav.classList.toggle("scrolled-down", scrollPosition > 56);
};

document.addEventListener("scroll", onScroll, { passive: true });

}


navigation();

var swiper = new Swiper("#cos-skin-slider", {
  spaceBetween:20,
  centeredSlides: true,
  speed:1000,
  grabCursor:true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var swiper = new Swiper("#cos-Sportlight", {
  slidesPerView:5,
  spaceBetween: 10,
  grabCursor:true,
  speed:800,
  autoplay:{
    delay:2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 2.1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween:10,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween:10,
    },
  },
});

var swiper = new Swiper("#cos-Blogs", {
  slidesPerView:4,
  spaceBetween: 10,
  grabCursor:true,
  speed:800,
  autoplay:{
    delay:2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView:1.3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween:10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween:10,
    },
  },
});


  const toggleMenu = () => document.body.classList.toggle("open");



const menuContent = document.querySelector("#menuContent");
const menuHeight =
getComputedStyle(document.documentElement) .getPropertyValue("--menu-height");
const toggleMenuOpen = (value) => { document.body.classList.toggle("open", value);
};

const toggleMenuBlock = (event, index) =>{ menuButtons.forEach(button =>
button.classList.remove("active")); event.classList.toggle("active"); menuContent.style.translate =
`0 calc(0px - ${menuHeight} * ${index})`;
};



