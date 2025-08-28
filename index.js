require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();

// Habilitar CORS antes de las rutas
app.use(
  cors({
    origin: [
        "*",
        "http://localhost:5500",
        "http://127.0.0.1:5500/pages/dashboard.html"

    ],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// Rutas
const getTablas = require("./routes/get/obtenerTablas");
const getTareas = require("./routes/get/obtenerTareas");

app.use("/api", getTablas);
app.use("/api", getTareas);

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});