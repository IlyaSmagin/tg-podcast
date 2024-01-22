"use server";

import { redirect } from "next/navigation";
import createSupabaseServerClient from "./server";
import { log } from "console";

export async function SignOut() {
	const supabase = await createSupabaseServerClient();
	const logout = await supabase.auth.signOut();
	console.log(logout);
	return redirect("/auth");
}
