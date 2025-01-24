import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
const ButtonFavorite = ({ track, favorites, setFavorites }) => {
    const isFavorite = favorites.some(favorite => favorite.id === track.id);
    const handleAddToFavorites = () => {
        let updatedFavorites;
        if (isFavorite) {
            updatedFavorites = favorites.filter(favorite => favorite.id !== track.id);
        }
        else {
            updatedFavorites = [...favorites, track];
        }
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        console.log(`Atualizando favoritos:`, updatedFavorites);
    };
    return (_jsx(Button, { onClick: handleAddToFavorites, colorScheme: "teal", size: "sm", children: _jsx(FaHeart, { style: { fill: isFavorite ? 'red' : 'black' } }) }));
};
export default ButtonFavorite;
