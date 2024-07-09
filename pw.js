document.addEventListener('DOMContentLoaded', () => {
    const lengthInput = document.getElementById('length');
    const includeUppercaseCheckbox = document.getElementById('includeUppercase');
    const includeNumbersCheckbox = document.getElementById('includeNumbers');
    const includeSymbolsCheckbox = document.getElementById('includeSymbols');
    const excludeAmbiguousCheckbox = document.getElementById('excludeAmbiguous');
    const generatePasswordButton = document.getElementById('generatePasswordButton');
    const generatedPasswordTextarea = document.getElementById('generatedPassword');
    const copyPasswordButton = document.getElementById('copyPasswordButton');

    generatePasswordButton.addEventListener('click', () => {
        const length = parseInt(lengthInput.value);
        const uppercase = includeUppercaseCheckbox.checked;
        const numbers = includeNumbersCheckbox.checked;
        const symbols = includeSymbolsCheckbox.checked;
        const excludeAmbiguous = excludeAmbiguousCheckbox.checked;

        const password = generatePassword(length, uppercase, numbers, symbols, excludeAmbiguous);
        generatedPasswordTextarea.value = password;
    });

    copyPasswordButton.addEventListener('click', () => {
        generatedPasswordTextarea.select();
        document.execCommand('copy');
        alert('Password copied to clipboard!');
    });

    function generatePassword(length, uppercase, numbers, symbols, excludeAmbiguous) {
        let charset = 'abcdefghijklmnopqrstuvwxyz';
        if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (numbers) charset += '0123456789';
        if (symbols) charset += '!@#$%^&*()-_+=[]{}|;:,.<>?';

        if (excludeAmbiguous) {
            charset = charset.replace(/[il1Lo0O]/g, '');
        }

        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    }
});