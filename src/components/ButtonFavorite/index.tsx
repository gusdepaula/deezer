import { Button } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
import { ButtonFavoriteProps } from '../../types';

const ButtonFavorite = ({ track, favorites, setFavorites }: ButtonFavoriteProps) => {
  const isFavorite = favorites.some(favorite => favorite.id === track.id);

  const handleAddToFavorites = () => {
    let updatedFavorites;
    if (isFavorite) {
      updatedFavorites = favorites.filter(favorite => favorite.id !== track.id);
    } else {
      updatedFavorites = [...favorites, track];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    console.log(`Atualizando favoritos:`, updatedFavorites);
  };

  return (
    <Button onClick={handleAddToFavorites} colorScheme="teal" size="sm" _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}>
      <FaHeart style={{ fill: isFavorite ? 'red' : 'black' }} />
    </Button>
  );
};

export default ButtonFavorite;
