import React from 'react';
import styled from 'styled-components';
import bannerImage from '../../assets/banner.jpg';
import Header from '../../components/Header/Header.jsx';
import AccidentSearch from '../../components/TrafficData/Search.jsx';
import Footer from '../../components/Footer/Footer.jsx';

const FilterContainer = styled.div`
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

const SafetyQuote = styled.p`
  font-size: 2rem;
  text-align: center;
  margin: 10px 0;
  color: #333;
`;

function Filter() {
  return (
    <>
    <Header />
    <FilterContainer>
      <BannerContainer>
        <BannerImage src={bannerImage} alt='Banner' />
      </BannerContainer>
      <SafetyQuote>No trânsito, a segurança vem em primeiro</SafetyQuote>
    </FilterContainer>
    <AccidentSearch />
    <Footer />
    </>
  );
}

export default Filter;
