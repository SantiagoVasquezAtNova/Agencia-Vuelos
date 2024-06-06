function updatePasswordStrengthBar(newPassword) {
    const passwordStrengthBar = document.getElementById('password-strength-bar');
    const passwordStrengthMessage = document.getElementById('password-strength-message');

    let strength = 0;

    if (newPassword.length >= 8) {
        strength += 1;
    }

    if (newPassword.match(/[a-z]/)) {
        strength += 1;
    }

    if (newPassword.match(/[A-Z]/)) {
        strength += 1;
    }

    if (newPassword.match(/[0-9]/)) {
        strength += 1;
    }

    if (newPassword.match(/[!@#$%^&*(),.?":{}|<>]/)) {
        strength += 1;
    }

    passwordStrengthBar.style.width = `${strength * 20}%`;

    if (strength === 0) {
        passwordStrengthBar.style.backgroundColor = '#ff0000';
        passwordStrengthMessage.textContent = 'La contraseña está vacía';
    } else if (strength === 1) {
        passwordStrengthBar.style.backgroundColor = '#B33635';
        passwordStrengthMessage.textContent = 'La contraseña es débil';
    } else if (strength === 2) {
        passwordStrengthBar.style.backgroundColor = '#ffffe0';
        passwordStrengthMessage.textContent = 'La contraseña es débil, utilice al menos una mayúscula';
    } else if (strength === 3) {
        passwordStrengthBar.style.backgroundColor = '#9acd32';
        passwordStrengthMessage.textContent = 'La contraseña es buena';
    } else if (strength === 4) {
        passwordStrengthBar.style.backgroundColor = '#008000';
        passwordStrengthMessage.textContent = 'La contraseña es muy buena';
    }
}

function generateRandomPassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}|:<>?";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

function generateAndSetRandomPassword() {
    const newPassword = generateRandomPassword(9);
    const newPasswordInput = document.getElementById('newpassword');
    newPasswordInput.value = newPassword;
    updatePasswordStrengthBar(newPassword);
}

const newPasswordInput = document.getElementById('newpassword');
const passwordEyes = document.querySelectorAll('#password-eye');
const passwordRandom = document.querySelector('.password-random');

newPasswordInput.addEventListener('input', () => {
    updatePasswordStrengthBar(newPasswordInput.value); 
});

passwordEyes.forEach(eye => {
    eye.addEventListener('click', () => {
        const passwordInput = eye.previousElementSibling;
        passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
        eye.innerHTML = passwordInput.type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
    });
});

passwordRandom.addEventListener('click', () => {
    generateAndSetRandomPassword();
});
