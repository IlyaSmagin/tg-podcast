"use server";
import { title } from "process";
import createSupabaseServerClient from "./server";
import { error } from "console";
//  <song:Promise<Podcast[]>>
export async function uploadPodcast(formData: FormData) {
	const supabase = await createSupabaseServerClient();
	try {
		const file = formData.get("file");
		const name = formData.get("fileName");
		if (!file || !name) {
			throw new Error("You must upload both mp3 file and it's name.");
		} else {
			const fileName = `${name}.mp3`;
			const { data: url, error: uploadError } = await supabase.storage
				.from("podcasts")
				.upload(fileName, file);

			if (uploadError) {
				throw uploadError;
			}
			const { error: dbError } = await supabase
				.from("Podcasts")
				.insert([
					{
						audio_url: `https://qveyynvhglvrjnbleeav.supabase.co/storage/v1/object/public/podcasts/${fileName}`,
						title: name,
					},
				])
				.select();
			if (dbError) {
				throw dbError;
			}
		}
	} catch (error) {
		console.log(error);
	} finally {
		console.log("ended server action");
	}
}
