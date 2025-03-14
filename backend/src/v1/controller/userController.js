const userModel = require('../model/mysql/userModel');

async function getAllUsers(req, res, next) {
  try {
    const users = await userModel.findAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
}

async function getUserById(req, res, next) {
  try {
    const id = req.params.id; 
    const user = await userModel.findById(id);
    
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    
    res.json(user);
  } catch (error) {
    next(error);
  }
}

async function createUser(req, res, next) {
  try {
    const userData = req.body; 
    const newUser = await userModel.create(userData);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
}

async function updateUser(req, res, next) {
  try {
    const id = req.params.id; 
    const userData = req.body;
    const updated = await userModel.update(id, userData);
    
    if (!updated) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    
    res.json({ message: 'Usuário atualizado com sucesso' });
  } catch (error) {
    next(error);
  }
}

async function deleteUser(req, res, next) {
  try {
    const id = req.params.id; 
    const deleted = await userModel.delete(id);
    
    if (!deleted) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    
    res.json({ message: 'Usuário excluído com sucesso' });
  } catch (error) {
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