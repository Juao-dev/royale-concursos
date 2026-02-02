//animacao ao mostrar na tela

//pega todos os elementos da classe hidden no html
const elements = document.querySelectorAll('.hidden')

// observar a classe escolhida e dizer quando aparecer na tela 
const myObserver = new IntersectionObserver( (entries) => {
    entries.forEach((entry) => {
        //trocar para classe show se os itens aparecerem na tela
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
        //remove a classe se ela sumir da tela
        else(
            entry.target.classList.remove('show')
        )
    })
})

//pega todos os itens e faz o processo de observer
elements.forEach((element) => myObserver.observe(element))