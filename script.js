
var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 1,
  spaceBetween: 85,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".slide1_button_next",
    prevEl: ".slide1_button_prev",
  },
  breakpoints: {
    480: {
      slidesPerView: 1.5,
    }
  }
});


// 


// let closeDevPop = document.querySelectorAll('.closeDevPU');
// let developmentPopUp = document.querySelectorAll('.developmentPopUp');
// let worksItemPU = document.querySelectorAll('.worksItemPU');


// worksItemPU.forEach((el, i) => {
//   el.onclick = () => {
//     developmentPopUp[i].style.display = 'flex';
//   }
//   closeDevPop[i].onclick = () => {
//     developmentPopUp[i].style.display = 'none';
//   }
// })


// burgerMenu

let forMobileBurger = document.querySelector('.forMobileBurger');
let burgerMenu = document.querySelector('.burgerMenu');
let closeBurger = document.querySelector('.closeBurger');

forMobileBurger.onclick = () => {
  burgerMenu.style.left = '0%';
}

closeBurger.onclick = () => {
  burgerMenu.style.left = '-100%';
}

let burgerNav = document.querySelectorAll('.burgerMenu nav ul li a');

burgerNav.forEach(el => {
  el.onclick = () => {
    burgerMenu.style.left = '-100%';
  }
})


// scroll animation

let animateTitles = document.querySelectorAll('.animateTitle');
let work = document.querySelector('.works_block');

window.onscroll = () => {
  animateTitles.forEach(txt => {
    let top = window.scrollY;

    if (top >= 260) {
      animateTitles[0].classList.add('show-animate');
    }

    if (top >= 2300) {
      animateTitles[1].classList.add('show-animate');
    }

    if (top >= 3260) {
      animateTitles[2].classList.add('show-animate');
    }

    if (top >= 3860) {
      animateTitles[3].classList.add('show-animate');
      work.classList.add('works_blockAnim');
    }

  })
}

