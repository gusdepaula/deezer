import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, Button, IconButton } from '@chakra-ui/react';
import { FaPlay, FaPause, FaHeart } from 'react-icons/fa';
import { api } from '../../services/api';

const Main = () => {
  const [tracks, setTracks] = useState([]);
  const [playingTrack, setPlayingTrack] = useState(null);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    api
      .get('/chart/0/tracks')
      .then(response => {
        setTracks(response.data.data); // A API Deezer retorna os tracks em `data`
        console.log('API response:', response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handlePlayPause = track => {
    if (playingTrack === track.id) {
      audio.pause();
      setPlayingTrack(null);
    } else {
      if (audio) {
        audio.pause();
      }
      const newAudio = new Audio(track.preview);
      newAudio.play();
      setAudio(newAudio);
      setPlayingTrack(track.id);
    }
  };

  const handleAddToFavorites = track => {
    // Lógica para adicionar a música à lista de favoritos
    console.log(`Adicionando ${track.title} à lista de favoritos`);
  };

  return (
    <Box as="main" width="80%" p="4">
      <Heading size="lg" mt="4">
        Top Tracks
      </Heading>
      <ul>
        {tracks.map(track => (
          <li key={track.id}>
            <img src={track.album.cover_small} alt={track.title} />
            <Box>
              <Box flex="1">
                <Text fontWeight="bold">{track.title}</Text>
                <Text>{track.artist.name}</Text>
                <Text>{(track.duration / 60).toFixed(2)} min</Text>
              </Box>
              <Button as="a" href={track.link} target="_blank" colorScheme="teal" size="sm" mr="2">
                Ver Completa
              </Button>
              <Button onClick={() => handlePlayPause(track)} colorScheme="teal" size="sm" mr="2">
                {playingTrack === track.id ? <FaPause color="black" /> : <FaPlay color="black" />}
              </Button>
              <Button onClick={() => handleAddToFavorites(track)} colorScheme="teal" size="sm">
                <FaHeart color="black" />
              </Button>
            </Box>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Main;
