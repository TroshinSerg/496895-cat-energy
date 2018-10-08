var menuToggle = document.querySelector('.main-nav__toggle'),
    mainNavList = document.querySelector('.main-nav__list');

menuToggle.addEventListener('click', function (evt) {
  menuToggle.classList.toggle('main-nav__toggle--opened');
  mainNavList.classList.toggle('main-nav__list--opened');
});

var exampleToggle = document.querySelector('.example__toggle'),
    exampleImageWrapper = document.querySelectorAll('.example__image-wrapper');

exampleToggle.addEventListener('click', function (evt) {
  exampleToggle.classList.toggle('example__toggle--after');

  for (var i = 0; i < exampleImageWrapper.length; i++) {
    exampleImageWrapper[i].classList.toggle('example__image-wrapper--active');
  }

});
