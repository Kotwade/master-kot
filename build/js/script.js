'use strict';
var ESC_KEY = 'Escape';

// Попапы

var sedona = document.querySelector('.photo-sedona-popup');

var sedonaOpen = document.querySelector('.sedona-button');
var sedonaClose = document.querySelector('.sedona-button-close');
var overlay = document.querySelector('.overlay');

var onSedonaPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closeSedonaPopup();
  }
};

var openSedona = function () {
  sedona.classList.remove('photo-sedona-popup--hidden');
  overlay.classList.remove('overlay--hidden');
  document.addEventListener('keydown', onSedonaPopupEscPress);
};

var closeSedonaPopup = function () {
  sedona.classList.add('photo-sedona-popup--hidden');
  overlay.classList.add('overlay--hidden');
  document.removeEventListener('keydown', onSedonaPopupEscPress);
};

sedonaOpen.addEventListener('click', openSedona);

sedonaClose.addEventListener('click', closeSedonaPopup);

overlay.addEventListener('click', closeSedonaPopup);



var velosipedi = document.querySelector('.photo-velosipedi-popup');

var velosipediOpen = document.querySelector('.velosipedi-button');
var velosipediClose = document.querySelector('.velosipedi-button-close');
var overlay = document.querySelector('.overlay');

var onVelosipediPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closeVelosipediPopup();
  }
};

var openVelosipedi = function () {
  velosipedi.classList.remove('photo-velosipedi-popup--hidden');
  overlay.classList.remove('overlay--hidden');
  document.addEventListener('keydown', onVelosipediPopupEscPress);
};

var closeVelosipediPopup = function () {
  velosipedi.classList.add('photo-velosipedi-popup--hidden');
  overlay.classList.add('overlay--hidden');
  document.removeEventListener('keydown', onVelosipediPopupEscPress);
};

velosipediOpen.addEventListener('click', openVelosipedi);

velosipediClose.addEventListener('click', closeVelosipediPopup);

overlay.addEventListener('click', closeVelosipediPopup);




var jewellery = document.querySelector('.photo-jewellery-popup');

var jewelleryOpen = document.querySelector('.jewellery-button');
var jewelleryClose = document.querySelector('.jewellery-button-close');
var overlay = document.querySelector('.overlay');

var onJewelleryPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closeJewelleryPopup();
  }
};

var openJewellery = function () {
  jewellery.classList.remove('photo-jewellery-popup--hidden');
  overlay.classList.remove('overlay--hidden');
  document.addEventListener('keydown', onJewelleryPopupEscPress);
};

var closeJewelleryPopup = function () {
  jewellery.classList.add('photo-jewellery-popup--hidden');
  overlay.classList.add('overlay--hidden');
  document.removeEventListener('keydown', onJewelleryPopupEscPress);
};

jewelleryOpen.addEventListener('click', openJewellery);

jewelleryClose.addEventListener('click', closeJewelleryPopup);

overlay.addEventListener('click', closeJewelleryPopup);
