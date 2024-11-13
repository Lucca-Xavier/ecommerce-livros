import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Card = ({ produto, atualizarProduto, removerProduto }) => {
  const [editarModal, setEditarModal] = useState(false);
  const [excluirModal, setExcluirModal] = useState(false);
  const [productId, setProductId] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    author: '',
    category: '',
    year: '',
    sinopse: '',
    price: '',
    quantity: '',
    image: ''
  });
  const [error, setError] = useState('');

  const userID = localStorage.getItem("userId");
  console.log("User ID:", userID);
  
  const navigate = useNavigate();


  // Função para abrir/fechar o modal de edição
  function handleEditarModal() {
    setEditarModal(!editarModal);
    if (!editarModal) {
      setFormData({
        name: produto.name,
        author: produto.author,
        category: produto.category,
        year: produto.year,
        sinopse: produto.sinopse || '',
        price: produto.price || '',
        quantity: produto.quantity || '',
        image: produto.image || ''
      });
      setProductId(produto.id); // Definir o ID do produto para editar
    }
  }

  // Função para abrir/fechar o modal de exclusão
  function handleExcluirModal() {
    setExcluirModal(!excluirModal);
    setProductId(produto.id); // Definindo o ID do produto ao abrir o modal
  }

  // Função para deletar o produto
  const handleDelete = async (e) => {
    e.preventDefault();
    e.stopPropagation(); // Evita a propagação para o card
    
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    try {
      const response = await axios.delete(`http://localhost:3000/products/${produto.id}`);
      console.log("Product deleted successfully:", response.data.message);
      alert("Product deleted successfully!");
      window.location.reload(); 
    } catch (error) {
      if (error.response && error.response.data) {
        console.error("Error deleting product:", error.response.data);
        alert(`Error: ${error.response.data.message || "Unable to delete product"}`);
      } else if (error.request) {
        console.error("Network error or server did not respond:", error.message);
        alert("Network error: Could not connect to server.");
      } else {
        console.error("Unexpected error:", error.message);
        alert("An unexpected error occurred.");
      }
    }
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.author || !formData.category || !formData.year || !formData.price || !formData.quantity) {
      setError("Preencha todos os campos obrigatórios.");
      return;
    }

    try {
      if (!productId) {
        console.log("ID do produto não está definido.");
        return;
      }

      const response = await fetch(`http://localhost:3000/products/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Produto atualizado com sucesso");
        const updatedProduct = await response.json();
        atualizarProduto(updatedProduct); 
        setEditarModal(false); 
        setError(''); 
      } else {
        const data = await response.json();
        console.log("Erro ao atualizar produto:", data.error);
      }
    } catch (error) {
      console.log("Erro ao fazer requisição:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleAddToCart = async () => {
    if (!userID) {
      alert("Usuário não está logado.");
      return;
    }
  
    if (!produto.id) {
      alert("ID do produto não encontrado.");
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:3000/carrinho/add", {
        userId: userID, 
        productId: produto.id, 
        quantity: 1,
      });
  
      if (response.data.success) {
        console.log(`Produto adicionado com sucesso ao carrinho.`);
        alert("Produto adicionado ao carrinho com sucesso!");
      } else {
        alert(`Erro: ${response.data.message || "Não foi possível adicionar ao carrinho."}`);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        console.error("Erro ao adicionar produto ao carrinho:", error.response.data);
        alert(`Erro: ${error.response.data.message || "Não foi possível adicionar ao carrinho."}`);
      } else if (error.request) {
        console.error("Erro de rede ou servidor não respondeu:", error.message);
        alert("Erro de rede: Não foi possível conectar ao servidor.");
      } else {
        console.error("Erro inesperado:", error.message);
        alert("Ocorreu um erro inesperado.");
      }
    }
  };
  


  return (
    <>
      <div className="p-4 border-2 border-emerald-100 rounded-lg">
        <div className="flex justify-end space-x-2">
          <button className="bg-gray-100 px-6 py-0.5 rounded-md" onClick={handleEditarModal}>Editar</button>
          <button className="bg-gray-100 px-6 py-0.5 rounded-md" onClick={handleExcluirModal}>Excluir</button>
        </div>
        <p>{produto.name}</p>
        <p className="mt-4">Autor: {produto.author}</p>
        <p>Categoria: {produto.category}</p>
        <p>Ano de Publicação: {produto.year}</p>

        <button onClick={handleAddToCart} className="bg-emerald-50 text-emerald-900 w-full mt-4 py-2 border border-gray-200 rounded-md">Adicionar ao carrinho</button>
      </div>

      {editarModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-4 w-1/2">
            <h2 className="text-lg font-bold mb-4">Editar Produto</h2>
            <form onSubmit={handleUpdateProduct}>
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <label className="block mb-4">
                <span className="block text-gray-700 text-sm font-bold mb-2">Nome do Produto:</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="block w-full p-2 border border-gray-300 rounded-lg"
                />
              </label>
              <label className="block mb-4">
                <span className="block text-gray-700 text-sm font-bold mb-2">Autor:</span>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  className="block w-full p-2 border border-gray-300 rounded-lg"
                />
              </label>
              <label className="block mb-4">
                <span className="block text-gray-700 text-sm font-bold mb-2">Categoria:</span>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="block w-full p-2 border border-gray-300 rounded-lg"
                />
              </label>
              <label className="block mb-4">
                <span className="block text-gray-700 text-sm font-bold mb-2">Ano de Publicação:</span>
                <input
                  type="text"
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  className="block w-full p-2 border border-gray-300 rounded-lg"
                />
              </label>

              <label className="block mb-4">
                <span className="block text-gray-700 text-sm font-bold mb-2">Sinopse:</span>
                <input
                  type="text"
                  name="sinopse"
                  value={formData.sinopse}
                  onChange={handleInputChange}
                  className="block w-full p-2 border border-gray-300 rounded-lg"
                />
              </label>

              <label className="block mb-4">
                <span className="block text-gray-700 text-sm font-bold mb-2">Preço:</span>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="block w-full p-2 border border-gray-300 rounded-lg"
                />
              </label>

              <label className="block mb-4">
                <span className="block text-gray-700 text-sm font-bold mb-2">Quantidade em Estoque:</span>
                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  className="block w-full p-2 border border-gray-300 rounded-lg"
                />
              </label>

              <label className="block mb-4">
                <span className="block text-gray-700 text-sm font-bold mb-2">Imagem:</span>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  className="block w-full p-2 border border-gray-300 rounded-lg"
                />
              </label>

              <button type="submit" className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-lg">
                Salvar
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg"
                onClick={handleEditarModal}
              >
                Fechar
              </button>
            </form>
          </div>
        </div>
      )}

      {excluirModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-4 w-1/2">
            <h2 className="text-lg font-bold mb-4">Excluir Produto</h2>
            <p>Tem certeza que deseja excluir o produto?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleDelete}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
              >
                Excluir
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg"
                onClick={handleExcluirModal}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
