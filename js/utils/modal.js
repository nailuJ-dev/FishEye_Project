// INTERACTING WITH MODAL WHEN CLICKING ON CONTACT ME BUTTON

export default function modalCreationAndOpening () {
    const modalBg = document.querySelector('.dialog-contact-form')
    const modal = document.getElementById('contact-me-button')
    const scrollBody = document.querySelector('body')
    const spanCross = document.querySelectorAll('.close-form-icon')[0]
    
    modal.addEventListener('click', function (openModal) {
        modalBg.style.display = 'block';
        scrollBody.style.overflow = 'hidden'
        document.addEventListener('keydown', function(el) {
            let keyCode = el.key;
            if (keyCode === 'Escape') {
                modalBg.style.display = 'none';
                scrollBody.style.overflow = 'auto'
            };
        });
    });

    spanCross.addEventListener('click', function (closeModal) {
        modalBg.style.display = 'none';
        scrollBody.style.overflow = 'auto'
    });
};
