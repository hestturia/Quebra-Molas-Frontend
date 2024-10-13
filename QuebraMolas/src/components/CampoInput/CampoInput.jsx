import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
`;

const Label = styled.label`
    color: #7C838A;
`;

const Input = styled.input`
    background-color: #dfe3e8;
    width: 500px;
    height: 45px;
    border: none;
    border-radius: 20px;
    padding: 0 15px; // Adicionando um pouco de padding para melhor visualização
`;

const CampoInput = ({ label, type, value, onChange, placeholder }) => {
    return (
        <Container>
            <Label>{label}</Label>
            <Input 
                type={type} 
                value={value} 
                onChange={onChange} 
                placeholder={placeholder}
            />
        </Container>
    );
};

export default CampoInput;
