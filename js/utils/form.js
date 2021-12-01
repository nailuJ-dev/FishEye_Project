// check with css done and maybe replace data-error-visible by project 4 error message with span in html form

export default function formFields () {
        // DOM Elements
        const modalBgd = document.querySelector('.dialog-contact-form')
        const formElem = document.getElementById('contact-form')

        // function to check string length
        function checkString (input, error, extra) {
            const regExName = /^[a-zA-Z '.-]*$/
            if (input.length >= extra && (regExName.test(input))) {
                return true
            }
            error.classList.remove('hidden')
            return false
        };

        // function to check email validity
        function checkEmail (input, error, extra) {
            if (input) {
                if (extra.test(input)) {
                    return true
                }
            }
            error.classList.remove('hidden')
            return false
        };

        // function to check age
        function checkMessage (input, error) {
            if (input.trim() === '' || input.trim() == null) {
                error.classList.remove('hidden')
                return false
            }
            return true
        };

        // Show console message
        function formValidConsoleLog(firstname, lastname, email, message) {
            console.group('Message de contact');
            console.log('Prénom : ' + firstname.value);
            console.log('Nom : ' + lastname.value);
            console.log('Email de contact : ' + email.value);
            console.log('Message : ' + message.value);
        };

        // Events for submiting the form
        modalBgd.addEventListener('submit', function (event) {
            event.preventDefault();
            const inputObject = [
                { input: document.getElementById('firstname').value, error: document.querySelector('.firstnameError'), functionTest: checkString, extra: 2 },
                { input: document.getElementById('lastname').value, error: document.querySelector('.lastnameError'), functionTest: checkString, extra: 2 },
                { input: document.getElementById('email').value, error: document.querySelector('.emailError'), functionTest: checkEmail, extra: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ },
                { input: document.getElementById('message').value, error: document.querySelector('.messageError'), functionTest: checkMessage }
            ]

            let functionCount = 0

            inputObject.forEach(function (items) {
                if (items.functionTest(items.input, items.error, items.extra)) {
                    items.error.classList.add('hidden');
                    functionCount++;
                    if (functionCount === inputObject.length) {
                        formValidConsoleLog(firstname, lastname, email, message);
                        formElem.reset();
                        modalBgd.style.display = 'none';
                    };
                };
            });
        });
    };
