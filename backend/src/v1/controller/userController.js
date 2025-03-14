const userService = require('../service/userService');

async function getAllUsers(req, res, next) {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users); // 200 OK
  } catch (error) {
    console.error(error); // Log do erro para diagnóstico
    res.status(500).json({ message: 'Erro ao buscar usuários' }); // 500 Internal Server Error
    next(error);
  }
}

async function getUserById(req, res, next) {
  try {
    const id = req.params.id; 
    const user = await userService.getUserById(id);
    
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' }); // 404 Not Found
    }
    
    res.status(200).json(user); // 200 OK
  } catch (error) {
    console.error(error); // Log do erro
    res.status(500).json({ message: 'Erro ao buscar usuário' }); // 500 Internal Server Error
    next(error);
  }
}

async function createUser(req, res, next) {
  try {
    const userData = req.body; 

    // Validações simples (pode ser expandido)
    if (!userData.name || !userData.email) {
      return res.status(400).json({ message: 'Nome e email são obrigatórios' }); // 400 Bad Request
    }

    const newUser = await userService.createUser(userData);
    res.status(201).json(newUser); // 201 Created
  } catch (error) {
    console.error(error); // Log do erro
    res.status(500).json({ message: 'Erro ao criar usuário' }); // 500 Internal Server Error
    next(error);
  }
}

async function updateUser(req, res, next) {
  try {
    const id = req.params.id; 
    const userData = req.body;

    // Validações simples (pode ser expandido)
    if (!userData.name && !userData.email) {
      return res.status(400).json({ message: 'Pelo menos um campo (nome ou email) deve ser fornecido para atualização' }); // 400 Bad Request
    }

    const updated = await userService.updateUser(id, userData);
    
    if (!updated) {
      return res.status(404).json({ message: 'Usuário não encontrado' }); // 404 Not Found
    }
    
    res.status(200).json({ message: 'Usuário atualizado com sucesso' }); // 200 OK
  } catch (error) {
    console.error(error); // Log do erro
    res.status(500).json({ message: 'Erro ao atualizar usuário' }); // 500 Internal Server Error
    next(error);
  }
}

async function deleteUser(req, res, next) {
  try {
    const id = req.params.id; 
    const deleted = await userService.deleteUser(id); // Chama o serviço para excluir o usuário
    
    if (!deleted) {
      return res.status(404).json({ message: 'Usuário não encontrado' }); // 404 Not Found
    }
    
    res.status(200).json({ message: 'Usuário excluído com sucesso' }); // 200 OK
  } catch (error) {
    console.error(error); // Log do erro
    res.status(500).json({ message: 'Erro ao excluir usuário' }); // 500 Internal Server Error
    next(error);
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};