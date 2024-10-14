import styled from 'styled-components';
import Layout from '../layout/layout.jsx';
import Formulario from '../Formulario/Formulario.jsx';
import CampoInput from '../CampoInput/CampoInput.jsx';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.js'; 
import { useNavigate } from 'react-router-dom'; 

const ContainerCadastro = styled.main`
    display: flex;
    justify-content: space-between;
`;

const CadastroForm = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const navigate = useNavigate(); 

    const handleCadastro = async (e) => {
        e.preventDefault(); 
        setErro(''); 
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
            const user = userCredential.user;

           
            await user.updateProfile({
                displayName: nome, 
            });

            console.log('Usuário registrado:', user);
            navigate('/'); 
        } catch (error) {
            setErro('Erro ao registrar. Tente novamente.');
            console.error('Erro no cadastro:', error);
        }
    };

    return (
        <ContainerCadastro>
            <Layout />

            <Formulario titulo="Crie sua conta gratuita" textoBotao="Crie sua conta" onSubmit={handleCadastro}>
                <CampoInput
                    label="Nome Completo"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <CampoInput
                    label="Email"
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <CampoInput
                    label="Senha"
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                {erro && <p style={{ color: 'red' }}>{erro}</p>}
            </Formulario>
        </ContainerCadastro>
    );
};

export default CadastroForm;
