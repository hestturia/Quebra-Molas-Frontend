import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #fff3cc;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  flex: 1;
  min-width: 250px;
  max-width: 300px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const TitleContainer = styled.div`
  background-color: #ffc501;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

const CardContent = styled.p`
  font-size: 1rem;
`;

function Card({ title, content }) {
  return (
    <CardContainer>
      <TitleContainer>
        <CardTitle>{title}</CardTitle>
      </TitleContainer>
      <CardContent>{content}</CardContent>
    </CardContainer>
  );
}

export default Card;
