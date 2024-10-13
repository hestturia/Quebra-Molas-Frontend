import React from 'react';
import styled from 'styled-components';
import bannerImage from '../../assets/banner.jpg';
import Card from '../../components/Card/Card.jsx';
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
    <HomeContainer>
      <BannerContainer>
        <BannerImage src={bannerImage} alt='Banner' />
      </BannerContainer>
      <SafetyQuote>No trânsito, a segurança vem em primeiro</SafetyQuote>
      <CardsContainer>
        <Card
          title='Você sabia?'
          content='Curiosidade sobre acidentes no trânsito'
        />
        <Card
          title='Você sabia?'
          content='Curiosidade sobre acidentes no trânsito'
        />
        <Card title='Histórico' content='' />
      </CardsContainer>
      <Footer />
    </HomeContainer>
  );
}

export default Home;
