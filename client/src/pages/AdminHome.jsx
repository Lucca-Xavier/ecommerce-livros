import React from 'react'
import Header from './components/Header'
import Card from './components/Card'
import { Link } from 'react-router-dom'

const AdminHome = () => {
  return (
    <div>
      <Header/>
      <h1>Você é um administrador</h1>

      <div className='mt-20 flex justify-end mx-12'>
        <Link to='/addproduct' className='px-8 py-2 bg-emerald-100 text-emerald-600 rounded-lg'>Cadastrar Livro</Link>
      </div>
      <div className='grid grid-cols-4 mx-12 mt-12'>
        <Card />
      </div>
    </div>
  )
}

export default AdminHome
