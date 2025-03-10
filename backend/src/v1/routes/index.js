const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');

// Rotas de usuários
router.use('/users', userRoutes);

// Outras rotas podem ser adicionadas aqui

module.exports = router;