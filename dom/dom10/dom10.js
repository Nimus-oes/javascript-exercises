/* 
DOM 10. Display a random image (clicking on a button) from the following list:

"http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg", width: "240", height: "160"
"http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg", width: "320", height: "195"
"http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg", width: "500", height: "343"
*/

const button = document.getElementById("button");

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function removeImages() {
  const images = document.getElementsByTagName("img"); // Returns HTMLCollection
  for (i = 0; i < images.length; i++) {
    images[i].remove();
  }
}

function displayRandomImage() {
  const images = [
    {
      src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
      width: "240",
      height: "160",
    },
    {
      src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
      width: "320",
      height: "195",
    },
    {
      src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
      width: "500",
      height: "343",
    },
  ];

  removeImages();
  const randInt = getRndInteger(0, images.length - 1);
  const img = document.createElement("img");
  img.setAttribute("src", images[randInt]["src"]);
  img.setAttribute("width", images[randInt]["width"]);
  img.setAttribute("height", images[randInt]["height"]);
  document.body.insertBefore(img, button);
}

button.addEventListener("click", displayRandomImage);
