import './App.css';
import { Flex, Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Favorites from './pages/favorites';
import Aside from './components/Aside';
import Main from './pages/main';
import { fetchTopTracks } from './services/api';
import { useState, useEffect } from 'react';
import { Track } from './types';

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
        <Routes>
          <Route path="/" element={<Main tracks={tracks} setTracks={setTracks} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Box>
    </Flex>
  );
}

export default App;
