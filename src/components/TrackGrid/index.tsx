import { Box, SimpleGrid, Flex, Text, Image, Button } from '@chakra-ui/react';
import ButtonAudio from '../ButtonAudio';
import ButtonFavorite from '../ButtonFavorite';
import { TrackGridProps } from '../../types';

const TrackGrid = ({ tracks, playingTrack, setPlayingTrack, audio, setAudio, favorites, setFavorites }: TrackGridProps) => {
  return (
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
              <ButtonAudio track={track} playingTrack={playingTrack} setPlayingTrack={setPlayingTrack} audio={audio} setAudio={setAudio} />
              <ButtonFavorite track={track} favorites={favorites} setFavorites={setFavorites} />
            </Box>
          </Flex>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default TrackGrid;
