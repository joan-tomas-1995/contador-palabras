

/* --------------------------------------- VARIABLES --------------------------------------- */

const texto = document.getElementById("texto");
const botonBorrar = document.getElementById("boton-borrar");
const resultado = document.getElementById("resultado");
const numPalabras = document.getElementById("num-palabras");
const numEspacios = document.getElementById("num-espacios");
const numCaracteres = document.getElementById("num-caracteres");
const numAcentos = document.getElementById("num-acentos");
const numParrafos = document.getElementById("num-parrafos");
const tiempoLectura = document.getElementById("tiempo-lectura");


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
