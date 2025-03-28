import axios from "axios";

const API_BASE_URL = "http://localhost:3000"; // Certifique-se de que está correto

export const getUploads = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/uploads`); // Alterado "/videos" para "/uploads"
    return response.data.uploads;
  } catch (error) {
    console.error("Erro ao buscar uploads:", error);
    return [];
  }
};

export default {
  getUploads, // Agora pode ser importado como `api.getUploads()`
};
