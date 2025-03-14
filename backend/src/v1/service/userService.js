const userModel = require('../model/mysql/userModel');

async function getAllUsers() {
  return await userModel.findAllUsers();
}

async function getUserById(id) {
  return await userModel.findUserById(id);
}

async function createUser(userData) {
  return await userModel.createUser(userData);
}

async function updateUser(id, userData) {
  return await userModel.updateUser(id, userData);
}

async function deleteUser(id) {
  return await userModel.deleteUser(id); 
}
module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};