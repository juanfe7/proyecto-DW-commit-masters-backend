const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const productsRoutes = require('./routes/products.routes');



dotenv.config(); // Charge the variables of the .env file

// Middlewares
app.use(cors());
app.use(express.json());

// Rice route
app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});

// Base routes
app.use('/api/products', productsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
