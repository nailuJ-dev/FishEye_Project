// INTERACTING WITH MODAL WHEN CLICKING ON CONTACT ME BUTTON

export default class Modal {
    // Events when clicking
    modal(datas) {
        const modalButton = document.getElementById('photographer-contact'); // add this ID in the photagrapher page builder
        const closeButton = document.getElementsByClassName('close-form-icon'); // select the cross icon

        if (modalButton) {
            modalButton.addEventListener('click', this.launchModal);
            this.formPhotographerName(datas);
        }
        if (closeButton) {
            closeButton[0].addEventListener('click', this.closeModal);
        }
    };

    // Launch Modal
    openModal() {
        const modalBg = document.getElementById('dialog-contact-form');
        modalBg.style.display = 'block';  // stay alert on the css name for css file
    }

    // Close Modal
    closeModal() {
        const modalBg = document.getElementById('dialog-contact-form');
        modalBg.style.display = 'none';
    };

    // Add photographer names in form
    formPhotographerName(datas) {
        let id = window.location.search.split('id=')[1];
        let photographers = !id ? datas : datas.filter(photographer => photographer.id === id);
        let photographerName = document.getElementById('photographer-name-for-form');
        let photographerNameTemplate = `${photographers[0].name}`;
        photographerName.innerHTML = photographerNameTemplate;
    };
};