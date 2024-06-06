const passwordInput = document.getElementById('confirmpassword');
const passwordEye = document.querySelector('.password-eye');

passwordEye.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordEye.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
        passwordInput.type = 'password';
        passwordEye.innerHTML = '<i class="fas fa-eye"></i>';
    }
});