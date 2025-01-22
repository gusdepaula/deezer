import { Box, Image } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Aside() {
  return (
    <Box as="aside" width="20%" p="4" height="100vh">
      <Link to={'/'}>
        <Image src="../../../public/images/logo-deezer.png"></Image>
      </Link>
      <Link to="/favorites">Favoritos</Link>
    </Box>
  );
}
