const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});

// Rutas base
app.get('/login', (req, res) => res.send('Ruta Login'));
app.get('/cliente', (req, res) => res.send('Ruta Cliente'));
app.get('/pos', (req, res) => res.send('Ruta POS'));
app.get('/403', (req, res) => res.send('Acceso prohibido'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
