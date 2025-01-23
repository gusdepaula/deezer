import { Button } from '@chakra-ui/react';
import { FaPause, FaPlay } from 'react-icons/fa';
import { ButtonAudioProps } from '../../types';

const ButtonAudio = ({ track, playingTrack, setPlayingTrack, audio, setAudio }: ButtonAudioProps) => {
  const handlePlayPause = () => {
    if (playingTrack?.id === track.id) {
      audio?.pause();
      setPlayingTrack(null);
    } else {
      if (audio) {
        audio.pause();
      }
      const newAudio = new Audio(track.preview);
      newAudio.play();
      setAudio(newAudio);
      setPlayingTrack(track);
    }
  };

  return (
    <Button onClick={handlePlayPause} colorScheme="teal" size="sm" mr="2">
      {playingTrack?.id === track.id ? <FaPause color="black" /> : <FaPlay color="black" />}
    </Button>
  );
};

export default ButtonAudio;
