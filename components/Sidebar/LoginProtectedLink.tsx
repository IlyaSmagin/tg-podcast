import readUserSession from "@/actions/sessions";
import React from "react";
import Link from "next/link";

async function LoginProtectedLink() {
	const { data } = await readUserSession();
	if (data.session) {
		return <Link href="/admin">Admin</Link>;
	}
}
export default LoginProtectedLink;
