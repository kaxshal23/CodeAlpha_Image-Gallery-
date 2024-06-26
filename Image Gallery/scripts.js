const images = [...document.querySelectorAll(".image")];
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".close-btn");
const imageName = document.querySelector(".image-name");
const largeImage = document.querySelector(".large-image");
const imageIndex = document.querySelector(".index");
const leftarrow = document.querySelector(".left-arrow");
const rightarrow = document.querySelector(".right-arrow");

let index = 0;

images.forEach((item, i) => {
  item.addEventListener("click", () => {
    updateImage(i);
    popup.classList.toggle("active");
  });
});

const updateImage = (i) => {
  let path = `images/${i + 1}.jpg`;
  largeImage.src = path;
  imageName.innerHTML = `0${i + 1}.jpg`;
  imageIndex.innerHTML = `0${i + 1}`;
  index = i;
};

closeBtn.addEventListener("click", () => {
  popup.classList.toggle("active");
});

leftarrow.addEventListener("click", () => {
  if (index > 0) {
    updateImage(index - 1);
  }
});

rightarrow.addEventListener("click", () => {
  if (index < images.length - 1) {
    updateImage(index + 1);
  }
});
