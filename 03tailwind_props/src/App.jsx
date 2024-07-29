import { useState } from 'react'
import './App.css'
import Pro from './Pro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1 >
      <Pro username ="chai aur code" button = "Visit Me"/>
      <Pro username = "mishra" button = "Click Me"/>
    </>
  )
}

export default App
