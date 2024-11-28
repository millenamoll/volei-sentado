// Controle do carrossel
let slideIndex = 0;
const slides = document.querySelectorAll('.carrossel .slide');

function mostrarSlide(index) {
    // Ajusta o índice e reinicia se necessário
    slideIndex = (index + slides.length) % slides.length;

    // Oculta todos os slides e exibe o atual
    slides.forEach((slide, i) => {
        slide.style.display = i === slideIndex ? 'flex' : 'none';
    });
}

// Mudar o slide com os botões
function mudarSlide(direction) {
    mostrarSlide(slideIndex + direction);
}

// Inicializa o carrossel no primeiro slide
mostrarSlide(slideIndex);

// Interatividade dos Flashcards
const cards = document.querySelectorAll('.flashcards .card');

cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('flipped');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('flipped');
    });
});
