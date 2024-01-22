import { Post } from "@/types";
import { createClient } from "@supabase/supabase-js";
//  <song:Promise<Podcast[]>>
async function getPost(post_name: string) {
	const supabase = createClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	);

	const { data, error } = await supabase
		.from("Posts")
		.select("*")
		.eq("post_name", post_name)
		.single();
	if (error) {
		console.log(error);
	}
	return (data as Post) || {};
}
export default getPost;
