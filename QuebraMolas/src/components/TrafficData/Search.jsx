import React, { useState } from 'react';
import styled from 'styled-components';
import TrafficDataByState from './TrafficDataByState';
import TrafficDataByMunicipio from './TrafficDataByMunicipio';


const Container = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Input = styled.input`
  background-color: #D9D9D9;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #FAED32;
  color: black;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #FFC501;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const AccidentSearch = () => {
  const [input, setInput] = useState(''); 
  const [searchUf, setSearchUf] = useState(''); 
  const [searchMunicipio, setSearchMunicipio] = useState(''); 

  const handleSearchByUf = () => {
    if (input) {
      setSearchUf(input.toUpperCase()); 
      setSearchMunicipio(''); 
    }
  };

  const handleSearchByMunicipio = () => {
    if (input) {
      setSearchMunicipio(input); 
      setSearchUf(''); 
    }
  };

  return (
    <Container>
      <h1>Buscador de Acidentes de Trânsito</h1>
      <Input
        type="text"
        placeholder="Digite o estado (UF) ou município"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <ButtonContainer>
        <Button onClick={handleSearchByUf}>Buscar por UF</Button>
        <Button onClick={handleSearchByMunicipio}>Buscar por Município</Button>
      </ButtonContainer>
      {searchUf && <TrafficDataByState uf={searchUf} />}
      {searchMunicipio && <TrafficDataByMunicipio municipio={searchMunicipio} />}
    </Container>
  );
};

export default AccidentSearch;
