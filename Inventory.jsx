import React from 'react';
import axios from 'axios';

const Inventory = ({ products, onDelete }) => {
  const deleteProduct = (id) => {
    axios.delete(`http://localhost:5000/api/products/${id}`)
      .then(() => onDelete(id))
      .catch(error => console.error('Error deleting product:', error));
  };

  return (
    <div>
      <h2>Inventory</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;