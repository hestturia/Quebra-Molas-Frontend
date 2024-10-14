import React from 'react';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';

function Login() {
  return (
    <>
      <Header loginPage={true} /> 
      <LoginForm />
      <Footer />
    </>
  );
}

export default Login;
