import { Button } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
import { useState, useEffect } from 'react';

interface ButtonFavoriteProps {
  track: any;
  favorites: any[];
  setFavorites: (favorites: any[]) => void;
}

const ButtonFavorite = ({ track, favorites, setFavorites }: ButtonFavoriteProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favorites.some(favorite => favorite.id === track.id));
  }, [favorites, track]);

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
    <Button onClick={handleAddToFavorites} colorScheme="teal" size="sm">
      <FaHeart color={isFavorite ? 'red' : 'black'} />
    </Button>
  );
};

export default ButtonFavorite;
