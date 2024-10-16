import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const ITEMS_PER_PAGE = 15; 

const PaginationButton = styled.button`
  background-color: #FAED32;
  color: black;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  
  &:hover {
    background-color: #FFC501;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const TrafficDataByState = ({ uf }) => {
  const [accidents, setAccidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`https://quebra-molas-backend.onrender.com/traffic/uf/${uf}`);
        setAccidents(response.data);
      } catch (err) {
        setError('Erro ao buscar dados');
      } finally {
        setLoading(false);
      }
    };

    if (uf) {
      fetchData();
    }
  }, [uf]);

  if (loading) return <p>Carregando dados...</p>;
  if (error) return <p>{error}</p>;

  const aggregatedData = accidents.reduce((acc, accident) => {
    const date = accident.data;
    if (!acc[date]) {
      acc[date] = { data: date, feridos: 0, mortos: 0, veiculos: 0 };
    }
    acc[date].feridos += accident.feridos;
    acc[date].mortos += accident.mortos;
    acc[date].veiculos += accident.veiculos;
    return acc;
  }, {});

  const finalData = Object.values(aggregatedData); 

  const indexOfLastAccident = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstAccident = indexOfLastAccident - ITEMS_PER_PAGE;
  const currentAccidents = finalData.slice(indexOfFirstAccident, indexOfLastAccident);
  const totalPages = Math.ceil(finalData.length / ITEMS_PER_PAGE);

  return (
    <div>
      <h2>Gráfico de Acidentes no estado: {uf}</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={currentAccidents} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="data" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="feridos" fill="#8884d8" />
          <Bar dataKey="mortos" fill="#ffc658" />
          <Bar dataKey="veiculos" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>

      <ButtonContainer>
        {currentPage > 1 && (
          <PaginationButton onClick={() => setCurrentPage(currentPage - 1)}>
            Anterior
          </PaginationButton>
        )}
        {currentPage < totalPages && (
          <PaginationButton onClick={() => setCurrentPage(currentPage + 1)}>
            Próximo
          </PaginationButton>
        )}
      </ButtonContainer>
    </div>
  );
};

export default TrafficDataByState;
