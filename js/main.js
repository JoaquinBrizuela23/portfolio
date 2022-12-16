const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector("#links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
});
