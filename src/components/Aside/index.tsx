import { Box, Image, VStack, Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface AsideProps {
  resetTracks: () => void;
}

export default function Aside({ resetTracks }: AsideProps) {
  return (
    <Box as="aside" width={{ base: '100%', md: '20%' }} p="4" height={{ base: 'auto', md: '100vh' }}>
      <VStack spacing={4} align="stretch">
        <Link to={'/'} onClick={resetTracks}>
          <Image src="../../../public/images/logo-deezer.png" alt="Deezer GusdePaula" mx="auto" my={{ base: '2', md: '4' }} />
        </Link>
        <ChakraLink as={Link} to="/favorites" fontSize={{ base: 'md', md: 'lg' }} color="teal.500" textAlign="center">
          Favorites
        </ChakraLink>
      </VStack>
    </Box>
  );
}
