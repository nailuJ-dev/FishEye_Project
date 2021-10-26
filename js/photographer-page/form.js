// FUNCTION ABOUT CONTACT FORM
async function displayModal() {
    const modal = document.getElementById('dialog-contact-form');
    const buttonContact = document.querySelector('.photographer-page__profile__contact__button');
    const closeCross = document.getElementsByClassName('close-form-icon')[0];
    const firstname = document.getElementById('firstname');
    const lastname = document.getElementById('lastname');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const buttonSubmit = document.getElementById('submit-button-form');

    buttonContact.onclick = function () {
        modal.style.display = 'block';
    };

    closeCross.onclick = function () {
        modal.style.display = 'none';
    };

    window.onclick = function (event) {
        if (event.target != modal) {
            modal.style.display = 'none';
        };
    };

    document.addEventListener('keydown', function(e) {
        let keypadTouch = e.key;
        if (keypadTouch === 'Escape') {
            modal.style.display = 'none';
        };
    });

    if (buttonSubmit) {
        buttonSubmit.addEventListener('click', function (event) {
            event.preventDefault();
            console.log(`${firstname.value} ${lastname.value} (email : ${email.value} ) vous a envoyé le message suivant : ${message.value}`);
            modal.style.display = 'none';
        });
    };
};