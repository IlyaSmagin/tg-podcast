"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import NavSection from "./NavSection";
import NavLink from "./NavLink";

import { Melodrama } from "@/fonts";
type SidebarRoutes = {
	label: string;
	href: string;
	active?: boolean;
}[];

function Sidebar({ routesInit }: { routesInit: SidebarRoutes }) {
	const pathname = usePathname();

	const routes = useMemo(
		() =>
			routesInit.map((route) => {
				return { ...route, active: pathname === route.href };
			}),
		[pathname]
	);

	return (
		<nav className="flex w-full h-fit md:h-full backdrop-blur-md md:backdrop-blur-none fixed z-10 inset-x-0 top-0 md:relative md:w-36 flex-row md:flex-col gap-y-1 border-b-[1px] md:border-r-[1px] md:border-b-0 border-orange-400/30">
			<NavSection>
				<ul className="flex flex-col rounded-xl gap-y-0 md:gap-y-4 h-full">
					{routes.map((path) => (
						<li className="w-full h-fit" key={path.label}>
							<NavLink {...path} />
						</li>
					))}
					{/* <LoginProtectedLink /> */}
				</ul>
			</NavSection>
			<NavSection
				className={`hover:text-orange-600 h-fit mt-1.5 text-right md:text-left md:mt-0 md:h-full shrink  transition-colors [writing-mode:unset] md:[writing-mode:vertical-lr] md:rotate-180 overflow-y-auto justify-end md:text-4xl ${Melodrama.className}`}
			>
				For & by Anikkee
			</NavSection>
		</nav>
	);
}

export default Sidebar;
