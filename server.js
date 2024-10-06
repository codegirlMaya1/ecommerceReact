const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let products = [
  { id: 1, name: 'Product 1', description: 'Sample Description for Product 1', price: 10, quantity: 100 },
  { id: 2, name: 'Product 2', description: 'Sample Description for Product 2', price: 20, quantity: 200 },
  { id: 3, name: 'Product 3', description: 'Sample Description for Product 3', price: 30, quantity: 300 },
];

// Get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Add a new product
app.post('/api/products', (req, res) => {
  const newProduct = { ...req.body, id: Date.now() };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Delete a product
app.delete('/api/products/:id', (req, res) => {
  const { id } = req.params;
  products = products.filter(product => product.id !== parseInt(id));
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});