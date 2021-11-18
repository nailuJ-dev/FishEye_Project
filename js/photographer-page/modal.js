// INTERACTING WITH MODAL WHEN CLICKING ON CONTACT ME BUTTON

// DOM Elements
const modalBg = document.getElementById('dialog-contact-form')
const modal = document.getElementById('contact-me-button')
const spanCross = document.getElementsByClassName('close-form-icon')[0]

modal.forEach((btn) => btn.addEventListener('click', openModal));

function openModal () {
    modalBg.style.display = 'block';
};

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