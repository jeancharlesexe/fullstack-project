const database = require('../../config/mysql/database');

async function findAllUsers() {
  try {
    const result = await database.execute('SELECT * FROM users');
    return result;
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    throw error;
  }
}

async function findUserById(id) {
  try {
    const result = await database.execute('SELECT * FROM users WHERE id = ?', [id]);
    return result.length > 0 ? result[0] : null;
  } catch (error) {
    console.error('Erro ao buscar usuário por ID:', error);
    throw error;
  }
}

async function createUser(userData) {
  try {
    const { name, email, password } = userData;
    const result = await database.execute(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, password]
    );
    
    return {
      id: result.insertId,
      name,
      email
    };
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    throw error;
  }
}

async function updateUser(id, userData) {
  try {
    const { name, email, password } = userData;
    const result = await database.execute(
      'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?',
      [name, email, password, id]
    );
    
    return result.affectedRows > 0;
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    throw error;
  }
}

async function deleteUser(id) {
  try {
    const result = await database.execute('DELETE FROM users WHERE id = ?', [id]);
    return result.affectedRows > 0; 
  } catch (error) {
    console.error('Erro ao excluir usuário:', error);
    throw error; er
  }
}
module.exports = {
  findAllUsers,
  findUserById,
  createUser,
  updateUser,
  deleteUser
};