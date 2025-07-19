
import Home from './pages/home/index'
import Subjects from './pages/subjects/index'
import Header from './components/header/Index'
import NavBar from './components/navbar/Index'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/materias" element={<Subjects/>}/>
        <Route path="/emprendimientos" element={<Home/>}/>
        <Route path="/libros" element={<Home/>}/>
        <Route path="/perfil" element={<Home/>}/>
        <Route path="/ajustes" element={<Home/>}/>
        <Route path="/cerrar-sesion" element={<Home/>}/>
        <Route path="/inicio" element={<Home/>}/>
        <Route path="/login" element={<Home/>}/>
        <Route path="/register" element={<Home/>}/>
        <Route path="/forgot-password" element={<Home/>}/>
        <Route path="/reset-password" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
