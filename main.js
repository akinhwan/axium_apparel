let modal = document.getElementById("modal");
let lightbox = document.getElementById("lightbox");
let clothing = document.querySelector(".clothing");
let flyout = document.querySelector(".flyout");
let write = document.getElementById("write");
let submit = document.getElementById("submit");

//flyout on hover
clothing.addEventListener("mouseenter", e => {
  flyout.style.display = "block";
});

//close dropdown on exit
flyout.addEventListener("mouseleave", e => {
  flyout.style.display = "none";
});

//open modal and lightbox
write.onclick = () => {
  lightbox.style.display = "block";
  modal.style.display = "block";
};

//close modal and lightbox
window.onclick = function(event) {
  if (event.target == lightbox || event.target == submit) {
    modal.style.display = "none";
    lightbox.style.display = "none";
  }
};
