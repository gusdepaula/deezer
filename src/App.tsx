import './App.css';
import { Flex, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Favorites from './components/Favorites';
import Aside from './components/Aside';
import Main from './components/Main';
import { fetchTopTracks } from './services/api';

function App() {
  const resetTracks = () => {
    fetchTopTracks();
  };

  return (
    <Flex height="100vh" flexDirection={{ base: 'column', md: 'row' }}>
      <Aside resetTracks={resetTracks} />
      <Box flex="1" overflowY="auto">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Box>
    </Flex>
  );
}

export default App;
