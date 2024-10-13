import styled from 'styled-components';
import Layout from '../../components/layout/layout';
import Formulario from '../../components/Formulario/Formulario';
import CampoInput from '../../components/CampoInput/CampoInput';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.js'; 

const ContainerLogin = styled.main`
    display: flex;
    justify-content: space-between;
`;

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, senha);
            const user = userCredential.user;
            console.log('Usuário logado:', user);
            // Redirecionar o usuário ou realizar outra ação após o login bem-sucedido
        } catch (error) {
            setErro('Erro ao fazer login. Verifique suas credenciais.');
            console.error('Erro de login:', error);
        }
    };

    return (
        <ContainerLogin>
            <Layout />

            <Formulario 
                titulo="Entre na sua conta" textoBotao="Entre" onSubmit={handleLogin}
                redirecionarTexto="Não tem uma conta? Cadastre-se"
            >
                <CampoInput
                    label="Email"
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
        </ContainerLogin>
    );
};

export default Login;