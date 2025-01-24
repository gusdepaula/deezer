import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import TrackGrid from '../components/TrackGrid';
const Favorites = () => {
    const [favorites, setFavorites] = useState(() => {
        // Carregar favoritos do localStorage
        const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        console.log('Favoritos carregados:', storedFavorites);
        return storedFavorites;
    });
    return (_jsxs(Box, { as: "main", width: { base: '100%', md: '100%' }, p: "4", children: [_jsx(Heading, { size: "lg", mt: "4", children: "Favorites" }), favorites.length === 0 ? (_jsx(Text, { mt: "4", children: "No favorite tracks found." })) : (_jsx(TrackGrid, { tracks: favorites, favorites: favorites, setFavorites: setFavorites }))] }));
};
export default Favorites;
