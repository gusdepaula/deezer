import { Box, Button, Input } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { api, fetchTopTracks } from '../../services/api';
import { SearchProps } from '../../types';

const Search = ({ setTracks, searchTerm, setSearchTerm }: SearchProps) => {
  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      fetchTopTracks().then(setTracks);
      return;
    }

    api
      .get(`/search?q=${searchTerm}`)
      .then(response => {
        setTracks(response.data.data); // A API Deezer retorna os tracks em `data`
        console.log('Search API response:', response.data);
      })
      .catch(error => {
        console.error('Error fetching search data:', error);
      });
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Box mb="4">
      <Input
        placeholder="Search for a track or artist"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        width="80%"
      />
      <Button onClick={handleSearch}>
        <FaSearch />
      </Button>
    </Box>
  );
};

export default Search;
