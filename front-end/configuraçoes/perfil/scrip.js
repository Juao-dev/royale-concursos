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

//foto de perfil
const inputFoto = document.getElementById("inputFoto")
const fotoPerfil = document.getElementById("fotoPerfil")

inputFoto.addEventListener("change", () => {
    const arquivo = inputFoto.files[0]
    if (arquivo) {
        const reader = new FileReader ()
        reader.onload = () => {
            fotoPerfil.src = reader.result
        }
        reader.readAsDataURL(arquivo)
    }

})
