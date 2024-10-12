import styled from 'styled-components';
import Layout from '../../components/layout/layout';
import Formulario from '../../components/Formulario/Formulario';
import CampoInput from '../../components/CampoInput/CampoInput';

const ContainerCadastro = styled.main`
    display: flex;
    justify-content: space-between;`

const Cadastro = () => {
    return(
        <ContainerCadastro>

            <Layout/>

            <Formulario titulo='Crie sua conta gratuita' textoBotao='Crie sua conta'>

                <CampoInput label='Nome Completo' />
                <CampoInput label='Email'/>
                <CampoInput label='Senha'/>
            </Formulario>
        </ContainerCadastro>
    )
}

export default Cadastro;