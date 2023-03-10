/* --------------------------------------- VARIABLES --------------------------------------- */

const texto = document.getElementById("texto");
const botonBorrar = document.getElementById("boton-borrar");
const botonCopiar = document.getElementById("boton-copiar");
const resultado = document.getElementById("resultado");
const numPalabras = document.getElementById("num-palabras");
const numEspacios = document.getElementById("num-espacios");
const numCaracteres = document.getElementById("num-caracteres");
const numAcentos = document.getElementById("num-acentos");
const numParrafos = document.getElementById("num-parrafos");
const tiempoLectura = document.getElementById("tiempo-lectura");
const TextoCompleto = document.getElementById("texto");
const palabrasRepetidas = document.getElementById("palabras-repetidas");



/* --------------------------------------- CONTAR PALABRAS --------------------------------------- */

function contarPalabras(textoIntroducido) {
  const palabras = textoIntroducido.trim().split(/\s+/);
  return palabras.filter((palabra) => palabra !== "").length;
}

function actualizarContadores() {
  const textoIntroducido = texto.value;
  const palabras = contarPalabras(textoIntroducido);
  const espacios = (textoIntroducido.match(/\s/g) || []).length;
  const caracteres = textoIntroducido.length;
  const acentos = (textoIntroducido.match(/[áéíóú]/gi) || []).length;
  const parrafos = textoIntroducido.split(/\r\n|\r|\n/).length;
  const tiempoLecturaMinutos = palabras / 200;
  numPalabras.innerHTML = palabras;
  numEspacios.innerHTML = espacios;
  numCaracteres.innerHTML = caracteres;
  numAcentos.innerHTML = acentos;
  numParrafos.innerHTML = parrafos;
  tiempoLectura.innerHTML = tiempoLecturaMinutos.toFixed(2);
}

texto.addEventListener("input", actualizarContadores);

//---------------------------------- Borrar el contenido del textarea -------------------------------------
botonBorrar.addEventListener("click", () => {
  texto.value = "";
  actualizarContadores();
});

//---------------------------------- Copiar el contenido del textarea -------------------------------------

function copyToClipboard(TextoCompleto) {
  TextoCompleto.select();
  document.execCommand("copy");
}

botonCopiar.addEventListener("click", () => {
  copyToClipboard(TextoCompleto);
});

//---------------------------------- Boton del modal texto copiado  -------------------------------------

// Get the modal element
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("boton-copiar");

// Get the close button element
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on the close button, close the modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
