import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Homepage from './pages/homepage';
import QuotesPage from './pages/quotespage';
import ProductPage from './pages/productpage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout />
        <Routes>
          <Route index element={<Homepage />} />
          <Route exact key="quotes" path="quotes" element={<QuotesPage />} />
          <Route key="product" path="product/:id" element={<ProductPage />} />
        </Routes>

      </div>
    </BrowserRouter>
  )
}

const Layout = () => {
  return (
    <nav>
      <ul>
        <li> <span>Seuss Treaury</span></li>
        <li> <Link to='/'>Books</Link></li>
        <li> <Link to='/quotes'>Quotes</Link></li>
      </ul>
      <p className='hero-text'>Seuss Treaury</p>
    </nav>
  )
}

export default App
