//mostrar senha
const eyeIcon = document.querySelector('.eye-icon')
const senhaInput = document.getElementById('senha')

eyeIcon.addEventListener('click', () => {
    const type = senhaInput.type === 'password' ? 'text' : 'password';
    senhaInput.type = type;
    eyeIcon.classList.toggle('fa-eye-slash');
});