"use client";
import usePlayer from "@/hooks/usePlayer";

import PlayerContent from "./PlayerContent";

export function Player() {
	const player = usePlayer();

	if (!player.currentlyPlaying) {
		return null;
	}
	return (
		<div className="fixed inset-x-0 bottom-0 h-28">
			<PlayerContent
				key={player.currentlyPlaying.title}
				title={player.currentlyPlaying.title}
				url={player.currentlyPlaying.url}
			/>
		</div>
	);
}
