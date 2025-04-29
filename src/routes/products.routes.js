const express = require('express');
const router = express.Router();
const { obtainProducts, createProduct, getProductById } = require('../controllers/products.controller');

// GET /api/productos
router.get('/', obtainProducts);

// POST /api/productos
router.post('/', createProduct);

// GET /api/productos/:id
router.get('/:id', getProductById);

module.exports = router;