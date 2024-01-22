import { EpisodeList } from "@/components/PodcastsList/EpisodeList";
import { PageTitle } from "@/components/PageTitle";
import getPodcasts from "@/actions/getPodcasts";
export default async function Home() {
	const podcasts = await getPodcasts();
	return (
		<>
			<PageTitle>Podcasts</PageTitle>
			<EpisodeList podcasts={podcasts} />
		</>
	);
}
