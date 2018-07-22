let modal = document.getElementById("modal");
let lightbox = document.getElementById("lightbox");
// let flyout = document.getElementById("flyout");
let write = document.getElementById("write");
let submit = document.getElementById("submit");

// flyout.style.display = "flex";

// let clothing = document.getElementById("clothing");
// clothing.addEventListener("mouseenter", e => {
//   document.getElementById("flyout").style.display = "block";
// });

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
