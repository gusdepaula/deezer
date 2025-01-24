import { useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import TrackGrid from '../components/TrackGrid';
import { Track } from '../types';

const Favorites = () => {
  const [favorites, setFavorites] = useState<Track[]>(() => {
    // Carregar favoritos do localStorage
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    console.log('Favoritos carregados:', storedFavorites);
    return storedFavorites;
  });

  return (
    <Box as="main" width={{ base: '100%', md: '100%' }} p="4">
      <Heading size="lg" mt="4" textAlign="center">
        Favorites
      </Heading>
      <TrackGrid tracks={favorites} favorites={favorites} setFavorites={setFavorites} />
    </Box>
  );
};

export default Favorites;
