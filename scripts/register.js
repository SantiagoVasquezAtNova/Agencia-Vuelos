const passwordInput = document.getElementById('password');
const passwordEye = document.querySelectorAll('.password-eye')[0];

passwordEye.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordEye.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
        passwordInput.type = 'password';
        passwordEye.innerHTML = '<i class="fas fa-eye"></i>';
    }
});

const confirmPasswordInput = document.getElementById('continuepassword');
const confirmPasswordEye = document.querySelectorAll('.password-eye')[1];

confirmPasswordEye.addEventListener('click', function () {
    if (confirmPasswordInput.type === 'password') {
        confirmPasswordInput.type = 'text';
        confirmPasswordEye.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
        confirmPasswordInput.type = 'password';
        confirmPasswordEye.innerHTML = '<i class="fas fa-eye"></i>';
    }
});