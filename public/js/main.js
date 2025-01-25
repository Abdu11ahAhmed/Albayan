let humberger = document.querySelector(".humberger");
let links = document.querySelector(".links")
let bgeffect = document.querySelector(".bgeffect")

humberger.addEventListener("click", () => {
  humberger.classList.toggle("active");
  links.classList.toggle("active");
  bgeffect.classList.toggle("active");
});
