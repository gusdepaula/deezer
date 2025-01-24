export interface Track {
  id: number;
  title: string;
  artist: {
    name: string;
  };
  album: {
    cover_medium: string;
  };
  duration: number;
  preview: string;
  link: string;
}

export interface MainProps {
  tracks: Track[];
  setTracks: (tracks: Track[]) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export interface ButtonFavoriteProps {
  track: Track;
  favorites: Track[];
  setFavorites: (favorites: Track[]) => void;
}

export interface ButtonAudioProps {
  track: Track;
}

export interface TrackGridProps {
  tracks: Track[];
  favorites: Track[];
  setFavorites: (favorites: Track[]) => void;
}

export interface SearchProps {
  setTracks: (tracks: Track[]) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export interface AsideProps {
  resetTracks: () => void;
}
