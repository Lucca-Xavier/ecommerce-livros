import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";


const UserHome = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products/");
        const data = await response.json();
        console.log("Dados recebidos da API:", data);
        setProdutos(data);
      } catch (error) {
        console.error("Erro ao buscar produtos", error);
      }
    };

    getProducts();
  }, []);





  return (
    <div>
      <Header />
      <div className="grid grid-cols-4 mx-12 mt-20 gap-8">
        {produtos.map((produto) => (
          <Card key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
};

export default UserHome;
