import { Button } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
import { ButtonFavoriteProps } from '../../types';
import { useColorMode } from '../ui/color-mode';

const ButtonFavorite = ({ track, favorites, setFavorites }: ButtonFavoriteProps) => {
  const { colorMode } = useColorMode(); // Extraindo a propriedade correta
  const isFavorite = favorites.some(favorite => favorite.id === track.id);
  const colorHeart = isFavorite ? 'red' : colorMode === 'light' ? 'white' : 'black';

  const handleAddToFavorites = () => {
    let updatedFavorites = isFavorite ? favorites.filter(favorite => favorite.id !== track.id) : [...favorites, track];

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    console.log(`Atualizando favoritos:`, updatedFavorites);
  };

  return (
    <Button onClick={handleAddToFavorites} colorScheme="teal" size="sm" _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}>
      <FaHeart style={{ fill: colorHeart }} />
    </Button>
  );
};

export default ButtonFavorite;
