//menu lateral
const botao = document.querySelector('.botao-menu')
const menuLateral = document.querySelector('.menu-lateral')
const conteudo = document.querySelector('body')
const background = document.querySelector('.background')

botao.addEventListener('click', ()=> {
    menuLateral.classList.toggle('ativo')
    conteudo.classList.toggle('ativo')
    background.classList.toggle('ativo')
    botao.classList.toggle('ativo')
})

background.addEventListener('click', () => {
    menuLateral.classList.remove('ativo')
    conteudo.classList.remove('ativo')
    background.classList.remove('ativo')
    botao.classList.remove('ativo')                       
})

//ativar autenticacao de duas etapas
let trilho = document.getElementById('trilho')

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('ativado')
})

//mostrar senha
const eyeIcon = document.querySelector('.eye-icon')
const senhaInput = document.getElementById('senha')

eyeIcon.addEventListener('click', () => {
    const type = senhaInput.type === 'password' ? 'text' : 'password';
    senhaInput.type = type;
    eyeIcon.classList.toggle('fa-eye-slash');
});

//modal
const modal = document.getElementById('modal')
const openModal = document.getElementById('openModal')
const closeModal = document.getElementById('closeModal')

openModal.addEventListener('click', ()=>{
    modal.showModal()
    document.body.classList.add('modal-open')
})

closeModal.addEventListener('click', ()=>{
    modal.close()
    document.body.classList.remove('modal-open')
    
})