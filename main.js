let btn = document.querySelector(".card .text .data .icon");
let icons = document.querySelector(".card .text .data .icons");
let icon = document.querySelector(".card .text .data .icon");
if (sessionStorage.getItem("icons") === "true") {
  icons.classList.remove("none");
} else {
  icons.classList.add("none");
}
btn.addEventListener("click", (e) => {
  e.stopPropagation();
  icons.classList.toggle("none");
  if (icons.classList.contains("none")) {
    sessionStorage.setItem("icons", false);
  } else {
    sessionStorage.setItem("icons", true);
  }
});
document.body.addEventListener("click", (e) => {
  if (!icons.contains(e.target)) {
    icons.classList.add("none");
    sessionStorage.setItem("icons", false);
  }
});
