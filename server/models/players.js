const mongoose = require("mongoose");

const injurySchema = new mongoose.Schema({
  date: { type: String, required: true },
  type:  { type: String, required: true },
})

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  age: { type: Number, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  playedMinutes: { type: Number, required: true },
  goals: { type: Number, required: true },
  passes: { type: Number, required: true },
  assists: { type: Number, required: true },
  position: { type: String, required: true },
  available: { type: Boolean, required: true },
  dorsal: { type: Number, required: true },
  img: { type: String, required: true },
  injuries: {type: [injurySchema], default: []},
});

const Player = mongoose.model("Player", playerSchema, "players");
module.exports = Player;
