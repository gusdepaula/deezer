import { useEffect, useState } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { apiNext } from '../../services/api';

const Main = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    apiNext
      .get('/chart/0/tracks')
      .then(response => {
        setTracks(response.data.data); // A API Deezer retorna os tracks em `data`

        console.log('API response:', response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Box as="main" flex="1" p="4">
      <Heading>Main Content</Heading>
      <Text>Check the console for API response.</Text>
    </Box>
  );
};

export default Main;
