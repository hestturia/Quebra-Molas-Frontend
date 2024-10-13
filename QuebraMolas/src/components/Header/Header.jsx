import styled from "styled-components"
import logo from '../../assets/logo.jpg'

const ContainerHeader = styled.header`
    display: flex;
    justify-content: space-evenly;

    padding: 72px 94px;
`

const ContainerImg = styled.div`

`

const Nav = styled.nav`
    background-color: #FFF3CC;
    width: 352px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
        display: flex;
        gap: 10px;
        padding: 0;
        margin: 0;
        list-style: none;
    }

    li {
        flex-grow: 1;
        padding: 10px 20px;
        border-radius: 15px;
        font-weight: bold;
        color: #333;
        cursor: pointer;
    }

    li:first-child {
        background-color: #FFC501; /* Fundo amarelo para o "Home" */
        color: #fff; /* Texto branco para contraste */
    }

    li:not(:first-child) {
        background-color: transparent; /* Transparente para os outros itens */
    }

    li:hover {
        background-color: #ffe58a; /* Fundo mais claro ao passar o mouse */
    }
`

const Header = () => {
    return(
        <ContainerHeader>
            <ContainerImg>
            <img src={logo} alt="" />
            </ContainerImg>

            <Nav>
                <ul>
                    <li>Home</li>
                    <li>Filtrar</li>
                    <li>Sobre nós</li>
                </ul>
            </Nav>

            <p>perfil</p>
        </ContainerHeader>
    )
}

export default Header;