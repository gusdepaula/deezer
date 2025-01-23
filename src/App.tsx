import './App.css';
import { Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Favorites from './components/Favorites';
import Aside from './components/Aside';
import Main from './components/Main';
import { fetchTopTracks } from './services/api';
import { useState } from 'react';

function App() {
  const [tracks, setTracks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const resetTracks = () => {
    fetchTopTracks().then(setTracks);
    setSearchTerm('');
  };

  return (
    <Router>
      <Flex height="100vh" flexDirection="row">
        <Aside resetTracks={resetTracks} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Flex>
    </Router>
  );
}

export default App;
