import React from 'react'

const FormProduct = () => {
  return (
    <div>
        <h2>Cadastrar Livro</h2>
      <form action="" className='mx-20'>
        <p>Nome do Livro </p>
        <input type="text" />

        <p>Autor</p>
        <input type="text" />

        <p>Categoria</p>
        <input type="text" />

        <p>Quantidade em estoque</p>
        <input type="text" />

        <p>Preço</p>
        <input type="text" />
      </form>
    </div>
  )
}

export default FormProduct
