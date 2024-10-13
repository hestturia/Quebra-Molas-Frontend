import styled from "styled-components"
import logo from '../../assets/logo.jpg'

const ContainerHeader = styled.header`
    background-color: #fffbfb;
    display: flex;
    height: 80px;
    align-items: center;
    justify-content: space-between;
    padding: 0px 80px 0px 80px;
   

`

const ContainerImg = styled.div`
    

    img{
        display: flex;
        border-radius: 20px;

        height: 35px;
    }

`

const Nav = styled.nav`
    display: flex; 
    align-items: center; 
    height: 50px; 
    /* gap: 50px; */
    background-color: #f5e1a4;
    border-radius: 20px;
    padding: 10px 20px;
    text-align: center; 


    ul {
        display: flex;
        gap: 10px;
        padding: 0;
        margin: 0;
        list-style: none;
    }

    li {
        background-color: #FFC501;
        border-radius: 30px;
        width: 80px;
        padding: 10px 20px;
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