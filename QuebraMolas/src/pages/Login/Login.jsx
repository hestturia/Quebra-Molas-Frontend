import styled from 'styled-components';
import Layout from '../../components/layout/layout';
import Formulario from '../../components/Formulario/Formulario';
import CampoInput from '../../components/CampoInput/CampoInput';

const ContainerLogin = styled.main`
    display: flex;
    justify-content: space-between;
`

const Login = () => {
    return(
        <ContainerLogin>
            <Layout/>

            <Formulario titulo='Entre na sua conta' textoBotao='Entre'>

                <CampoInput label='Email' />
                <CampoInput label='Senha'/>
            </Formulario>
        </ContainerLogin>
    )
}

export default Login;