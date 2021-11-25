// INTERACTING WITH MODAL WHEN CLICKING ON CONTACT ME BUTTON

export default function modalCreationAndOpening () {
    const modalBg = document.querySelector('.dialog-contact-form')
    const modal = document.getElementById('contact-me-button')
    const spanCross = document.querySelectorAll('.close-form-icon')[0]
    
    modal.addEventListener('click', function (openModal) {
        modalBg.style.display = 'block';
        document.addEventListener('keydown', function(el) {
            let keyCode = el.key;
            if (keyCode === 'Escape') {
                modalBg.style.display = 'none';
            };
        });
    });

    spanCross.addEventListener('click', function (closeModal) {
        modalBg.style.display = 'none';
    });

   /* window.onclick = function (event) {
        if (event.target == modal) {
            modalBg.style.display = 'none';
        };
    };*/
}
// DOM Elements
