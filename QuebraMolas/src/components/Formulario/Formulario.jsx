import styled from 'styled-components';
import Botao from '../Botao/Botao';


const Titulo = styled.h1`
    margin-bottom: 50px;
`
const FormularioContainer = styled.form`
    width: 65%;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto 0;
`

const Formulario = ({titulo, children, textoBotao}) => {
    return(
        <FormularioContainer>
            <Titulo>{titulo}</Titulo>

            {children}

            <Botao texto={textoBotao}/>
        </FormularioContainer>
    )
}

export default Formulario;