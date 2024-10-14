import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  background-color: #808080; /* Fundo cinza */
  color: #fff; /* Texto branco */
  padding: 3px 0px;
  display: ${props => (props.visible ? 'block' : 'none')};
`;

function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <FooterContainer visible={visible}>
      <p>Quebra-Molas © 2024 - Todos os direitos reservados</p>
    </FooterContainer>
  );
}

export default Footer;