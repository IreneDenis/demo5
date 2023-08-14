/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import Product from './components/Product'
import Login from './components/Login'
import Cart from './components/Cart'

const App=()=> {
  return (
    <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="Homepage" element={<Homepage/>}></Route>
        <Route path="/Product/:id" element={<Product/>}></Route>
        <Route path="Cart" element={<Cart/>}></Route>
    </Routes>
  )
}

export default App