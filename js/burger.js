const mobileBtn = document.querySelector('.navbar__mobile-navigation');
const menuList = document.querySelector('.navbar__menu-list');
mobileBtn.addEventListener('click',() => {
    mobileBtn.classList.toggle('navbar__mobile-navigation--active');
    menuList.classList.toggle('navbar__menu-list--open');

});