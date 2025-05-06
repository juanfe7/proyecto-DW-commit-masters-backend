const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const productsRoutes = require('./routes/products.routes');
const loginRoutes = require('./routes/login.routes');


if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// Middleware
app.use(cors());
app.use(express.json());

// Rice route
app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});

// Routes
app.use('/api/products', productsRoutes);
app.use('/api/login', loginRoutes);

module.exports = app;

