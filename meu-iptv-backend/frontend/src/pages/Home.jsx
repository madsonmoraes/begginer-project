import { useEffect, useState } from "react";
import { getUploads } from "../services/api"; // Certifique-se que o caminho está correto

const Home = () => {
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    const fetchUploads = async () => {
      const data = await getUploads();
      setUploads(data);
    };
    fetchUploads();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-4">Lista de Uploads</h1>
      <ul>
        {uploads.length > 0 ? (
          uploads.map((upload, index) => (
            <li key={index} className="text-white">
              {upload}
            </li>
          ))
        ) : (
          <p className="text-gray-400">Nenhum arquivo encontrado.</p>
        )}
      </ul>
    </div>
  );
};

export default Home;
