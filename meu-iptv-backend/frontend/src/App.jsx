import { useEffect, useState } from "react";
import api from "./services/api";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await api.get("/uploads");
        setVideos(response.data);
      } catch (error) {
        console.error("Erro ao buscar vídeos", error);
      }
    }

    fetchVideos();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Vídeos</h1>
      <ul>
        {videos.map((video) => (
          <li key={video._id}>
            <video controls width="300">
              <source
                src={`http://localhost:3000/${video.filename}`}
                type="video/mp4"
              />
              Seu navegador não suporta vídeos.
            </video>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
