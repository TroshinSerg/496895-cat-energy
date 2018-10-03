var menuToggle = document.querySelector('.main-nav__toggle'),
    mainNavList = document.querySelector('.main-nav__list');

menuToggle.addEventListener('click', function (evt) {
  menuToggle.classList.toggle('main-nav__toggle--opened');
  mainNavList.classList.toggle('main-nav__list--opened');
});
