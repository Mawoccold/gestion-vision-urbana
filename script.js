// Usamos window para asegurar que los botones vean la función
window.moveSlide = function(direction) {
    const slider = document.getElementById('slider');
    const viewport = document.querySelector('.reviews-viewport');
    const cards = document.querySelectorAll('.card');

    if (!slider || cards.length === 0) return;

    // Inicializar el índice si no existe
    if (window.myCurrentIndex === undefined) {
        window.myCurrentIndex = 0;
    }

    window.myCurrentIndex += direction;

    if (window.myCurrentIndex >= cards.length) window.myCurrentIndex = 0;
    if (window.myCurrentIndex < 0) window.myCurrentIndex = cards.length - 1;

    // Calcular usando el ancho del viewport + el margen
    const cardWidth = viewport.offsetWidth;
    const margin = 30; // Debe coincidir con el margin-right de .card en CSS
    const offset = window.myCurrentIndex * (cardWidth + margin);
    
    slider.style.transform = `translateX(-${offset}px)`; // Cambiado a píxeles
};