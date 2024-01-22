import Link from "next/link";

type NavLinkProps = {
	label: string;
	href: string;
	active: boolean;
};

function NavLink({ label, href, active }: NavLinkProps) {
	return (
		<Link
			className={`inline-block p-1 md:p-2 cursor-pointer font-medium text-lg w-full h-auto ${
				active
					? "underline decoration-orange-500 underline-offset-2"
					: "text-gray-900 hover:text-orange-500 transition-colors"
			}`}
			href={href}
		>
			{label}
		</Link>
	);
}
export default NavLink;
