// simulate a database with an array of products
let products = [
  { id: 1, name: 'Empanada', price: 2500, stock: 10 },
  { id: 2, name: 'Café', price: 1500, stock: 20 },
  { id: 3, name: 'Jugo de Naranja', price: 3000, stock: 15 }
];

// Endpoint to obtain all products
const obtainProducts = (req, res) => {
  res.json(products);
};

// Endpoint to create a new product  
const createProduct = (req, res) => {
  const newProduct = { id: products.length + 1, ...req.body }; // Asign a automatic ID
  if (!newProduct.name || !newProduct.price || !newProduct.stock) {
    return res.status(400).json({ message: 'Faltan datos del producto' });
  }
  products.push(newProduct);
  console.log('Nuevo producto agregado:', newProduct);
  res.status(201).json({ message: 'Producto creado exitosamente', product: newProduct });
};

// Endpoint to obtain a product by ID
const getProductById = (req, res) => {
  const productId = parseInt(req.params.id); // Obtain id and convert to number
  if (isNaN(productId)) { // Check if id is a number
    return res.status(400).json({ message: 'ID inválido' });
  }
  const product = products.find(p => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
};

module.exports = { obtainProducts, createProduct, getProductById };