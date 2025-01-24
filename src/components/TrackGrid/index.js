import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Box, SimpleGrid, Flex, Text, Image, Button, Link } from '@chakra-ui/react';
import ButtonAudio from '../ButtonAudio';
import ButtonFavorite from '../ButtonFavorite';
const TrackGrid = ({ tracks, favorites, setFavorites }) => {
    return (_jsx(SimpleGrid, { columns: { base: 1, md: 2 }, mt: "4", children: tracks.map((track, index) => (_jsx(Box, { border: "1px solid #ccc", padding: "10px", py: "4", children: _jsxs(Flex, { alignItems: "center", flexDirection: { base: 'column', md: 'row' }, children: [_jsxs(Text, { fontWeight: "bold", mr: "4", children: ["#", index + 1] }), _jsx(Image, { src: track.album.cover_medium, alt: track.title, boxSize: "100px", mr: "4" }), _jsxs(Box, { flex: "1", textAlign: "left", children: [_jsx(Text, { fontWeight: "bold", children: track.title }), _jsxs(Text, { children: ["Artista: ", track.artist.name] }), _jsxs(Text, { children: ["Dura\u00E7\u00E3o: ", (track.duration / 60).toFixed(2), " min"] }), _jsx(Link, { href: track.link, target: "_blank", children: _jsx(Button, { colorScheme: "teal", size: "sm", mr: "2", children: "Ver Completa" }) }), _jsx(ButtonAudio, { track: track }), _jsx(ButtonFavorite, { track: track, favorites: favorites, setFavorites: setFavorites })] })] }) }, track.id))) }));
};
export default TrackGrid;
