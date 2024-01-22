"use server";

import { signInWithEmailAndPassword } from "@/actions/authActions";
import { z } from "zod";

export async function handleSignIn(formData: FormData) {
	const loginSchema = z.object({
		email: z.string().email({ message: "Invalid email address" }),
		password: z.string().min(6).max(100)
	})
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;

	if (email && password) {
		const result = await signInWithEmailAndPassword({
			email: email,
			password: password,
		});
		const { error } = JSON.parse(result);
		if (error?.message) {
			console.error(error);
		} else {
			console.log("loggin in...");
		}
	} else {
		console.error("email or password was not provided");
	}
}
