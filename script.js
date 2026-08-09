/* ================================================================
   1. ENVIO INTELIGENTE DE FORMULÁRIOS (Contato e Proposta)
   ================================================================ */
const formularios = document.querySelectorAll('.formulario-completo');

formularios.forEach((form) => {
  form.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const inputNome = form.querySelector('input[type="text"]');
    const nomeCliente = inputNome ? inputNome.value : 'Cliente';

    alert(`Parabéns, ${nomeCliente}! 🎉\n\nSua mensagem/proposta foi enviada com sucesso para a equipe Prime Imóveis. Entraremos em contato pelo seu WhatsApp em breve!`);

    form.reset();
  });
});


/* ================================================================
   2. FILTRO DE IMÓVEIS (Venda vs Aluguel em imoveis.html)
   ================================================================ */
function filtrarImoveis(categoria) {
  const cards = document.querySelectorAll('.card-imovel');

  cards.forEach((card) => {
    const badge = card.querySelector('[class*="badge"]');
    const textoBadge = badge ? badge.textContent.toLowerCase() : '';

    if (categoria === 'todos') {
      card.style.display = 'block';
    } else if (textoBadge.includes(categoria)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}


/* ================================================================
   3. GALERIA INTERATIVA (Página detalhe.html - Versão Antiga)
   ================================================================ */
const fotoPrincipal = document.querySelector('.imagem-imovel');
const fotosExtras = document.querySelectorAll('.foto-extra img');

if (fotoPrincipal && fotosExtras.length > 0) {
  fotosExtras.forEach((fotoMiniatura) => {
    fotoMiniatura.style.cursor = 'pointer';

    fotoMiniatura.addEventListener('click', function () {
      const urlTemp = fotoPrincipal.src;
      fotoPrincipal.src = fotoMiniatura.src;
      fotoMiniatura.src = urlTemp;
    });
  });
} // <--- O ERRO ESTAVA AQUI! FALTAVA ESSA CHAVE PARA FECHAR O IF!


/* ================================================================
   4. CARROSSEL DE IMAGENS (Página detalhe.html)
   ================================================================ */
let slideAtual = 0;

function mudarSlide(direcao) {
  const slides = document.querySelectorAll('.slide');
  if (!slides || slides.length === 0) return;

  mostrarSlide(slideAtual + direcao);
}

function irParaSlide(indice) {
  mostrarSlide(indice);
}

function mostrarSlide(novoIndice) {
  const slides = document.querySelectorAll('.slide');
  const pontos = document.querySelectorAll('.ponto');
  if (!slides || slides.length === 0) return;

  if (novoIndice >= slides.length) {
    slideAtual = 0;
  } else if (novoIndice < 0) {
    slideAtual = slides.length - 1;
  } else {
    slideAtual = novoIndice;
  }

  slides.forEach((slide) => {
    slide.classList.remove('ativo');
  });
  
  pontos.forEach((ponto) => {
    ponto.classList.remove('ativo');
  });

  slides[slideAtual].classList.add('ativo');
  if (pontos[slideAtual]) {
    pontos[slideAtual].classList.add('ativo');
  }
}