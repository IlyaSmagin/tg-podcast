import { PageTitle } from "@/components/PageTitle";
import readUserSession from "@/actions/sessions";
import { redirect } from "next/navigation";
import { SignOut } from "@/actions/signOut";
import Link from "next/link";

export default async function Admin() {
	const { data } = await readUserSession();
	if (!data.session) {
		return redirect("/auth");
	}
	return (
		<div className="min-h-full flex flex-col items-end gap-8 justify-between">
			<PageTitle>Admin page</PageTitle>
			<Link href={"./admin/podcast"}>
				<PageTitle>New podcast</PageTitle>
			</Link>
			<Link href={"./admin/about"}>
				<PageTitle>Edit About</PageTitle>
			</Link>
			<PageTitle>
				<form className="justify-self-end" action={SignOut}>
					<button type="submit" className="">
						Logout
					</button>
				</form>
			</PageTitle>
		</div>
	);
}
