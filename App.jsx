import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Admin from './Admin';
import Customer from './Customer';
import AllCustomers from './AllCustomers';
import Cart from './Cart';
import { CartProvider } from './CartContext';
import AllProducts from './AllProducts';
import './index.css';

const App = () => (
  <CartProvider>
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/all-customers" element={<AllCustomers />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/all-products" component={AllProducts} />
        </Routes>
      </div>
    </Router>
  </CartProvider>
);

export default App;