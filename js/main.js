const linkCategoria = document.querySelector(".link-categoria");
const iconCategoria = document.querySelector(".icon-categoria");


linkCategoria.addEventListener("click", () => {

    linkCategoria.classList.toggle("open");
    iconCategoria.classList.toggle("icon-categoria");

});