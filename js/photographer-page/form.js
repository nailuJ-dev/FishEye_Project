export default class ContactForm {
    formFields () {
        // DOM Elements
        const contactFormElement = document.getElementById('contact-form')
        let firstname = document.getElementById('firstname')
        let lastname = document.getElementById('lastname')
        let email = document.getElementById('email')
        let message = document.getElementById('message')

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
        contactFormElement.addEventListener('submit', function (event) {
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
                        contactFormElement.reset()
                    };
                };
            });
        });
    };
};
