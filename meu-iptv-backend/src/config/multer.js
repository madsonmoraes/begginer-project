const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Caminho da pasta de uploads
const uploadDir = path.join(__dirname, "../uploads/");

// Criar a pasta se não existir
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configuração do armazenamento de arquivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Salvar na pasta correta
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Nome único
  },
});

// Limitação de tipo e tamanho de arquivos
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (![".mp4", ".avi", ".mkv"].includes(ext)) {
      return cb(new Error("Tipo de arquivo não suportado"), false);
    }
    cb(null, true);
  },
  limits: { fileSize: 1000000000 }, // 1GB
});

module.exports = upload;
