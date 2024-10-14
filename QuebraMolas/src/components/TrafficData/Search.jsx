import React, { useState } from 'react';
import TrafficDataByState from './TrafficDataByState';
import TrafficDataByMunicipio from './TrafficDataByMunicipio';

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
    <div>
      <h1>Buscador de Acidentes de Trânsito</h1>
      <input
        type="text"
        placeholder="Digite o estado (UF) ou município"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div>
        <button onClick={handleSearchByUf}>Buscar por UF</button>
        <button onClick={handleSearchByMunicipio}>Buscar por Município</button>
      </div>
      {searchUf && <TrafficDataByState uf={searchUf} />}
      {searchMunicipio && <TrafficDataByMunicipio municipio={searchMunicipio} />}
    </div>
  );
};

export default AccidentSearch;