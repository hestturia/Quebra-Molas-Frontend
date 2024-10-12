import styled from 'styled-components';

const BotaoStyle = styled.button`
    background-color: #faed32;

    font-family: 'Roboto';
    font-weight: 500;
    font-size: 26px;

    width: 300px;
    height: 45px;

    border-radius: 10px;
    border: none;
`

const Botao = ({texto}) => {
    return(
        <BotaoStyle type='submit'>
            {texto}
        </BotaoStyle>
    )
}

export default Botao;