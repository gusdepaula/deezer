import { useState } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import TrackGrid from '../components/TrackGrid';
import { Track } from '../types';

const Favorites = () => {
  const [favorites, setFavorites] = useState<Track[]>(() => {
    // Carregar favoritos do localStorage
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    console.log('Favoritos carregados:', storedFavorites);
    return storedFavorites;
  });
  const [playingTrack, setPlayingTrack] = useState<Track | null>(null);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  return (
    <Box as="main" width={{ base: '100%', md: '100%' }} p="4">
      <Heading size="lg" mt="4">
        Favorites
      </Heading>
      {favorites.length === 0 ? (
        <Text mt="4">No favorite tracks found.</Text>
      ) : (
        <TrackGrid
          tracks={favorites}
          playingTrack={playingTrack}
          setPlayingTrack={setPlayingTrack}
          audio={audio}
          setAudio={setAudio}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      )}
    </Box>
  );
};

export default Favorites;
