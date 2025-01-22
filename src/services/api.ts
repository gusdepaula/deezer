import axios from 'axios';

// Este usa o proxy configurado no Vite
export const apiNext = axios.create({
  baseURL: '/api', // Redireciona para o proxy configurado no Vite
});

// Se precisar de outra API externa sem passar pelo proxy:
export const apiExternal = axios.create({
  baseURL: 'https://api.deezer.com',
});
