"use server";
import { createClient } from "@supabase/supabase-js";

import createSupabaseServerClient from "./server";
type PostType = { type: string; data: object }[];
//TODO generalize update post and pass post name
export async function updatePost(Post: PostType) {
	const supabase = await createSupabaseServerClient();
	try {
		const { data, error } = await supabase
			.from("Posts")
			.update({ post_blocks: Post })
			.eq("post_name", "about")
			.select();
		if (error) {
			throw error;
		}
	} catch (error) {
		console.log(error);
	} finally {
		console.log("ended updating post:", "about");
	}
}
