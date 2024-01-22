import { ChildrenClassNameProps } from "@/types";

import { Melodrama } from "@/fonts";

export async function PageTitle({
	children,
	className,
}: ChildrenClassNameProps) {
	return (
		<h1 className={`text-right text-6xl md:text-9xl italic ${Melodrama.className}`}>{children}</h1>
	);
}
