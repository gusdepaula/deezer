import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const Aside = ({ resetTracks }) => {
    return (_jsxs(Box, { as: "aside", width: { base: '100%', md: '20%' }, p: "4", height: { base: 'auto', md: '100vh' }, children: [_jsx(Link, { to: '/', onClick: resetTracks, children: _jsx(Image, { src: "/images/logo-deezer.png", alt: "Deezer GusDePaula", mx: "auto", my: { base: '2', md: '4' } }) }), _jsx(Link, { to: '/favorites', onClick: resetTracks, children: "Favorites" })] }));
};
export default Aside;
