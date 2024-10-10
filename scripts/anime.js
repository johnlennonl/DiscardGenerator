$(document).ready(function(){
    $('.logo-slider').slick({
      slidesToShow: 5,        // Número de logos visibles al mismo tiempo
      slidesToScroll: 1,      // Número de logos que se mueven en cada scroll
      autoplay: true,         // Desplazamiento automático
      autoplaySpeed: 2000,    // Velocidad del desplazamiento (en milisegundos)
      infinite: true,         // Repetir el carrusel infinitamente
      arrows: false,          // Ocultar flechas de navegación
      pauseOnHover: false,    // Continuar el movimiento al pasar el mouse
      swipe: false,           // Deshabilitar el swipe en dispositivos móviles
      draggable: false,       // Deshabilitar el arrastre (drag) en escritorio
      touchMove: false        // Deshabilitar el desplazamiento táctil
    });
  });
  