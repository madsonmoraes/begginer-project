const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

// Rota para servir vídeos via streaming
router.get("/stream/:filename", (req, res) => {
    const { filename } = req.params;
    const videoPath = path.join(__dirname, "../uploads", filename);

    // Verifica se o arquivo existe
    if (!fs.existsSync(videoPath)) {
        return res.status(404).json({ message: "Vídeo não encontrado!" });
    }

    // Obtém informações do vídeo
    const stat = fs.statSync(videoPath);
    const fileSize = stat.size;
    const range = req.headers.range;

    // Verifica se o cliente solicitou uma parte específica do vídeo
    if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
        const chunkSize = end - start + 1;

        const file = fs.createReadStream(videoPath, { start, end });

        res.writeHead(206, {
            "Content-Range": `bytes ${start}-${end}/${fileSize}`,
            "Accept-Ranges": "bytes",
            "Content-Length": chunkSize,
            "Content-Type": "video/mp4",
        });

        file.pipe(res);
    } else {
        // Envia o vídeo inteiro se não houver range
        res.writeHead(200, {
            "Content-Length": fileSize,
            "Content-Type": "video/mp4",
        });

        fs.createReadStream(videoPath).pipe(res);
    }
});

module.exports = router;
