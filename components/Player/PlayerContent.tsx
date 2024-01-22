"use client";
// @ts-ignore
import useSound from "use-sound";
import { useEffect, useState } from "react";

import { Melodrama } from "@/fonts";

import { Podcast } from "@/types";
import { Circle } from "./Circle";
import usePlayer from "@/hooks/usePlayer";

type PlayerContentProps = {
	title: string;
	url: string;
};
function PlayerContent(episode: PlayerContentProps) {
	const [volume, setVolume] = useState(1);
	const [isPlaying, setIsPlaying] = useState(false);
	const PlayOrPause = isPlaying ? "pause" : "play";

	const [play, { pause, sound }] = useSound(episode.url, {
		volume: volume,
		onplay: () => setIsPlaying(true),
		onend: () => {
			setIsPlaying(false);
		},
		onpause: () => setIsPlaying(false),
		format: ["mp3"],
	});

	useEffect(() => {
		sound?.play();

		return () => {
			sound?.unload();
		};
	}, [sound]);

	const handlePlay = () => {
		if (!isPlaying) {
			play();
		} else {
			pause();
		}
	};

	const toggleMute = () => {
		if (volume === 0) {
			setVolume(1);
		} else {
			setVolume(0);
		}
	};

	return (
		<div className="flex text-6xl flex-row justify-between md:pl-36 md:pr-56 w-full items-end overflow-hidden  h-full">
			<div
				onClick={handlePlay}
				className="absolute -bottom-8 -right-8 md:-right-20 md:-bottom-20 cursor-pointer"
			>
				<Circle text={PlayOrPause} />
			</div>
			<div className="flex-1 flex flex-col">
				<div className="text-xl hidden md:block">
					Currently playing:
				</div>
				<div
					className={`${Melodrama.className} text-4xl md:text-6xl p-4`}
				>
					{episode.title}
				</div>
			</div>
			<div
				onClick={toggleMute}
				className={`${Melodrama.className} text-4xl cursor-pointer hidden md:block`}
			>
				{volume > 0 ? "mute" : "unmute"}
			</div>
		</div>
	);
}

export default PlayerContent;
