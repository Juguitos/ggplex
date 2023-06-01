// Selecciona todos los enlaces del menú de navegación
const links = document.querySelectorAll('nav a');

// Agrega un evento de clic a cada enlace
links.forEach(link => {
  link.addEventListener('click', e => {
    // Previene el comportamiento predeterminado del enlace
    e.preventDefault();

    // Obtiene el valor del atributo href del enlace
    const href = link.getAttribute('href');

    // Selecciona la sección correspondiente
    const section = document.querySelector(href);

    // Calcula la posición de la sección en la página
    const offsetTop = section.offsetTop;

    // Desplaza suavemente la página hasta la sección correspondiente
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  });
});


/*Animacion de el secmento del menu*/

document.addEventListener('DOMContentLoaded', function() {
  var menuLinks = document.getElementsByClassName('menu-link');
  for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function() {
      var current = document.getElementsByClassName('active');
      if (current.length > 0) {
        current[0].classList.remove('active');
      }
      this.classList.add('active');
    });
  }
});