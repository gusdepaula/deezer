import './App';
import { Flex, Box, Spinner, Text } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Aside from './components/Aside';
import { fetchTopTracks } from './services/api';
import { useState, useEffect, Suspense, lazy } from 'react';
import { Track } from './types';

const Main = lazy(() => import('./pages/main'));
const Favorites = lazy(() => import('./pages/favorites'));

function App() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchTopTracks().then(setTracks);
  }, []);

  const resetTracks = () => {
    fetchTopTracks().then(setTracks);
    setSearchTerm('');
  };

  return (
    <Flex height="100vh" flexDirection={{ base: 'column', md: 'row' }}>
      <Aside resetTracks={resetTracks} />
      <Box flex="1">
        <Suspense
          fallback={
            <Flex height="100vh" justifyContent="center" alignItems="center" flexDirection="column">
              <Spinner size="lg" />
              <Box mt="4">
                <Text>Loading...</Text>
              </Box>
            </Flex>
          }
        >
          <Routes>
            <Route
              path="/"
              element={<Main tracks={tracks} setTracks={setTracks} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
            />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </Suspense>
      </Box>
    </Flex>
  );
}

export default App;
