import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Orders = () => {
  const userId = localStorage.getItem("userId");
  const [orders, setOrders] = useState([]);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    
    const fetchOrders = async () => {
      try {
        const response = await fetch(`http://localhost:3000/orders/user/${userId}`);
        const data = await response.json();

        if (response.ok) {
          setOrders(data); 
        } else {
          console.error('Erro ao buscar pedidos:', data.message);
        }
      } catch (error) {
        console.error('Erro de rede:', error);
      }
    };

    fetchOrders();
  }, [userId]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products/");
        const data = await response.json();
        setProdutos(data);
      } catch (error) {
        console.error("Erro ao buscar produtos", error);
      }
    };

    getProducts();
  }, []);

  const getProductName = (productId) => {
    const product = produtos.find((produto) => produto.id === productId);
    return product ? product.name : "Produto desconhecido";
  };

  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Meus Pedidos</h1>
        {orders.length === 0 ? (
          <p className="text-gray-500">Você ainda não fez nenhum pedido.</p>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="border rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">Pedido #{order.id}</h2>
                    <p className="text-sm text-gray-500">
                      Data: {new Date(order.createdAt).toLocaleDateString()} | Total: ${order.totalprice.toFixed(2)}
                    </p>
                  </div>
                
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-700">Produtos:</p>
                  <ul className="list-disc ml-5 text-sm text-gray-600">
                    {order.products.map((produto, index) => (
                      <li key={index}>
                        {getProductName(produto.productId)} - {produto.quantity}x
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
