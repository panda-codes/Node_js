const generatePassword = require('generate-password');

function generateRandomPassword() {
    const password = generatePassword.generate({
        length: 8,
        numbers: true
    });
    console.log("Generated password:", password);
}

generateRandomPassword();