import { Box, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Aside({ resetTracks }) {
  return (
    <Box as="aside" width="20%" p="4" height="100vh">
      <Link to={'/'} onClick={resetTracks}>
        <Image src="../../../public/images/logo-deezer.png" alt="Deezer GusdePaula"></Image>
      </Link>
      <Link to="/favorites">Favoritos</Link>
    </Box>
  );
}
