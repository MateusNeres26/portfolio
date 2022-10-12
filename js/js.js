const selecionado = document.querySelector("#toggle");
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const project = document.querySelector("#project");
const github = document.querySelector("#url");
const github1 = document.querySelector("#url1");

home.addEventListener("click", function () {
    selecionado.checked = false;
});
about.addEventListener("click", function () {
    selecionado.checked = false;
});
project.addEventListener("click", function () {
    selecionado.checked = false;
});

github.addEventListener("click", function() {
    location.href="https://github.com/MateusNeres26/buger-eats-cypress-discovery", '_blank';
});
github1.addEventListener("click", function() {
    location.href="https://github.com/MateusNeres26/curso-julio-de-lima", "_blank";
});