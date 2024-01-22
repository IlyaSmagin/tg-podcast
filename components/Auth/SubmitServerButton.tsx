"use client";
import { useFormStatus } from "react-dom";
import { ChildrenClassNameProps } from "@/types";

export function SubmitServerButton({
	children,
	className,
}: ChildrenClassNameProps) {
	const { pending } = useFormStatus();

	return (
		<button type="submit" aria-disabled={pending} className={className}>
			{pending ? "Loading..." : children}
		</button>
	);
}
