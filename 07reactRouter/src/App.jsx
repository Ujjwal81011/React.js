import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-2xl bg-green-400 text-center m-3 px-1'>React Router</h1>
    </>
  )
}

export default App