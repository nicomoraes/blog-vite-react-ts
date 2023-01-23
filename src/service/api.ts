import axios from 'axios';

export default axios.create({
  baseURL: `http://localhost:${import.meta.env.VITE_SERVER_PORT ?? 8000}`,
});
