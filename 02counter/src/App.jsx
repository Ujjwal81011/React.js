import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addvalue = () => {
    
    if (count < 20 && count >= 0) {
      setCount(count + 1)
    }
  }

  const removevalue = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h2>Count is: {count}</h2>
        <button onClick = {addvalue}>
          Add value: {count}
        </button><br /><br />
        <button onClick = {removevalue}>
          Remove Value: {count}
          </button><br /><br />
          <button onClick={reset}>Reset</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
