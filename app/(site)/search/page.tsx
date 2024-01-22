import { FilteredEpisodeList } from "@/components/PodcastsList/FilteredEpisodeList";
import getPodcasts from "@/actions/getPodcasts";
import { PageTitle } from "@/components/PageTitle";
// TODO think how to mix poems and podcasts in songle search list and is it enven usefull?

export default async function Search() {
	const podcasts = await getPodcasts();
	return (
		<>
			<PageTitle>Search</PageTitle>
			<FilteredEpisodeList podcasts={podcasts} />
		</>
	);
}
