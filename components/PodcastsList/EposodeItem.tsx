"use client";

import usePlayer from "@/hooks/usePlayer";
import { Podcast } from "@/types";

type EpisodeLinkProps = {
	children: string;
	url: Podcast["audio_url"];
};

export function EpisodeLink({ url, children }: EpisodeLinkProps) {
	const player = usePlayer();
	const playPodcastEpisode = () => {
		player.setCurrentlyPlaying({ title: children, url: url });
	};
	
	return <div onClick={() => playPodcastEpisode()}>{children}</div>;
}
