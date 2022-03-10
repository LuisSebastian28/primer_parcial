import sumar from "./sumador";

const titulo = document.querySelector("#title");
const detalle = document.querySelector("#Detail");
const form = document.querySelector("#publicar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const texto  = titulo.value;
  var largo = texto.length;

  if(largo > 5){
    div.innerHTML = div.innerHTML+"<p>" + "Demasidos caracteres en el tiulo" + "</p>";
  }
  div.innerHTML = div.innerHTML+ "<p>" + titulo.value + "</p>";
  div.innerHTML = div.innerHTML+ "<p>" + detalle.value + "</p>";
  div.innerHTML = div.innerHTML+ "<p>" + largo + "</p>";;



});
