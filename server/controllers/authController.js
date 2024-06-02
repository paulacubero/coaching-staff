const User = require("../models/users");
const jwt = require("jsonwebtoken");

const secret = "superadmin";

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).send("Usuario no encontrado");
    }
    if (user.password !== password) {
      return res.status(401).send("Contraseña incorrecta");
    }
    const token = jwt.sign({ id: user._id, role: user.role }, secret, {
      expiresIn: "1h",
    });
    res.send({ token, role: user.role });
  } catch (error) {
    res.status(500).send("Error del servidor");
  }
};
