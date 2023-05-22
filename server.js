import express from 'express';
import router from './routes/routes.js';
import connection from './config/db.js';

// Configuração do Servidor Express
const server = express();
const port = 3000;

// Execução do Servidor
server.listen(port,console.log(`Servidor rodando na PORTA ${port}...`))

// Teste de Conexão com o Banco de Dados
try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

// Definição de Rotas
server.use(router);