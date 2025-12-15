import React from 'react';
import Backgrond from './Componets/Backgrond';
import Foregrond from './Componets/Foregrond';
const App = () => {
  return (
    <div className='relative w-full h-screen  bg-zinc-800'>
     <Backgrond />
     <Foregrond />
    </div>
  )
}

export default App