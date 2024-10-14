import styled from "styled-components";
import logo from '../../assets/logo.jpg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebase.js'; 

const ContainerHeader = styled.header`
  background-color: #fffbfb;
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  padding: 0px 80px;
`;

const ContainerImg = styled.div`
  img {
    display: flex;
    border-radius: 20px;
    height: 35px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 50px;
  background-color: #f5e1a4;
  border-radius: 20px;
  padding: 10px 20px;

  ul {
    display: flex;
    gap: 10px;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
    background-color: #FFC501;
    border-radius: 30px;
    padding: 10px 20px;

    a {
      text-decoration: none;
      color: black;
    }

    &:hover {
      background-color: #ffa500;
    }
  }
`;

const Button = styled(Link)`
  background-color: #FFC501;
  color: black;
  padding: 10px 20px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  text-align: center;

  &:hover {
    background-color: #ffa500;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;

  p {
    margin-right: 20px;
    color: #333;
  }

  a {
    background-color: #FFC501;
    padding: 10px 15px;
    border-radius: 30px;
    text-decoration: none;
    color: black;

    &:hover {
      background-color: #ffa500;
    }
  }
`;

const Header = ({ loginPage }) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName || user.email); 
      } else {
        setUserName('');
      }
    });

    return () => unsubscribe(); 
  }, []);

  return (
    <ContainerHeader>
      <ContainerImg>
        <img src={logo} alt="Logo" />
      </ContainerImg>

      {!loginPage ? (
        <>
          <Nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/filter">Filtrar</Link></li>
              <li><Link to="/about">Sobre nós</Link></li>
            </ul>
          </Nav>
          <ProfileSection>
            <p>{userName ? `Olá, ${userName}` : "Visitante"}</p>
            <Link to="/login">Sair</Link> 
          </ProfileSection>
        </>
      ) : (
        <Nav>
          <Button to="/login">Login</Button>
          <Button to="/cadastro">Cadastre-se</Button>
        </Nav>
      )}
    </ContainerHeader>
  );
};

export default Header;
