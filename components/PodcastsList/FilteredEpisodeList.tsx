"use client";

import { useState } from "react";
import { Podcast } from "@/types";
import { EpisodeList } from "@/components/PodcastsList/EpisodeList";

import { Melodrama } from "@/fonts";

//TODO Change to SearchableEpisodeList

export function FilteredEpisodeList({ podcasts }: { podcasts: Podcast[] }) {
	const [searchQuery, setSearchQuery] = useState("");
	let inputFontSize = 32;
	if (searchQuery.length > 0 && searchQuery.length < 12) {
		inputFontSize = 110 + (50 - 10 * searchQuery.length);
	}
	function filteredPodcasts(): Podcast[] {
		const searchWords = searchQuery.trim().toLocaleLowerCase().split(" ");

		const filteredArray = podcasts.filter((podcast) => {
			const words = podcast.title.toLocaleLowerCase().split(" ");

			return searchWords.some((searchWord) =>
				words.some((word) => word.startsWith(searchWord))
			);
		});

		return filteredArray;
	}
	return (
		<>
			<input
				className={`w-full placeholder:text-black placeholder:text-ellipsis text-right border-black bg-inherit py-2 border-b-2 focus:outline-none focus:border-orange-300/80 text-md ${Melodrama.className}`}
				placeholder="Type here..."
				style={{ fontSize: `${inputFontSize}px` }}
				autoFocus={true}
				onChange={(e) => setSearchQuery(e.target.value)}
				type="text"
				name="search"
			/>
			<EpisodeList podcasts={filteredPodcasts()} />
		</>
	);
}
