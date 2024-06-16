const menu_icon = document.getElementById("menu");
const header = document.getElementById("header");

menu_icon.addEventListener("click", () => {
  header.classList.toggle("active");
});

const nav_items = document.getElementsByClassName("nav_item");

for (const a of nav_items) {
  a.addEventListener("click", () => {
    header.classList.toggle("active");
  });
}

const carousel = document.querySelector(".carousel");
const images = Array.from(carousel.children);
const numberOfImages = images.length;

for (let i = 0; i < numberOfImages; i++) {
  carousel.appendChild(images[i].cloneNode(true));
}
const allImages = document.querySelectorAll(".carousel img");

allImages.forEach((image) => {
  image.addEventListener("mouseover", () => {
    carousel.style.animationPlayState = "paused";
    image.style.transform = "scale(1.03)";
  });

  image.addEventListener("mouseout", () => {
    carousel.style.animationPlayState = "running";
    image.style.transform = "scale(1)";
  });
});
