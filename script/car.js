window.onload = () => {

  var swiper1 = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 5,
    slidesPerGroup: 1,
    rewind: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
      prevEl: ".swiper-button-prev1",
      nextEl: ".swiper-button-next1",
    },
    breakpoints: {
      800: {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 25,
      }
    }
  });
  var swiper1 = new Swiper(".mySwiper-dep", {
    slidesPerView: 1,
    spaceBetween: 5,
    slidesPerGroup: 1,
    rewind: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
      prevEl: ".swiper-button-prev-dep",
      nextEl: ".swiper-button-next-dep",
    },
    breakpoints: {
      800: {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 0,
      }
    }
  });
  var swiper1 = new Swiper(".mySwiper-img", {
    effect: "fade",
    slidesPerView: 1,
    spaceBetween: 25,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination-img",
      // dynamicBullets: false,
      clickable: true,
    },
    navigation: {
      prevEl: ".swiper-button-prev-img",
      nextEl: ".swiper-button-next-img",
    },
    breakpoints: {
      800: {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 25,
      }
    }
  });

}

/* 
  Importe este link no head no HTML:
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"/>

  Importe este link no footer:
  <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>


*/