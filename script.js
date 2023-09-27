const imageContainer = document.querySelector('.hexagon-container2');
const images = document.querySelectorAll('.hexagon-container2 img');
let currentIndex = 0;

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
