// INTERACTING WITH MODAL WHEN CLICKING ON CONTACT ME BUTTON

// DOM Elements
const modalBg = document.querySelector('.dialog-contact-form')
const modal = document.querySelectorAll('.photographer-page_contact_button')
const spanCross = document.querySelectorAll('.close-form-icon')[0]

modal.forEach((btn) => btn.addEventListener('click', function (openModal) {
    modalBg.style.display = 'block';
}));

spanCross.addEventListener('click', function (closeModal) {
    modalBg.style.display = 'none';
});

window.onclick = function () {
    if (event.target == modal) {
        modal.style.display = 'none';
    };
};

document.addEventListener('keydown', function(el) {
    let keyCode = el.key;
    if (keyCode === 'Escape') {
        modal.style.display = 'none';
    };
});