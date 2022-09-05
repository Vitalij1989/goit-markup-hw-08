(() => {
    const refs = {
      openModalBtn: document.querySelector('.modal-open'),
      closeModalBtn: document.querySelector('.modal-close'),
      menu: document.querySelector('.mobile-menu'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.menu.classList.toggle('is-open');
    }
  })();
  