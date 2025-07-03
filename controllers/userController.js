const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const users = require('../models/user');


const register = async (req, res) => {

    const { username, email, password } = req.body;

    const existingUserName = users.find(u => u.username === username);
    const existingUserEmail = users.find(u => u.email === email);

    if ((existingUserName || existingUserEmail)) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });

    res.status(201).json({ message: 'User registered successfully' });
};



const login = async (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ username }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.json({ token });
};

module.exports = { register, login };