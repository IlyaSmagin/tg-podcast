import { Podcast } from "@/types";
import { createClient } from "@supabase/supabase-js";
//  <song:Promise<Podcast[]>>
async function getPodcasts() {
	const supabase = createClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	);

	const { data, error } = await supabase
		.from("Podcasts")
		.select("*")
		.order("created_at", { ascending: false });
	if (error) {
		console.log(error);
	}
	return (data as Podcast[]) || [];
}
export default getPodcasts;
