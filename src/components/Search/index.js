import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, Input } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { searchTracks, fetchTopTracks } from '../../services/api';
const Search = ({ setTracks, searchTerm, setSearchTerm }) => {
    const handleSearch = () => {
        if (searchTerm.trim() === '') {
            fetchTopTracks().then(setTracks);
            return;
        }
        searchTracks(searchTerm)
            .then(setTracks)
            .catch(error => {
            console.error('Error fetching search data:', error);
        });
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };
    return (_jsxs(Box, { mb: "4", children: [_jsx(Input, { placeholder: "Search for a track or artist", value: searchTerm, onChange: e => setSearchTerm(e.target.value), onKeyPress: handleKeyPress, width: "80%" }), _jsx(Button, { onClick: handleSearch, children: _jsx(FaSearch, {}) })] }));
};
export default Search;
