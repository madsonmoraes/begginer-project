const images = document.querySelectorAll(".carousel img");
let currentIndex = 0;

function showNextImage() {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add("active");
}

// Adiciona a primeira imagem como ativa
document.addEventListener("DOMContentLoaded", () => {
  if (images.length > 0) {
    images[0].classList.add("active");
  }
  setInterval(showNextImage, 7000);
});

// Lista de filmes (dados fictícios)
const mediaData = {
  filme: {
    1: {
      title: "Código Alarum",
      description:
        "Vivendo isolados durante as férias em um resort de inverno, os espiões casados Joe e Lara são atacados por membros da velha guarda.",
      cast: "Ator 1, Ator 2, Ator 3",
      rating: "8.5",
      year: "2024",
      trailer: "https://www.youtube.com/watch?v=EXEMPLO1",
      image: "./assets/film thumb/01.jpg",
    },
    2: {
      title: "Último Alvo",
      description: "Descrição do Filme Exemplo 2.",
      cast: "Ator A, Ator B, Ator C",
      rating: "7.9",
      year: "2023",
      trailer: "https://www.youtube.com/watch?v=EXEMPLO2",
      image: "./assets/film thumb/02.jpg",
    },
  },
  serie: {
    1: {
      title: "Código Alarum",
      description:
        "Vivendo isolados durante as férias em um resort de inverno, os espiões casados Joe e Lara são atacados por membros da velha guarda.",
      cast: "Ator 1, Ator 2, Ator 3",
      rating: "8.5",
      year: "2024",
      trailer: "https://www.youtube.com/watch?v=EXEMPLO1",
      image: "./assets/film thumb/01.jpg",
    },
    2: {
      title: "Último Alvo",
      description: "Descrição do Filme Exemplo 2.",
      cast: "Ator A, Ator B, Ator C",
      rating: "7.9",
      year: "2023",
      trailer: "https://www.youtube.com/watch?v=EXEMPLO2",
      image: "./assets/film thumb/02.jpg",
    },
  },
  documentario: {
    1: {
      title: "Código Alarum",
      description:
        "Vivendo isolados durante as férias em um resort de inverno, os espiões casados Joe e Lara são atacados por membros da velha guarda.",
      cast: "Ator 1, Ator 2, Ator 3",
      rating: "8.5",
      year: "2024",
      trailer: "https://www.youtube.com/watch?v=EXEMPLO1",
      image: "./assets/film thumb/01.jpg",
    },
    2: {
      title: "Último Alvo",
      description: "Descrição do Filme Exemplo 2.",
      cast: "Ator A, Ator B, Ator C",
      rating: "7.9",
      year: "2023",
      trailer: "https://www.youtube.com/watch?v=EXEMPLO2",
      image: "./assets/film thumb/03.jpg",
    },
  },
};
document.addEventListener("DOMContentLoaded", () => {
  // Seleciona as imagens de cada categoria separadamente
  document
    .querySelectorAll(
      ".contentFilms img, .contentSeries img, .contentDocumentarios img"
    )
    .forEach((img) => {
      img.addEventListener("click", (event) => {
        const id = event.target.getAttribute("data-id");
        const category = event.target.getAttribute("data-category");
        openModal(category, id); // Passa corretamente a categoria e o id
      });
    });
});

function openModal(category, id) {
  // Acesse os dados corretos com base na categoria e id
  const media = mediaData[category][id];

  if (!media) {
    console.error("Mídia não encontrada!");
    return;
  }

  // Preenche as informações no modal
  const modalImage = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalCast = document.getElementById("modal-cast");
  const modalRating = document.getElementById("modal-rating");
  const modalYear = document.getElementById("modal-year");
  const modalTrailer = document.getElementById("modal-trailer");

  modalImage.src = media.image;
  modalTitle.textContent = media.title;
  modalDescription.textContent = media.description;
  modalCast.textContent = media.cast;
  modalRating.textContent = media.rating;
  modalYear.textContent = media.year;
  modalTrailer.href = media.trailer;

  // Exibe o modal
  document.getElementById("modal").style.display = "flex";
}

document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    document.getElementById("modal").style.display = "none";
  }
});
