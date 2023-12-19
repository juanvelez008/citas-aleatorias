let botonElem = document.getElementById('boton-cambiar-cita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');

function generarEnteroAleatorio (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function cambiarCita () {
  let indiceAleatorio = generarEnteroAleatorio (0, citas.length);
  //cambio del texto
  citaElem.innerText = `"${citas[indiceAleatorio].texto}"`
  //cambio del autor
  autorElem.innerText = `${citas[indiceAleatorio].autor}`
}

cambiarCita ();

botonElem.addEventListener('click', cambiarCita);