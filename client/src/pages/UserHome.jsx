import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";


const UserHome = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/produtos/");
        
        if (!response.ok) {
          throw new Error("Erro ao buscar produtos");
        }

        const data = await response.json();
        console.log("Dados recebidos da API:", data); 
        setProdutos(data);  
      } catch (error) {
        console.error("Erro ao buscar produtos", error);
        setError(error.message);  
      } finally {
        setLoading(false);  
      }
    };

    getProducts(); 
  }, []);

  if (loading) {
    return <div>Carregando produtos...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <div>
      <Header />
      <div className="grid grid-cols-4 mx-12 mt-20">
        {produtos.length === 0 ? (
          <p>Nenhum produto encontrado</p>  
        ) : (
          produtos.map((produto) => (
            <Card key={produto.id} produto={produto} />
          ))
        )}
      </div>
    </div>
  );
};

export default UserHome;
