import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = ({ onSubmit }) => {
  const [product, setProduct] = useState({ name: '', price: '', inventory: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/products', product)
      .then(response => {
        onSubmit(response.data);
        setProduct({ name: '', price: '', inventory: '' });
      })
      .catch(error => console.error('Error adding product:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Product Name" required />
      <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" required />
      <input type="number" name="inventory" value={product.inventory} onChange={handleChange} placeholder="Inventory" required />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;