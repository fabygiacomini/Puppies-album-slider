const images = [
  "dogo-images/pic1.png",
  "dogo-images/pic2.png",
  "dogo-images/pic3.png",
  "dogo-images/pic4.png",
  "dogo-images/pic5.png",
  "dogo-images/pic6.png"
];

let num = 0;

function next() {
  let slider = document.getElementById('slider');
  num++;
  if (num >= images.length) {
    num = 0;
  }
  slider.src = images[num];
}

function prev() {
  let slider = document.getElementById('slider');
  num--;
  if (num < 0) {
    num = images.length - 1;
  }
  slider.src = images[num];
}