import { Button } from '@chakra-ui/react';
import { FaPause, FaPlay } from 'react-icons/fa';
import { ButtonAudioProps } from '../../types';
import { useEffect, useState } from 'react';

const ButtonAudio = ({ track }: ButtonAudioProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

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
    } else {
      const newAudio = new Audio(track.preview);
      newAudio.play();
      setAudio(newAudio);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Button onClick={handlePlayPause} colorScheme="teal" size="sm" mr="2">
      {isPlaying ? <FaPause /> : <FaPlay />}
    </Button>
  );
};

export default ButtonAudio;
