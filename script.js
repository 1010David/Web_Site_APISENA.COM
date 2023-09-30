const imageContainer = document.querySelector('.hexagon-container2');
const images = document.querySelectorAll('.hexagon-container2 img');
let currentIndex = 0;


$(document).ready(function(){
    $('.testimonial-carousel').slick({
        slidesToShow: 3, // Muestra 3 testimonios a la vez
        slidesToScroll: 1, // Desplaza 1 testimonio a la vez
        autoplay: true, // Iniciar reproducción automática
        autoplaySpeed: 5000, // Velocidad de cambio de testimonio en milisegundos
        arrows: false, // Ocultar flechas de navegación
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});




function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Cambia automáticamente la imagen cada 3 segundos
setInterval(nextImage, 3000);

// Muestra la primera imagen al cargar la página
showImage(currentIndex);



// Espera a que se cargue todo el contenido de la página
window.addEventListener('load', () => {
    const textElement = document.getElementById('animated-text');
    const text = textElement.textContent; // Obtiene el texto original

    // Divide el texto en caracteres y crea una animación de entrada
    textElement.textContent = ''; // Limpia el contenido original
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            textElement.textContent += text[i]; // Agrega cada letra una por una
        }, i * 220); // Cambia la velocidad de la animación ajustando el valor de "100"
    }
});


// Obtener los contenedores de productos y las ventanas emergentes
const productContainer4 = document.querySelector('.product-container4');
const productPopup4 = document.querySelector('.product-container4 .product-popup');

const productContainer2 = document.querySelector('.product-container2');
const productPopup2 = document.querySelector('.product-container2 .product-popup');

const productContainer3 = document.querySelector('.product-container3');
const productPopup3 = document.querySelector('.product-container3 .product-popup');

const productContainer5 = document.querySelector('.product-container5');
const productPopup5 = document.querySelector('.product-container5 .product-popup');

const productContainer6 = document.querySelector('.product-container6');
const productPopup6 = document.querySelector('.product-container6 .product-popup');

const productContainer7 = document.querySelector('.product-container7');
const productPopup7 = document.querySelector('.product-container7 .product-popup');

// Inicialmente, ocultar todas las ventanas emergentes
productPopup4.style.display = 'none';
productPopup2.style.display = 'none';
productPopup3.style.display = 'none';
productPopup5.style.display = 'none';
productPopup6.style.display = 'none';
productPopup7.style.display = 'none';

// Mostrar las ventanas emergentes al pasar el mouse sobre los contenedores de productos
productContainer4.addEventListener('mouseover', () => {
    productPopup4.style.display = 'block';
});
productContainer2.addEventListener('mouseover', () => {
    productPopup2.style.display = 'block';
});
productContainer3.addEventListener('mouseover', () => {
    productPopup3.style.display = 'block';
});
productContainer5.addEventListener('mouseover', () => {
    productPopup5.style.display = 'block';
});
productContainer6.addEventListener('mouseover', () => {
    productPopup6.style.display = 'block';
});
productContainer7.addEventListener('mouseover', () => {
    productPopup7.style.display = 'block';
});

// Ocultar las ventanas emergentes al quitar el mouse de los contenedores de productos
productContainer4.addEventListener('mouseout', () => {
    productPopup4.style.display = 'none';
});
productContainer2.addEventListener('mouseout', () => {
    productPopup2.style.display = 'none';
});
productContainer3.addEventListener('mouseout', () => {
    productPopup3.style.display = 'none';
});
productContainer5.addEventListener('mouseout', () => {
    productPopup5.style.display = 'none';
});
productContainer6.addEventListener('mouseout', () => {
    productPopup6.style.display = 'none';
});
productContainer7.addEventListener('mouseout', () => {
    productPopup7.style.display = 'none';
});




