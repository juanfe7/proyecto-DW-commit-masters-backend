const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const users = [
  {
    id: 1,
    email: 'cliente@uni.com',
    password: '$2b$10$chGx6gH4leoF4.0E/sZhYeCOr/4dZyMQ0VTUtvYQEW1BVL2EFqoVi', // "123456"
    rol: 'cliente'
  },
  {
    id: 2,
    email: 'pos@uni.com',
    password: '$2b$10$MvQ9sHQx59UbQHi8gRM3l.qas5LG54Ul65Zzv6VrFOPnsIRZ4rErK', // "654321"
    rol: 'pos'
  }
];

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);
  if (!user) return res.status(401).json({ error: 'Usuario no encontrado' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ error: 'Contraseña incorrecta' });

  const payload = { id: user.id, rol: user.rol, email: user.email };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ token, rol: user.rol });
};

module.exports = { login };
