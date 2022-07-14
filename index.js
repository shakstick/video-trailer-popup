const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");
const video = document.querySelector("video");
const cross = document.querySelector(".cross");

const close = () => {
  overlay.classList.add("hidden");
  video.classList.add("hidden");
  cross.classList.add("hidden");
};

btn.addEventListener("click", () => {
  overlay.classList.toggle("hidden");
  video.classList.toggle("hidden");
  cross.classList.toggle("hidden");
});

overlay.addEventListener("click", close);

cross.addEventListener("click", close);

window.addEventListener("keyup", (e) => {
  if (video.classList.contains("hidden") || e.key === "Escape") {
    close();
  }
});
