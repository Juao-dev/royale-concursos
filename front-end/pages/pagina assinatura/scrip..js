// COMANDO PARA MENU LATERAL
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

