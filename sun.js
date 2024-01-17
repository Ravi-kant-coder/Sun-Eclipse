let mouse = document.querySelector(".cursor");
let sun = document.querySelector(".circle");

window.addEventListener("mousemove", cursorMove);
function cursorMove(e) {
  mouse.style.top = e.clientY + "px";
  mouse.style.left = e.clientX + "px";
}
sun.addEventListener("mouseover", active);
function active(em) { 
  if (em.target.classList.contains("circle")) {
    mouse.innerHTML = "ECLIPSE";
}};
sun.addEventListener("mouseout", deactive);
function deactive(ed) { 
  if (ed.target.classList.contains("circle")) {
    mouse.innerHTML = "SUN";
}
};