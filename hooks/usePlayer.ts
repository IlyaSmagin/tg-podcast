import { create } from "zustand";

interface PlayerStore {
	// url instead of id
	episodes: string[];
	currentlyPlaying?: { title: string; url: string };
	setCurrentlyPlaying: (episode: { title: string; url: string}) => void;
	setEpisodes: (episodes: string[]) => void;
	reset: () => void;
}

const usePlayer = create<PlayerStore>((set) => ({
	episodes: [],
	currentlyPlaying: undefined,
	setCurrentlyPlaying: (episode: { title: string; url: string }) =>
		set({ currentlyPlaying: episode }),
	setEpisodes: (episodes: string[]) => set({ episodes }),
	reset: () => set({ episodes: [], setCurrentlyPlaying: undefined }),
}));

export default usePlayer;
