import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Procted from './components/Procted'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to='/login'/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route element ={<Procted/>}>
        <Route path='/dashboard' element={<Dashboard/>}></Route>

      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
