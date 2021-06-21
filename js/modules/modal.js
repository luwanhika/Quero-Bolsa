export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const contentModal = document.querySelector('[data-modal="content"]');


  if(botaoAbrir && botaoFechar && contentModal) {
    
    function toggleModal(event) {
      event.preventDefault();
      contentModal.classList.toggle('ativo');
    }
    function cliqueForaModal(event) {
      if(event.target === this) {
        toggleModal(event);
      }
    }
  
    botaoAbrir.addEventListener('click', toggleModal);
    botaoFechar.addEventListener('click', toggleModal);
    contentModal.addEventListener('click', cliqueForaModal);
  }
}

