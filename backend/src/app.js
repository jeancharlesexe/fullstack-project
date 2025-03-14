// ======= MÓDULOS GERENCIADORES =======
const path = require('path');
const cors = require('cors');
require('dotenv').config()

// ========= EXPRESS SETUP ==============
const express = require('express');
const app = express();

//  ========= TESTANDO DB ==========
const mysqldb = require('./v1/config/mysql/database');

// ============ MIDDLEWARES =============
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'frontend', 'public')));
app.use(cors());
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000', // URL do seu frontend
    credentials: true
}));

// ========= ROTAS URL ==========
const v1Routes = require('./v1/routes');

app.use('/api/v1', v1Routes);

// Rota padrão
app.get('/', (req, res) => {
  res.json({
    message: 'API REST | Node.js & MySQL',
    versions: [
      { version: 'v1', url: '/api/v1' },
    ]
  });
});


// ========= ABRINDO SERVIDOR ==========
const HOST = process.env.SERVER_HOST;
const PORT = process.env.SERVER_PORT;
const ENVIRONMENT = process.env.SERVER_ENV;


try {
    app.listen(PORT, () => {
        console.log(`Preparando o ambiente \x1b[33m${ENVIRONMENT}\x1b[0m...`);
        console.log(`\x1b[32mServidor rodando em http://${HOST}:${PORT} \x1b[0m`);
    });
    
    // Em app.js
    app.get('/test', (req, res) => {
        res.json({ message: 'Teste bem-sucedido!' });
    });

    console.log(mysqldb.execute("SELECT * FROM users"));
} catch (e) {
    console.log(`\x1b[31mErro ao inicializar o servidor\x1b[0m\n${e}`);
}

