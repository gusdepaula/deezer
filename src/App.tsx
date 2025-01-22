import './App.css';
import { Flex } from '@chakra-ui/react';

import Aside from './components/Aside';
import Main from './components/Main';

function App() {
  return (
    <Flex height={'100vh'} flexDirection={'column'}>
      <Aside />
      <Main />
    </Flex>
  );
}

export default App;
