require('dotenv').config(); // acesso à variáveis de ambiente

// requisição das dependencias do MySQL ou SQL Server
const mysql = require('mysql2');

// instância para a conexão com o MySQL
const mySqlConfig = {
    host: process.env.MYSQL_DB_HOST, // servidor localhost
    user: process.env.MYSQL_DB_USER, // super usuário root
    password: process.env.MYSQL_DB_PASS, // senha do super usuário
    database: process.env.MYSQL_DB_NAME, // banco selecionado
}

console.log('Database configuration:');
console.log('Host:', process.env.MYSQL_DB_HOST);
console.log('User:', process.env.MYSQL_DB_USER);
console.log('Password:', process.env.MYSQL_DB_PASS ? '********' : 'not set');
console.log('Database:', process.env.MYSQL_DB_NAME);

// função que recebe um comando sql como parametro para ser executado
function execute(sqlCommand, params = []) {
 if (process.env.SERVER_ENV == "development") {
        return new Promise(function (resolve, reject) {
            var connection = mysql.createConnection(mySqlConfig);
            connection.connect();
            connection.query(sqlCommand, params, function (error, result) { // Passando os parâmetros aqui
                connection.end();
                if (error) {
                    reject(error);
                }
                console.log(result);
                resolve(result);
            });

            connection.on('error', function (error) {
                return (`\x1b[31m Some error happened MySQL (Workbench localhost):\n\x1b[0m ${error.sqlMessage}`);
            });
        });
    } else {
        return new Promise(function (resolve, reject) {
            console.log(`\x1b[31m\nSet the NODE_ENV environment variable to 'production' or 'development' at .env file\n\x1b[0m`);
            reject("Environment variable not set in .env");
        });
    }
}


// exportando essa função para fora, para que seja executada uma conexão com uma instrução sql
module.exports = {
    execute
}