let swiper = new Swiper(".slider", {
    cssMode: true,
    loop: true,
    verticalClass:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      direction: "vertical",
      el: ".swiper-scrollbar",
      hide: false,
    },  
    mousewheel: true,
    keyboard: true,
  });