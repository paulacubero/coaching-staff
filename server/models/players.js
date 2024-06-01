const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  nombre: String,
  edad: Number,
  dorsal: Number,
  goles: Number,
  asistencias: Number,
  minutos_jugados: Number,
  tarjetas: {
    amarillas: Number,
    rojas: Number,
  },
  alta_medica: Boolean,
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
