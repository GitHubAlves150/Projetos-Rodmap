    document.addEventListener('DOMContentLoaded', () => {
    const carouselSlide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.querySelector('.carousel-dots');

    let counter = 0;
    const slideWidth = images[0].clientWidth; // Largura de uma imagem
    let autoSlideInterval;

    // Função para atualizar a posição do slide
    function updateCarousel() {
        carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
        updateDots();
    }

    // Função para avançar o slide
    function nextSlide() {
        if (counter >= images.length - 1) {
            counter = 0; // Volta para o primeiro slide
        } else {
            counter++;
        }
        updateCarousel();
    }

    // Função para retroceder o slide
    function prevSlide() {
        if (counter <= 0) {
            counter = images.length - 1; // Vai para o último slide
        } else {
            counter--;
        }
        updateCarousel();
    }

    // Gerar os indicadores (bolinhas)
    function createDots() {
        images.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.addEventListener('click', () => {
                counter = index;
                updateCarousel();
                resetAutoSlide();
            });
            dotsContainer.appendChild(dot);
        });
        updateDots();
    }

    // Atualizar o estado ativo dos indicadores
    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            if (index === counter) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Iniciar o slide automático
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 2000); // Muda a cada 2 segundos (2000ms)
    }

    // Reiniciar o slide automático (usado após navegação manual)
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    // Adicionar event listeners aos botões
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide(); // Reinicia o timer após clique manual
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide(); // Reinicia o timer após clique manual
    });

    // Ajustar o slide quando a janela for redimensionada
    window.addEventListener('resize', () => {
        // Recalcula slideWidth para garantir a responsividade
        const newSlideWidth = images[0].clientWidth;
        // Ajusta a transição instantaneamente para evitar animação errada no resize
        carouselSlide.style.transition = 'none';
        carouselSlide.style.transform = `translateX(${-newSlideWidth * counter}px)`;
        // Volta a transição suave após um pequeno delay
        setTimeout(() => {
            carouselSlide.style.transition = 'transform 0.5s ease-in-out';
        }, 50);
    });

    // Inicializar o carrossel
    createDots(); // Cria os pontos antes de iniciar
    startAutoSlide(); // Inicia o slide automático

    // Opcional: Pausar o carrossel ao passar o mouse por cima
    carouselSlide.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    carouselSlide.addEventListener('mouseleave', startAutoSlide);
});