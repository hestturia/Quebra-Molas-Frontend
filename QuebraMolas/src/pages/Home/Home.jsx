import React from 'react';
import styled from 'styled-components';
import bannerImage from '../../assets/banner.jpg';
import Card from '../../components/Card/Card.jsx';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BannerContainer = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
`;

const BannerImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-bottom: 5px solid #ffc501;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  padding: 20px;
`;

const SafetyQuote = styled.p`
  font-size: 2rem;
  text-align: center;
  margin: 10px 0;
  color: #333;
`;

function Home() {
  return (
    <>
    <Header />
    <HomeContainer>
      <BannerContainer>
        <BannerImage src={bannerImage} alt='Banner' />
      </BannerContainer>
      <SafetyQuote>No trânsito, a segurança vem em primeiro</SafetyQuote>
      <CardsContainer>
        <Card
          title='Você sabia?'
          content='Devido ao grande fluxo de veículos e pedestres, as cidades registram um número maior de colisões e atropelamentos. Ficar atento em cruzamentos e respeitar limites de velocidade são essenciais para a segurança urbana.'
        />
        <Card
          title='Você sabia?'
          content='Estudos mostram que a maioria dos acidentes ocorre devido a falhas humanas, como desatenção e excesso de velocidade. Pequenas mudanças no comportamento ao volante fazem uma grande diferença'
        />
        <Card title='Histórico' content='Em 2024, a segurança no trânsito ganhou ainda mais destaque em relação a 2023, com avanços tecnológicos e novas políticas de mobilidade urbana. A implementação de sensores de tráfego, câmeras inteligentes e sistemas de aviso para motoristas cresceu em grandes cidades ao redor do mundo, reduzindo o número de acidentes em áreas críticas.' />
      </CardsContainer>
      <Footer />
    </HomeContainer>
    </>
  );
}

export default Home;
