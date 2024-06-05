const express = require("express");
const router = express.Router();
const Player = require("../models/players");

// Middleware para obtener una jugadora por ID
async function getPlayer(req, res, next) {
  let player;
  try {
    player = await Player.findById(req.params.id);
    if (player == null) {
      return res
        .status(404)
        .json({ message: "No se puede encontrar a la jugadora" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.player = player;
  next();
}

// Obtener todas las jugadoras
router.get("/players", async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtener una jugadora por ID
router.get("/players/:id", getPlayer, (req, res) => {
  res.json(res.player);
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

// Actualizar una jugadora por ID
router.put("/players/:id", getPlayer, async (req, res) => {
  res.player.name = req.body.name;
  res.player.surname = req.body.surname;
  res.player.age = req.body.age;
  res.player.height = req.body.height;
  res.player.weight = req.body.weight;
  res.player.playedMinutes = req.body.playedMinutes;
  res.player.goals = req.body.goals;
  res.player.passes = req.body.passes;
  res.player.assists = req.body.assists;
  res.player.position = req.body.position;
  res.player.available = req.body.available;
  res.player.dorsal = req.body.dorsal;
  res.player.img = req.body.img;
  res.player.injuries = req.body.injuries;
  
  try {
    const updatedPlayer = await res.player.save();
    res.json(updatedPlayer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Eliminar una jugadora por ID
router.delete("/players/:id", getPlayer, async (req, res) => {
  try {
    await Player.findByIdAndDelete(req.params.id); // Elimina la jugadora por su ID
    res.json({ message: "Jugadora eliminada" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
