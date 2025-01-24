import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import Search from '../components/Search';
import TrackGrid from '../components/TrackGrid';
const Main = ({ tracks, setTracks, searchTerm, setSearchTerm }) => {
    const [favorites, setFavorites] = useState(() => {
        // Carregar favoritos do localStorage
        const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        console.log('Favoritos carregados:', storedFavorites);
        return storedFavorites;
    });
    return (_jsxs(Box, { as: "main", width: { base: '100%', md: '100%' }, p: "4", children: [_jsx(Search, { setTracks: setTracks, searchTerm: searchTerm, setSearchTerm: setSearchTerm }), _jsx(Heading, { size: "lg", mt: "4", children: searchTerm ? `Results for "${searchTerm}"` : 'Top Tracks' }), _jsx(TrackGrid, { tracks: tracks, favorites: favorites, setFavorites: setFavorites })] }));
};
export default Main;
