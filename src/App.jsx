import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <iframe style={{width: '100vw', height: '100vh', border: 'none'}} src="https://devcotizador.cebrokers.com.ar/embed/test_iframe/add4f481-62ab-4858-b541-6f6a0872a15f" frameBorder="0" allowFullScreen></iframe>
    </>
  )
}

export default App
