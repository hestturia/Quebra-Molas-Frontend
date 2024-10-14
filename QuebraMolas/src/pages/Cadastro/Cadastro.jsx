import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import CadastroForm from '../../components/CadastroForm/CadastroForm.jsx';


function Cadastro() {
  return (
    <>
    <Header  loginPage={true} />
    <CadastroForm />
    <Footer />
    </>
  );
}

export default Cadastro;
