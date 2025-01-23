import axios from 'axios';

const API_BASE_URL = 'https://api.deezer.com';

export const fetchTopTracks = async () => {
  const response = await axios.get(`${API_BASE_URL}/chart/0/tracks`);
  return response.data.data;
};

export const searchTracks = async (query: string) => {
  const response = await axios.get(`${API_BASE_URL}/search?q=${query}`);
  return response.data.data;
};
