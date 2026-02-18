// CADASTRO, AUTENTICACAO

//validar o formulario tanto email como senha
function validarFormulario(){
    const email = document.getElementById("email").value
    const erroemail = document.getElementById("erro-email")
    const senha = document.getElementById("senha").value
    const errosenha = document.getElementById("erro-senha")
    const cpf = document.getElementById("cpf").value
    const nome = document.getElementById("nome").value

    //e uma expressao que serve para verificar textos, neste caso esta regex e para validar emails
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 

    if(!regex.test(email)) {
        erro.innerText = "Email Valido"
        return false
    }

    erroemail.innerText = "" // serve para apagar a mensagem de erro depois de estar certo

    if(senha.legth < 8) {
        errosenha.innerText = "A senha deve conter no minimo 8 caracteres"
        return false
    }

    errosenha.innerText = ""
    return true
}