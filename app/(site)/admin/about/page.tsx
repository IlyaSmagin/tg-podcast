import { PageTitle } from "@/components/PageTitle";
import dynamic from "next/dynamic";
import readUserSession from "@/actions/sessions";
import { redirect } from "next/navigation";
const EditorJS = dynamic(() => import("@/components/EditorJS"), {
	ssr: false,
});

export default async function Admin() {
	const { data } = await readUserSession();
	if (!data.session) {
		return redirect("/auth");
	}
	return (
		<>
			<PageTitle>About</PageTitle>
			<article className="w-full h-full flex justify-center items-center">
				<EditorJS />
			</article>
		</>
	);
}
