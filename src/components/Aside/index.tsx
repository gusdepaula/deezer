import { AsideProps } from '../../types';
import { Box, Button, Image, ButtonProps } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
import { Link as RouterLink, LinkProps } from 'react-router-dom';

const ButtonLink = (props: ButtonProps & LinkProps) => <Button as={RouterLink} {...props} />;

const Aside = ({ resetTracks }: AsideProps) => {
  return (
    <Box as="aside" width={{ base: '100%', md: '10%' }} p="4" height={{ base: 'auto', md: '100vh' }}>
      <RouterLink to={'/'} onClick={resetTracks}>
        <Image src="/images/logo-deezer.png" alt="Deezer GusDePaula" mx="auto" my={{ base: '2', md: '4' }} />
      </RouterLink>

      <Box display={{ base: 'flex', md: 'block' }} justifyContent="center" mt="4">
        <ButtonLink
          to="/favorites"
          onClick={resetTracks}
          colorScheme="teal"
          size={{ base: 'md', md: 'sm' }}
          _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
        >
          <FaHeart style={{ marginRight: '8px' }} />
          Favorites
        </ButtonLink>
      </Box>
    </Box>
  );
};

export default Aside;
