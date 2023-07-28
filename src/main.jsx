import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from './SignUp';
import Login from './Login';
import './index.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <Routes>
      <Route path = "/" element = {<SignUp />} />
      <Route path ="/login" element = {<Login />} />
     </Routes>
  </BrowserRouter>
)
