// Sroll bottom border

function navscroll() {
  const bodyElement = document.querySelector("body");
  const navElement = document.querySelector(".header-main");
  this.scrollY > 100
    ? navElement.classList.add("website-header-border")
    : navElement.classList.remove("website-header-border");
}

window.addEventListener("scroll", navscroll, false);

// Humburger toggle

const navToggle = document.querySelector(".humburger-icon");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
  document.body.classList.toggle("icon-hide");
});

// Mobile menu tabs

const tabs = document.querySelectorAll("[data-id]");
const icon = document.querySelectorAll(".mobile-btn-arrow");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.id);
    target.classList.toggle("menu-mobile-tab-active");
  });
});

icon.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("mobile-btn-arrow-two");
  });
});

// Team carusel

const btns = document.querySelectorAll('[data-cllas]');
const caruselimg = document.querySelectorAll('[data-carusel-img-hide]');

function clearImgBtn(){
  caruselimg.forEach(caruselimg => {
      caruselimg.classList.remove('team-carusel-img-show')
  })
  btns.forEach(btn => {
      btn.classList.remove('btn-active')
  })
}

btns.forEach(btn => {
    btn.addEventListener('click', () => {
      clearInterval(autoCarusel)
        const targetimg = document.querySelector(btn.dataset.cllas)
        clearImgBtn()
        targetimg.classList.add('team-carusel-img-show') 
        btn.classList.add('btn-active')
    })
})

const btnslogos = document.querySelectorAll('[data-logo]');

btnslogos.forEach(btnlogo => {
    btnlogo.addEventListener('click',() => {
        const targetlogo = document.querySelector(btnlogo.dataset.logo)
        targetlogo.classList.add('team-carusel-img-show')
    })
})

//Auto carusel

const logoImg = document.querySelectorAll(".logo-img");
const bigImg  = document.querySelectorAll(".big-img");
let position = 0;

const autoCarusel = setInterval(()=>{

  clearImgBtn()

  position +=1

  if(position === 6){
    position = 0;
  }

  bigImg[position].classList.add('team-carusel-img-show');
  btns[position].classList.add('btn-active');
  logoImg[position].classList.add('team-carusel-img-show');

},4000)

// Template Carusel

let slidePosition = 0;
const slides = document.getElementsByClassName("templates-carusel");
const totalSlide = slides.length;

document.getElementById("btn-next").addEventListener("click", () => {
  moveToNextSlide();
});

document.getElementById("btn-prev").addEventListener("click", () => {
  moveToPrevSlide();
});

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove("templates-carusel-show");
    slide.classList.add("templates-carusel-hide");
  }
  slides[slidePosition].classList.remove("templates-carusel-hide");
  slides[slidePosition].classList.add("templates-carusel-show");
}

function moveToNextSlide() {
  if (slidePosition === totalSlide - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlide - 1;
  } else {
    slidePosition--;
  }
  updateSlidePosition();
}
