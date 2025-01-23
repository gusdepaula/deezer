import { AsideProps } from '../../types';
import { Box, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Aside({ resetTracks }: AsideProps) {
  return (
    <Box as="aside" width={{ base: '100%', md: '20%' }} p="4" height={{ base: 'auto', md: '100vh' }}>
      <Link to={'/'} onClick={resetTracks}>
        <Image src="../../../public/images/logo-deezer.png" alt="Deezer GusDePaula" mx="auto" my={{ base: '2', md: '4' }} />
      </Link>
      <Link to={'/favorites'} onClick={resetTracks}>
        Favorites
      </Link>
    </Box>
  );
}
