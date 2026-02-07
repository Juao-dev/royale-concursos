# Comandos para principal header do site

## HTLM

    <header>
        <button class="botao-menu">
            <i class="fa-solid fa-bars"></i>
        </button>

        <nav class="menu-lateral">

            <div class="perfil">
                <img src="./imgs/lebron bb.jpg" alt="logo-usuario">
                <p id="nome-usuario">Lebron BB</p>
            </div>
            

            <ul>
                <li class="nomes-categorias">Sistema</li>
                <li class="header-list"><a href="../configuraçoes/perfil/configperfil.html"><i class="fa-solid fa-gears"></i>Configuracoes</a></li>
                <li class="header-list"><a href="../pagina sobre/index.html"><i class="fa-solid fa-circle-exclamation"></i>Sobre</a></li>
                
                <li class="nomes-categorias">Salvos</li>
                <li class="header-list"><a href="#"><i class="fa-solid fa-book-open"></i>Minhas Provas</a></li>
                

            </ul>
        </nav>

        <p id="nome">royale concursos</p>
    </header>

## CSS

header {
    background-color: #000;
    color: white;
    padding: 15px 40px;
    border-bottom: 1px solid #333;
    display: flex;
    align-items: center;
    justify-content: center;
 
}

#nome{
    font-family: "Jersey 25", sans-serif;
    font-size: 40px;
    padding-bottom: 25px;
    padding-top: 15px;
    
}