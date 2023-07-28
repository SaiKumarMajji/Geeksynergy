import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import SignUp from './SignUp';
import Login from './Login';
import MoviesList from './moviesList';
import './index.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <Routes>
      <Route path ="/" element = {<Login />} />
      <Route path = "/signup" element = {<SignUp />} />
      <Route path="/movies" element = {<MoviesList />} />
     </Routes>
  </BrowserRouter>
)
