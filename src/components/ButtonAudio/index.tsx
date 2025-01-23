import { ButtonAudioProps } from '../../types';
import { Button } from '@chakra-ui/react';
import { FaPause, FaPlay } from 'react-icons/fa';

const ButtonAudio = ({ track, playingTrack, setPlayingTrack, audio, setAudio }: ButtonAudioProps) => {
  const handlePlayPause = () => {
    if (playingTrack === track.id) {
      audio.pause();
      setPlayingTrack(null);
    } else {
      if (audio) {
        audio.pause();
      }
      const newAudio = new Audio(track.preview);
      newAudio.play();
      setAudio(newAudio);
      setPlayingTrack(track.id);
    }
  };

  return (
    <Button onClick={handlePlayPause} colorScheme="teal" size="sm" mr="2">
      {playingTrack === track.id ? <FaPause color="black" /> : <FaPlay color="black" />}
    </Button>
  );
};

export default ButtonAudio;
