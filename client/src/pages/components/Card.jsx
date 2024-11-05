import React, { useState } from "react";

const Card = ({ produto }) => {
  const [editarModal, setEditarModal] = useState(false);
  const [excluirModal, setExcluirModal] = useState(false);

  function handleEditarModal() {
    setEditarModal(!editarModal);
  }

  function handleExcluirModal() {
    setExcluirModal(!excluirModal);
  }

  return (
    <>
      <div className="p-4 border-2 border-emerald-100 rounded-lg">
        <div className="flex justify-end space-x-4">
          <button onClick={handleEditarModal}>Editar</button>
          <button onClick={handleExcluirModal}>Excluir</button>
        </div>
        <p>{produto.name}</p>

        <p className="mt-4">autor</p>
        <p>categoria</p>
      </div>

      {editarModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-4 w-1/2">
            <h2 className="text-lg font-bold mb-4">Editar Produto</h2>
            <form>
              <label className="block mb-4">
                <span className="block text-gray-700 text-sm font-bold mb-2">
                  Nome do Produto:
                </span>
                <input
                  type="text"
                  className="block w-full p-2 border border-gray-300 rounded-lg"
                />
              </label>
              <label className="block mb-4">
                <span className="block text-gray-700 text-sm font-bold mb-2">
                  Autor:
                </span>
                <input
                  type="text"
                  className="block w-full p-2 border border-gray-300 rounded-lg"
                />
              </label>
              <label className="block mb-4">
                <span className="block text-gray-700 text-sm font-bold mb-2">
                  Categoria:
                </span>
                <input
                  type="text"
                  className="block w-full p-2 border border-gray-300 rounded-lg"
                />
              </label>
              <button className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-lg">
                Salvar
              </button>
              <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg" onClick={handleEditarModal}>Fechar</button>
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
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg">
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
