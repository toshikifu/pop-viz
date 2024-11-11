import axios from "axios";

const client = axios.create({
	baseURL: import.meta.env.VITE_VERCEL_URL,
});

client.interceptors.response.use(
	(response) => response,
	(error) => Promise.reject(error),
);

export default client;
