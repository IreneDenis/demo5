import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import Product from './components/Product'
import Login from './components/Login'

const App=()=> {
  return (
    <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="Homepage" element={<Homepage/>}></Route>
        <Route path="/Product/:id" element={<Product/>}></Route>
    </Routes>
  )
}

export default App