import React from 'react';
import { Box, Input, Button, Flex } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { SearchProps } from '../../types';
import { searchTracks } from '../../services/api'; // Certifique-se de que o caminho esteja correto

const Search: React.FC<SearchProps> = ({ searchTerm, setSearchTerm, setTracks }) => {
  const handleSearch = () => {
    searchTracks(searchTerm)
      .then(setTracks)
      .catch((error: any) => {
        console.error('Error fetching search data:', error);
      });
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Box
      mb="4"
      width={{ base: 'auto', md: '1309px' }}
      mx="auto"
      marginTop={{ base: '0', md: '30px' }}
      marginLeft={{ base: '0', md: '10px' }}
    >
      <Flex alignItems="center">
        <Input
          placeholder="Search for a track or artist"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          width="100%"
          borderRightRadius="0"
        />
        <Button onClick={handleSearch} data-testid="search-button" borderLeftRadius="0">
          <FaSearch />
        </Button>
      </Flex>
    </Box>
  );
};

export default Search;
