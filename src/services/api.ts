import axios from 'axios';

// Este usa o proxy configurado no Vite
export const api = axios.create({
  baseURL: '/api', // Redireciona para o proxy configurado no Vite
});

// Se precisar de outra API externa sem passar pelo proxy:
export const apiExternal = axios.create({
  baseURL: 'https://api.deezer.com',
});

export const fetchTopTracks = () => {
  return api
    .get('/chart/0/tracks')
    .then(response => {
      console.log('API response:', response.data);
      return response.data.data; // A API Deezer retorna os tracks em `data`
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      throw error;
    });
};
