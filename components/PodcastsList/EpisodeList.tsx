import { Podcast } from "@/types";
import { Melodrama } from "@/fonts";
type PodcastType = { podcasts: Podcast[] };
import { EpisodeLink } from "./EposodeItem";
export function EpisodeList({ podcasts }: PodcastType) {
	return (
		<div
			className={`${Melodrama.className} w-full h-full flex justify-center`}
		>
			<ul className="flex flex-col gap-y-4 text-xl -mr-8 sm:text-3xl w-80 pl-28 pr-12 pt-36 sm:w-[28rem] sm:pl-36 sm:pr-12 sm:pt-44 bg-contain bg-no-repeat aspect-[9/13] bg-[url('../public/Frame.svg')]">
				{podcasts.length > 0
					? podcasts.map((episode) => (
							<li
								key={episode.audio_url}
								className="sm:px-4 sm:py-2 cursor-pointer hover:underline decoration-1 decoration-orange-500 underline-offset-2"
							>
								<EpisodeLink url={episode.audio_url}>
									{episode.title}
								</EpisodeLink>
							</li>
					  ))
					: "No podcasts"}
			</ul>
		</div>
	);
}
