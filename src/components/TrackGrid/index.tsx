import { Box, SimpleGrid, Flex, Text, Image, Button, Link } from '@chakra-ui/react';
import ButtonAudio from '../ButtonAudio';
import ButtonFavorite from '../ButtonFavorite';
import { TrackGridProps } from '../../types';

const TrackGrid = ({ tracks, favorites, setFavorites }: TrackGridProps) => {
  if (tracks.length === 0) {
    return (
      <Text mt="4" data-testid="no-favorite">
        No favorite tracks found.
      </Text>
    );
  }
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} mt="4">
      {tracks.map((track, index) => (
        <Box key={track.id} border="1px solid #ccc" padding="10px" py="4">
          <Flex alignItems="center" flexDirection={{ base: 'column', md: 'row' }}>
            <Text fontWeight="bold" mr="4">
              #{index + 1}
            </Text>
            <Image src={track.album.cover_medium} alt={track.title} boxSize="100px" mr="4" />
            <Box flex="1" textAlign={{ base: 'center', md: 'left' }}>
              <Text fontWeight="bold">{track.title}</Text>
              <Text>Artista: {track.artist.name}</Text>
              <Text>Duração: {(track.duration / 60).toFixed(2)} min</Text>
              <Link href={track.link} target="_blank">
                <Button colorScheme="teal" size="sm" mr="2">
                  Ver Completa
                </Button>
              </Link>
              <ButtonAudio track={track} />
              <ButtonFavorite track={track} favorites={favorites} setFavorites={setFavorites} />
            </Box>
          </Flex>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default TrackGrid;
