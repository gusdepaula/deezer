import { AsideProps } from '../../types';
import { Box, Button, Image, ButtonProps } from '@chakra-ui/react';
import { FaHeart, FaHome } from 'react-icons/fa';
import { Link, LinkProps, useLocation } from 'react-router-dom';
import { useColorMode } from '../ui/color-mode';

const ButtonLink = (props: ButtonProps & LinkProps) => <Button as={Link} {...props} />;

const Aside = ({ resetTracks }: AsideProps) => {
  const location = useLocation();
  const { colorMode } = useColorMode();

  return (
    <Box as="aside" width={{ base: '100%', md: '10%' }} p="4" height={{ base: 'auto', md: '100vh' }}>
      <Link to={'/'} onClick={resetTracks}>
        <Image
          src={colorMode === 'light' ? '/images/logo-deezer-light.png' : '/images/logo-deezer-dark.png'}
          alt="Deezer GusDePaula"
          mx="auto"
          my={{ base: '2', md: '4' }}
        />
      </Link>

      <Box display="flex" flexDirection="column" alignItems="center" mt="4">
        {location.pathname === '/favorites' && (
          <ButtonLink
            to="/"
            onClick={resetTracks}
            colorScheme="teal"
            size={{ base: 'md', md: 'sm' }}
            width="100%"
            _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
            mb="4"
          >
            <FaHome style={{ marginRight: '8px' }} />
            Home
          </ButtonLink>
        )}
        <ButtonLink
          to="/favorites"
          onClick={resetTracks}
          colorScheme="teal"
          size={{ base: 'md', md: 'sm' }}
          width="100%"
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
