// Obtener el botón para activar el menú desplegable
const gamesButton = document.querySelector('.boton');

// Obtener la lista desplegable de juegos
const gamesDropdown = document.querySelector('.lista');

// Agregar un evento de clic al botón
gamesButton.addEventListener('click', () => {
  // Toggle la clase "activo" en la lista desplegable
  gamesDropdown.classList.toggle('activo');
});



