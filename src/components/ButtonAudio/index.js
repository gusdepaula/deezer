import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from '@chakra-ui/react';
import { FaPause, FaPlay } from 'react-icons/fa';
import { useEffect, useState } from 'react';
const ButtonAudio = ({ track }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio, setAudio] = useState(null);
    useEffect(() => {
        if (audio) {
            audio.addEventListener('ended', () => setIsPlaying(false));
            return () => {
                audio.removeEventListener('ended', () => setIsPlaying(false));
            };
        }
    }, [audio]);
    const handlePlayPause = () => {
        if (isPlaying) {
            audio?.pause();
        }
        else {
            const newAudio = new Audio(track.preview);
            newAudio.play();
            setAudio(newAudio);
        }
        setIsPlaying(!isPlaying);
    };
    return (_jsx(Button, { onClick: handlePlayPause, colorScheme: "teal", size: "sm", mr: "2", children: isPlaying ? _jsx(FaPause, {}) : _jsx(FaPlay, {}) }));
};
export default ButtonAudio;
