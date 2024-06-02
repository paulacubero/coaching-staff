const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const playerRoutes = require("./routes/playerRoutes"); // Importa las rutas de jugadores
const app = express();

mongoose
  .connect(
    "mongodb+srv://admin:superadmin@cluster0.5j5lzsa.mongodb.net/databaseTFG",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes); // Ruta de login
app.use("/api", playerRoutes); // Ruta de jugadores

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
