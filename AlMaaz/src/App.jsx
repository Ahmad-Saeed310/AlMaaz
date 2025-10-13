import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'




import Firstpage from './firstpage'
import Secondpage from './secondpage'

function App() {
  
  return (
    <div className='w-full h-screen bg-green-400'>
      <Firstpage/>
      <Secondpage/>
    </div>
  )
}

export default App
