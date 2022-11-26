import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Home from './pages/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Home />
    </div>
  )
}

export default App
