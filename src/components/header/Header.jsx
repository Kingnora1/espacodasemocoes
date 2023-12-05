import { HeaderContainer } from "./styles";

export default Header; function Header(){

return(
   <HeaderContainer>
    <div className="HeaderContainer">
        <dir className="ContainerCenter">
            <div className="logo">
                <h1 className="textLogo">E</h1>
                <h2 className="textLogoName">Espaço das Emoções</h2>
            </div>
            <div className="apoio">
                <h3 className="textApoio">NOS APOIE</h3>
                <a href="https://github.com/Kingnora1/espacodasemocoes/settings/access" target="_blank"><button class="apoioButton"> Apoio</button></a>
            </div>
        </dir>
        
        <a href="./MainContainer"><img src="https://www.imagensanimadas.com/data/media/111/seta-imagem-animada-0423.gif" border="0" alt="seta-imagem-animada-0423" /></a> 
    </div>
        
    </HeaderContainer>

)

}