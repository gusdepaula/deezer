import './App.css';
import { Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Favorites from './components/Favorites';

import Aside from './components/Aside';
import Main from './components/Main';

function App() {
  const resetTracks = () => {
    fetchTopTracks().then(setTracks);
    setSearchTerm('');
  };

  return (
    <Flex height="100vh" flexDirection="row">
      <Aside resetTracks={resetTracks} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Flex>
  );
}

export default App;
