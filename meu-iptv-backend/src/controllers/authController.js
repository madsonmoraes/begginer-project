const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Reseller = require("../models/Reseller");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

// Registro de usuário ou revendedor
const register = async (req, res) => {
  const { name, username, email, password, isReseller } = req.body;

  const userExists = await User.findOne({ email }) || await Reseller.findOne({ email });
  if (userExists) return res.status(400).json({ message: "Email já cadastrado" });

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  let newUser;
  if (isReseller) {
    newUser = new Reseller({ name, email, password: hashedPassword });
  } else {
    newUser = new User({ name, username, email, password: hashedPassword });
  }

  await newUser.save();
  const token = generateToken(newUser._id);
  res.status(201).json({ message: "Cadastro realizado!", token });
};

// Login
const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }) || await Reseller.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const token = generateToken(user._id);
    res.json({ message: "Login bem-sucedido!", token });
  } else {
    res.status(400).json({ message: "Credenciais inválidas" });
  }
};

module.exports = { register, login };
