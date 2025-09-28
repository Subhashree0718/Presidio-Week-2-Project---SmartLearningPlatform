const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const loginJWT = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.getByEmail(email);
    if (!user) {
      console.log(`[FAILED LOGIN] User not found: ${email}`);
      return res.status(404).json({ message: 'User not found' });
    }
    const isMatch = await bcrypt.compare(password, user.user_password);
    if (!isMatch) {
      console.log(`[FAILED LOGIN] Invalid password for: ${email}`);
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign(
      { id: user.user_id, role: user.user_role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const loginSession = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.getByEmail(email);
    if (!user) {
      console.log(`[FAILED LOGIN] User not found: ${email}`);
      return res.status(404).json({ message: 'User not found' });
    }
    const isMatch = await bcrypt.compare(password, user.user_password);
    if (!isMatch) {
      console.log(`[FAILED LOGIN] Invalid password for: ${email}`);
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    req.session.user = { id: user.user_id, role: user.user_role };
    res.json({ message: 'Logged in successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const profile = (req, res) => {
  res.json({ user: req.user });
};

const signin = async (req, res) => {
  try {
    const { user_name, user_email, user_password, user_role } = req.body;

    const existingUser = await User.getByEmail(user_email);
    if (existingUser) return res.status(400).json({ message: 'User already exists' });
    const newUser = await User.create({ user_name, user_email, user_password, user_role });
    res.status(201).json({
      message: 'User created successfully',
      user: {
        id: newUser.user_id,
        name: newUser.user_name,
        email: newUser.user_email,
        role: newUser.user_role,
        links: { self: `/users/${newUser.user_id}` }
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.getAll(); 
    const response = users.map(u => ({
      id: u.user_id,
      name: u.user_name,
      email: u.user_email,
      role: u.user_role,
      links: { self: `/users/${u.user_id}` }
    }));
    res.json({ users: response });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { loginJWT, loginSession, profile, signin, getAllUsers };
