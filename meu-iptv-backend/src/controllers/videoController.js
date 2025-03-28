// controllers/videoController.js

const Video = require("../models/Video");
const path = require("path");

// Função para upload de vídeos
const uploadVideo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const videoFile = req.file;

    if (!videoFile) {
      return res.status(400).json({ message: "Nenhum arquivo enviado." });
    }

    const newVideo = new Video({
      title,
      description,
      videoUrl: `/uploads/${videoFile.filename}`, // Caminho do vídeo armazenado
    });

    await newVideo.save();
    res.status(201).json({ message: "Vídeo carregado com sucesso.", video: newVideo });
  } catch (error) {
    res.status(500).json({ message: "Erro ao fazer upload do vídeo." });
  }
};

// Função para listar os vídeos
const getVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: "Erro ao listar os vídeos." });
  }
};

// Função para excluir um vídeo
const deleteVideo = async (req, res) => {
  try {
    const videoId = req.params.id;
    const video = await Video.findByIdAndDelete(videoId);

    if (!video) {
      return res.status(404).json({ message: "Vídeo não encontrado." });
    }

    res.json({ message: "Vídeo excluído com sucesso." });
  } catch (error) {
    res.status(500).json({ message: "Erro ao excluir o vídeo." });
  }
};

module.exports = { uploadVideo, getVideos, deleteVideo };
