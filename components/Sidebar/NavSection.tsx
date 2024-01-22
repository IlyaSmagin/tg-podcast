"use client";

import { ChildrenClassNameProps } from "@/types";

function NavSection({ children, className }: ChildrenClassNameProps) {
	return (
		<section
			className={`h-fit w-full py-1.5 px-3 md:py-4 md:px-8 ${
				className ?? ""
			}`}
		>
			{children}
		</section>
	);
}

export default NavSection;
