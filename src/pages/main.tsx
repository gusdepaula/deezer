import { useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import Search from '../components/Search';
import TrackGrid from '../components/TrackGrid';
import { MainProps, Track } from '../../types';

const Main = ({ tracks, setTracks, searchTerm, setSearchTerm }: MainProps) => {
  const [playingTrack, setPlayingTrack] = useState<Track | null>(null);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [favorites, setFavorites] = useState<Track[]>(() => {
    // Carregar favoritos do localStorage
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    console.log('Favoritos carregados:', storedFavorites);
    return storedFavorites;
  });

  return (
    <Box as="main" width={{ base: '100%', md: '100%' }} p="4">
      <Search setTracks={setTracks} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Heading size="lg" mt="4">
        {searchTerm ? `Results for "${searchTerm}"` : 'Top Tracks'}
      </Heading>

      <TrackGrid
        tracks={tracks}
        playingTrack={playingTrack}
        setPlayingTrack={setPlayingTrack}
        audio={audio}
        setAudio={setAudio}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </Box>
  );
};

export default Main;
