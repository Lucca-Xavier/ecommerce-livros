import React from 'react'
import Header from './components/Header'
import Card from './components/Card'

const userHome = () => {
  return (
    <div>
      <Header/>
      <div className='grid grid-cols-4 mx-12 mt-20'>
        <Card />
      </div>
    </div>
  )
}

export default userHome
