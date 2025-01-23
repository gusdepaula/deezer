import React, { useEffect, useState } from 'react';
import { Flex, Box, Heading, Text, Button, Image, SimpleGrid } from '@chakra-ui/react';
import { FaPlay, FaPause, FaHeart } from 'react-icons/fa';
import { fetchTopTracks } from '../../services/api';
import Search from '../Search';

const Main = () => {
  const [tracks, setTracks] = useState([]);
  const [playingTrack, setPlayingTrack] = useState(null);
  const [audio, setAudio] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchTopTracks().then(setTracks);
    // Carregar favoritos do localStorage
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
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
    let updatedFavorites;
    if (isFavorite(track)) {
      updatedFavorites = favorites.filter(favorite => favorite.id !== track.id);
    } else {
      updatedFavorites = [...favorites, track];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    console.log(`Atualizando favoritos:`, updatedFavorites);
  };

  const isFavorite = track => {
    return favorites.some(favorite => favorite.id === track.id);
  };

  return (
    <Box as="main" width={{ base: '100%', md: '100%' }} p="4">
      <Search setTracks={setTracks} />

      <Heading size="lg" mt="4">
        Top Tracks
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} mt="4">
        {tracks.map((track, index) => (
          <Box key={track.id} border="1px solid #ccc" padding="10px" py="4">
            <Flex alignItems="center" flexDirection={{ base: 'column', md: 'row' }}>
              <Text fontWeight="bold" mr="4">
                #{index + 1}
              </Text>
              <Image src={track.album.cover_medium} alt={track.title} boxSize="100px" mr="4" />
              <Box flex="1" textAlign="left">
                <Text fontWeight="bold">{track.title}</Text>
                <Text>Artista: {track.artist.name}</Text>
                <Text>Duração: {(track.duration / 60).toFixed(2)} min</Text>
                <Button as="a" href={track.link} target="_blank" colorScheme="teal" size="sm" mr="2">
                  Ver Completa
                </Button>
                <Button onClick={() => handlePlayPause(track)} colorScheme="teal" size="sm" mr="2">
                  {playingTrack === track.id ? <FaPause color="black" /> : <FaPlay color="black" />}
                </Button>
                <Button onClick={() => handleAddToFavorites(track)} colorScheme="teal" size="sm">
                  <FaHeart color={isFavorite(track) ? 'red' : 'black'} />
                </Button>
              </Box>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Main;
