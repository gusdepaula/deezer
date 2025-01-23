import { useEffect, useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import Search from '../components/Search';
import TrackGrid from '../components/TrackGrid';

interface MainProps {
  tracks: any[];
  setTracks: (tracks: any[]) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const Main = ({ tracks, setTracks, searchTerm, setSearchTerm }: MainProps) => {
  const [playingTrack, setPlayingTrack] = useState(null);
  const [audio, setAudio] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Carregar favoritos do localStorage
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <Box as="main" width={{ md: '100%' }} p="4">
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
