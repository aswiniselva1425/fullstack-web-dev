import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clicker from './Components/Clicker'
import NameForm from './Components/NameForm'
import LoginForm from './Components/LoginForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<LoginForm/>
    </>
    
  )
}

export default App
