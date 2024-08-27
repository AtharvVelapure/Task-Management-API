// authController.js
const users = [];

const registerUser = (req, res) => {
  const { username, password } = req.body;
  users.push({ username, password });
  res.status(201).json({ message: 'User registered successfully!' });
};

module.exports = { registerUser };
