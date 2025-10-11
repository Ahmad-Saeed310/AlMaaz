import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



import Nav from './nav.jsx'
import button from './components/button.jsx'
import Button from './components/button.jsx'
import Text from './components/text.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Button />
      <Button variant="light" className="ml-4 bg-black" text="Contact Us" onClick={() => alert('Contact Us clicked!')} />
        <Text />
        <Text children='here' />
    </>
  )
}

export default App
