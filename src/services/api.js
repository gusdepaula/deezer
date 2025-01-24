import axios from 'axios';
export const fetchTopTracks = async () => {
    const response = await axios.get('/api/chart/0/tracks');
    return response.data.data;
};
export const searchTracks = async (query) => {
    const response = await axios.get(`/api/search?q=${query}`);
    return response.data.data;
};
