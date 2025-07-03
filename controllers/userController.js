const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Users = require('../models/user');


const register = async (req, res) => {

    const { username, email, password } = req.body;

    const existingUserName = Users.find(u => u.username === username);
    const existingUserEmail = Users.find(u => u.email === email);

    if ((existingUserName || existingUserEmail)) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const RegisterUser = new Users({ username, email, password: hashedPassword });
    const RegisteredUserSaved = await RegisterUser.save();

    if (RegisteredUserSaved) {

        res.status(201).json({ message: 'User registered successfully' });
    }
};



const login = async (req, res) => {

    const { username, password } = req.body;

    const user = Users.find(u => u.username === username);
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ username }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
    res.json({ token });
};

module.exports = { register, login };