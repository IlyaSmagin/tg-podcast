import { PageTitle } from "@/components/PageTitle";
import { uploadPodcast } from "@/actions/uploadPodcast";
import { SubmitServerButton } from "@/components/Auth/SubmitServerButton";
import readUserSession from "@/actions/sessions";
import { redirect } from "next/navigation";

export default async function UploadPodcast() {
	const { data } = await readUserSession();
	if (!data.session) {
		return redirect("/auth");
	}
	return (
		<>
			<PageTitle>New podcast</PageTitle>
			<article className="w-full h-full flex justify-center items-center">
				<UploadForm />
			</article>
		</>
	);
}

function UploadForm() {
	return (
		<form
			action={uploadPodcast}
			className="bg-white/30 rounded-lg shadow-2xl p-3 md:p-6 max-w-md w-full"
		>
			<h2 className="text-2xl font-bold mb-4">Upload Files:</h2>
			<label htmlFor="fileName" className="flex flex-col gap-y-2 mb-8">
				Name
				<input
					type="text"
					id="fileName"
					name="fileName"
					className="w-full placeholder:text-black placeholder:text-ellipsis border-black/80 bg-inherit border-b-2 focus:outline-none focus:border-orange-300/80 text-md"

					// className=" focus:shadow-lg w-full border border-orange-400/30 bg-white/50 focus:bg-white rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-orange-400/30"
				/>
			</label>
			<label htmlFor="file" className="flex flex-col gap-y-2 mb-8">
				MP3 File
				<input
					name="file"
					type="file"
					id="file"
					className="w-min block text-base text-grey-500  md:file:mr-5 file:py-2 file:px-6 file:rounded-full file:border-0 file:text-base file:font-medium file:bg-amber-50 file:text-amber-500 hover:file:cursor-pointer hover:file:bg-amber-100 hover:file:text-amber-600"
				/>
			</label>
			<SubmitServerButton className="bg-orange-400/50 hover:bg-orange-400/70 text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
				Post
			</SubmitServerButton>
		</form>
	);
}
