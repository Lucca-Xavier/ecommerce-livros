import React from 'react'

const Header = () => {
  return (
    <header className='flex mx-8 my-4 justify-between rounded-xl px-12 py-3 bg-emerald-600 text-white'>
        <ul className='flex justify-between'>
            <span className='flex gap-8'>
                <li>Home</li>
                <li>Carrinho</li>
                <li>Minhas Compras</li>
            </span>

          
        </ul>
        <button>Loggout</button>
    </header>
  )
}

export default Header
