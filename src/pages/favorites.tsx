import { useEffect, useState } from 'react';
import { Box, Heading, Text, SimpleGrid, Image, Button, Flex } from '@chakra-ui/react';
import { FaPlay, FaPause } from 'react-icons/fa';
import ButtonFavorite from '../components/ButtonFavorite';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [playingTrack, setPlayingTrack] = useState(null);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    // Carregar favoritos do localStorage
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
    console.log('Favoritos carregados:', storedFavorites);
  }, []);

  const handlePlayPause = track => {
    if (!track.preview) {
      console.error('URL de pré-visualização não disponível para esta faixa:', track);
      return;
    }

    if (playingTrack === track.id) {
      audio.pause();
      setPlayingTrack(null);
    } else {
      if (audio) {
        audio.pause();
      }
      const newAudio = new Audio(track.preview);
      newAudio.play().catch(error => {
        console.error('Erro ao reproduzir a música:', error);
      });
      setAudio(newAudio);
      setPlayingTrack(track.id);
    }
  };

  return (
    <Box as="main" width={{ base: '100%', md: '100%' }} p="4">
      <Heading size="lg" mt="4">
        Favorites
      </Heading>
      {favorites.length === 0 ? (
        <Text mt="4">No favorite tracks found.</Text>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} mt="4">
          {favorites.map((track, index) => (
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
                  <ButtonFavorite track={track} favorites={favorites} setFavorites={setFavorites} />
                </Box>
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default Favorites;
