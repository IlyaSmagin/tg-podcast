import readUserSession from "@/actions/sessions";
import { redirect } from "next/navigation";
import { Tabs, TabContent, TabSwitch } from "@/components/Auth/AuthFlowTabs";
import { SignIn } from "@/components/Auth/SignIn";
import { SignUp } from "@/components/Auth/SignUp";
import { PageTitle } from "@/components/PageTitle";

export default async function Auth() {
	const { data } = await readUserSession();
	if (data.session) {
		return redirect("/admin");
	}
	return (
		<>
			<PageTitle>Welcome</PageTitle>

			<Tabs defaultActiveTabValue="signin">
				<div className="flex justify-around w-full md:w-80 md:m-auto">
					<TabSwitch tabValue="signin">SignIn</TabSwitch>
					<TabSwitch tabValue="signup">SignUp</TabSwitch>
				</div>
				<TabContent tabValue="signin">
					<SignIn />
				</TabContent>
				<TabContent tabValue="signup">
					<SignUp />
				</TabContent>
			</Tabs>
		</>
	);
}
