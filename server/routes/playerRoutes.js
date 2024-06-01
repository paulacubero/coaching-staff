const express = require("express");
const router = express.Router();
const Player = require("../models/players");

// Obtener todas las jugadoras
router.get("/players", async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Crear una nueva jugadora
router.post("/players", async (req, res) => {
  const player = new Player(req.body);

  try {
    const newPlayer = await player.save();
    res.status(201).json(newPlayer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
