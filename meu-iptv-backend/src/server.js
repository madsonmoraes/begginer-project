// server.js

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");

dotenv.config(); // Carregar variáveis de ambiente

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Conectar ao MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((error) => console.log("Erro ao conectar ao MongoDB:", error));

// Importar e usar as rotas de vídeo
const videoRoutes = require("./routes/videoRoutes");
app.use("/api/videos", videoRoutes);

// Servir os arquivos estáticos da pasta uploads
app.use("/uploads", express.static("uploads"));

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

