import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const AdminHome = () => {
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

      <div className="flex justify-end mx-8 my-8">
        <Link to='/addproduct'
          
          className="px-8 py-1 rounded-md bg-emerald-100 hover:bg-emerald-200 duration-300 text-emerald-900"
        >
          Adicionar Produto
        </Link>
      </div>

      <div className="grid grid-cols-4 mx-12 mt-20">
        {produtos.map((produto) => (
          <Card key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
};

export default AdminHome;
