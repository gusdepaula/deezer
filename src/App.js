import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import { Flex, Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Favorites from './pages/favorites';
import Aside from './components/Aside';
import Main from './pages/main';
import { fetchTopTracks } from './services/api';
import { useState, useEffect } from 'react';
function App() {
    const [tracks, setTracks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        fetchTopTracks().then(setTracks);
    }, []);
    const resetTracks = () => {
        fetchTopTracks().then(setTracks);
        setSearchTerm('');
    };
    return (_jsxs(Flex, { height: "100vh", flexDirection: { base: 'column', md: 'row' }, children: [_jsx(Aside, { resetTracks: resetTracks }), _jsx(Box, { flex: "1", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Main, { tracks: tracks, setTracks: setTracks, searchTerm: searchTerm, setSearchTerm: setSearchTerm }) }), _jsx(Route, { path: "/favorites", element: _jsx(Favorites, {}) })] }) })] }));
}
export default App;
