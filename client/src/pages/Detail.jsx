import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
  const { id } = useParams();  
  const [produto, setProduto] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/products/${id}`);
        setProduto(response.data); 
      } catch (error) {
        console.error('Erro ao buscar o produto:', error);
        setError('Erro ao carregar as informações do produto.');
      }
    };

    fetchProduto();
  }, [id]); 

  if (!produto) {
    return (
      <div className="flex justify-center items-center h-screen">
        {error ? <p>{error}</p> : <p>Carregando...</p>}
      </div>
    );
  }


  return (
    <div className='flex justify-center gap-32 mx-80 h-screen items-center'>
      <img className='h-80' src={produto.image} alt={produto.name} />

      <div className='space-y-2'>
        <h1 className='text-2xl font-semibold pb-8'>{produto.name}</h1>
        <span>Tipo: {produto.category}</span>
        <p>Preço: R$ {produto.price}</p>
        <p>Quantidade: {produto.qntEstoque}</p>
        <p>Autor: {produto.author}</p>
        <p>Ano de Publicação: {produto.year}</p>
        <p className='py-2 border border-gray-200 rounded px-2'>Sinopse: {produto.sinopse}</p>
      </div>
    </div>
  );
};

export default Detail;
