import './App.css';
import { Flex, Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Favorites from './pages/Favorites';
import Aside from './components/Aside';
import Main from './pages/Main';
import { fetchTopTracks } from './services/api';
import { useEffect, useState } from 'react';

function App() {
  const [tracks, setTracks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const resetTracks = () => {
    fetchTopTracks().then(setTracks);
    setSearchTerm('');
  };

  useEffect(() => {
    fetchTopTracks().then(setTracks);
  }, []);

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
