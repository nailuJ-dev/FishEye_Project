// check with css done and maybe replace data-error-visible by project 4 error message with span in html form

// rebuild this file with a clear css
console.log(document.getElementsByClassName('photographer-page_contact_button'))

    document.getElementsByClassName('photographer-page_contact_button').onclick = function formFields () {
        // DOM Elements
        const contactFormElement = document.getElementById('contact-form')
        const modal = document.querySelector('dialog-contact-form')
        const buttonContactMe = document.querySelector('.photographer-page_contact_button')
        const spanCross = document.getElementsByClassName('close-form-icon')[0]
        const firstname = document.getElementById('firstname')
        const lastname = document.getElementById('lastname')
        const email = document.getElementById('email')
        const message = document.getElementById('message')
        const buttonSubmit = document.getElementById('submit-button-form')

        modal.onclick = function () {
            modal.style.display = 'block';
        };

        spanCross.onclick = function () {
            modal.style.display = 'none';
        };

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

        // function to check string length
        function checkString (input, extra) {
            const regExName = /^[a-zA-Z '.-]*$/
            if (input.length >= extra && (regExName.test(input))) {
                return true
            }
            input.parentElement.setAttribute('data-error-visible', 'true')
            input.style.border = '2px solid #E54858'
            return false
        };

        // function to check email validity
        function checkEmail (input, extra) {
            if (input) {
                if (extra.test(input)) {
                    return true
                }
            }
            input.parentElement.setAttribute('data-error-visible', 'true')
            input.style.border = '2px solid #E54858'
            return false
        };

        // function to check age
        function checkMessage (input) {
            if (input.trim() !== '' || input.trim() != null) {
                return true
            }
            input.parentElement.setAttribute('data-error-visible', 'true')
            input.style.border = '2px solid #E54858'
            return false
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
        modal.addEventListener('submit', function (event) {
            event.preventDefault()
            const inputObject = [
                { input: document.getElementById('firstname').value, functionTest: checkString, extra: 2 },
                { input: document.getElementById('lastname').value, functionTest: checkString, extra: 2 },
                { input: document.getElementById('email').value, functionTest: checkEmail, extra: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ },
                { input: document.getElementById('message').value, functionTest: checkMessage }
            ]

            let functionCount = 0

            inputObject.forEach(function (items) {
                if (items.functionTest(items.input, items.extra)) {
                    functionCount++
                    if (functionCount === inputObject.length) {
                        formValidConsoleLog(firstname, lastname, email, message)
                        modal.reset()
                        modal.style.display = 'none'
                    };
                };
            });
        });
    };
