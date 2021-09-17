'use strict';

// working with navigation menu --------------------------------


const navigation = document.querySelector('.navigation');

document.querySelector('.toggle').onclick = function () {
  this.classList.toggle('active');
  navigation.classList.toggle('active');
};



// working with slider -----------------------------------------
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slidesImg = document.querySelector('.slides img');

let count = 0;

const sliderFunc = function (count) {
  slidesImg.src = `./images/food-${count}.png`;
}
next.addEventListener('click', function () {
  count = count >= 3 ? 0 : count + 1; // count = count + 1
  sliderFunc(count);
});
prev.addEventListener('click', function () {
  count = count <= 0 ? 3 : count - 1; // count = count - 1
  sliderFunc(count);
});