import { Box, Button, Input } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { searchTracks, fetchTopTracks } from '../../services/api';
import { SearchProps } from '../../types';

const Search = ({ setTracks, searchTerm, setSearchTerm }: SearchProps) => {
  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      fetchTopTracks().then(setTracks);
      return;
    }

    searchTracks(searchTerm)
      .then(setTracks)
      .catch(error => {
        console.error('Error fetching search data:', error);
      });
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
      <Button onClick={handleSearch} data-testid="search-button">
        <FaSearch />
      </Button>
    </Box>
  );
};

export default Search;
