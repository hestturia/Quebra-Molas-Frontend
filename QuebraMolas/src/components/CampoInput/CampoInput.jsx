import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Label = styled.label`
    color: #7C838A;
    
`

const Input = styled.input`
    background-color: #dfe3e8;
    width: 500px;
    height: 45px;

    border: none;
    border-radius: 20px;
`

const CampoInput = ({texto, type, placeholder}) => {
    return(
        <Container>
            <Label>{texto}</Label>
            <Input type={type} placeholder={placeholder}/>
        </Container>
    )
}

export default CampoInput;