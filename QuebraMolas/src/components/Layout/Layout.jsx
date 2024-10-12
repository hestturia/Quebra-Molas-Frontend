import styled from "styled-components";
import carro from '../../assets/carro.svg';
import amareloClaro from '../../assets/BlobsVector.png'
import amareloEscuro from '../../assets/BlobsVector (1).png';

const Container = styled.div`
    position: relative;
    margin-left: 15px;

    display: flex;
    align-items: center;
`

const Carro = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
`

const AmareloClaro = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

`
const AmareloEscuro = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
`

const Layout = () => {
    return(
        <Container>
            <AmareloClaro src={amareloClaro}/>
            <AmareloEscuro src={amareloEscuro}/>
            
            
            <Carro src={carro} alt=""/>
        </Container>
    )
}

export default Layout;