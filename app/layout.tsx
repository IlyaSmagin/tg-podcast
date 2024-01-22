import type { Metadata } from "next";
import "../styles/globals.css";

import Sidebar from "../components/Sidebar/Sidebar";
import { Player } from "../components/Player/Player";
import { BackgroundGradient } from "@/components/BackgroundGradient";

import { Nunito } from "@/fonts";
import readUserSession from "@/actions/sessions";

export const metadata: Metadata = {
	title: "Podcast App",
	description: "Pod",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const routesInit = [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Search",
			href: "/search",
		},
		{
			label: "About",
			href: "/about",
		},
	];
	const { data } = await readUserSession();
	if (data.session) {
		routesInit.push({ label: "Admin", href: "/admin" });
		// routesInit.push({ label: "LogOut", href: "/auth" });
	}
	return (
		<html lang="en">
			<body
				className={`${Nunito.className} relative flex flex-col md:flex-row w-full h-full`}
			>
				<BackgroundGradient />
				<Sidebar routesInit={routesInit}></Sidebar>
				<main className="pt-44 md:pt-8 flex w-full rounded-xl h-full overflow-y-auto flex-col justify-start gap-y-6 md:gap-y-12 items-end p-4 md:p-8 text-xl">
					{children}
				</main>
				<Player />
			</body>
		</html>
	);
}
