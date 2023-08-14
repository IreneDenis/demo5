/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Homepage from './components/Homepage.jsx'
import Customdiv from './components/Customdiv'
import Product from './components/Product'
import { Custmdiv } from './components/Custmdiv'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Login from './components/Login'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    
  </React.StrictMode>,
)
