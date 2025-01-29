import React from 'react';
import { Box, SimpleGrid, Flex, Text, Image, Button, Link } from '@chakra-ui/react';
import ButtonAudio from '../ButtonAudio';
import ButtonFavorite from '../ButtonFavorite';
import { TrackGridProps } from '../../types';
import { useColorMode } from '../ui/color-mode';

const TrackGrid: React.FC<TrackGridProps> = ({ tracks, favorites, setFavorites }) => {
  if (tracks.length === 0) {
    return (
      <Text mt="4" data-testid="no-favorite">
        No favorite tracks found.
      </Text>
    );
  }

  const { colorMode } = useColorMode();
  const borderColor = colorMode === 'light' ? '#e1e1e1' : '#27272b';

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} mt="4">
      {tracks.map((track, index) => (
        <Box
          key={track.id}
          padding="10px"
          py="4"
          borderRadius="md"
          boxShadow="md"
          border="1px solid"
          borderColor={borderColor}
          _hover={{ boxShadow: 'lg', transform: 'translateY(-2px)' }}
          transition="all 0.3s ease"
          margin="10px"
        >
          <Flex alignItems="center" flexDirection={{ base: 'column', md: 'row' }}>
            <Text fontWeight="bold" mr="4">
              #{index + 1}
            </Text>
            <Image src={track.album.cover_medium} alt={track.title} boxSize="100px" mr="4" borderRadius="md" loading="lazy" />
            <Box flex="1" textAlign={{ base: 'center', md: 'left' }}>
              <Text fontWeight="bold" lineHeight="1.5" minHeight="3em">
                {track.title}
              </Text>
              <Text>Artista: {track.artist.name}</Text>
              <Text>Duração: {(track.duration / 60).toFixed(2)} min</Text>
              <Flex mt="2" alignItems="center" justifyContent={{ base: 'center', md: 'flex-start' }}>
                <Link href={track.link} target="_blank">
                  <Button colorScheme="teal" size="sm" mr="2" _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}>
                    Ver Completa
                  </Button>
                </Link>
                <ButtonAudio track={track} />
                <ButtonFavorite track={track} favorites={favorites} setFavorites={setFavorites} />
              </Flex>
            </Box>
          </Flex>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default TrackGrid;
