document.addEventListener("DOMContentLoaded", function() {
    // Função de callback quando um vídeo entra na viewport
    const loadVideo = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const video = entry.target;
          video.src = video.dataset.src;
          observer.unobserve(video); // Desobservar após carregar o vídeo
        }
      });
    };
  
    // Configuração do Intersection Observer
    const observer = new IntersectionObserver(loadVideo, {
      root: null, // Observa a viewport
      rootMargin: "0px",
      threshold: 0.1 // Quando 10% do vídeo está visível
    });
  
    // Selecionar todos os vídeos e iframes com data-src
    const videos = document.querySelectorAll('video[data-src], iframe[data-src]');
    videos.forEach(video => {
      observer.observe(video); // Começar a observar
    });
  });
  