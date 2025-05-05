const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Simulated database of users (for demonstration purposes only)
const users = [
  {
    id: 1,
    email: '111111',
    password: '$2b$10$chGx6gH4leoF4.0E/sZhYeCOr/4dZyMQ0VTUtvYQEW1BVL2EFqoVi', // "123456"
    rol: 'cliente'
  },
  {
    id: 2,
    email: '222222',
    password: '$2b$10$10uBj52FjZmPoNfd/GO1H.nDN/p63ZirplfSN4M5uvSaD9M1wLJ8W', // "78910"
    rol: 'pos'
  }
];

// Login controller function
const login = async (req, res) => {
  const { email, password } = req.body;

  // Validate request body
  if (!email || !password) {
    return res.status(400).json({ error: 'Usuario y contraseña son requeridos' });
  } 
  const user = users.find(u => u.email === email);
  if (!user) return res.status(401).json({ error: 'Usuario no encontrado' });
  
  // Compare the password with the hashed password in the database
  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ error: 'Contraseña incorrecta' });

  // Generate JWT token
  // The payload can include user information such as id, role, etc.
  const payload = { id: user.id, rol: user.rol, email: user.email };
  const token = jwt.sign({ id: user.id, role: user.rol }, 'secret_key', { expiresIn: '1h' });

  res.json({ token, rol: user.rol });
};

module.exports = { login };
