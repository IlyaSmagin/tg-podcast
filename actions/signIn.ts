"use server";

import { signInWithEmailAndPassword } from "@/actions/authActions";
import { z } from "zod";

const signInSchema = z.object({
	email: z.string().email({ message: "Invalid email address" }),
	password: z.string().min(6).max(100),
});

export async function handleSignIn(formData: FormData) {
	const email = formData.get("email");
	const password = formData.get("password");

	const unvalidatedFormData = { email, password };
	const safeFormData = signInSchema.safeParse(unvalidatedFormData);

	if (!safeFormData.success) {
		//TODO more funtional style?
		const errorlist = safeFormData.error.issues;
		let errorMessageForClient = { error: "" };

		errorlist.forEach((error) => {
			errorMessageForClient.error += " " + error.message;
		});
		return errorMessageForClient;
	}

	const { error } = await signInWithEmailAndPassword(safeFormData.data);
	if (error) {
		console.error(error);
		return { error: "Login or password is incorrect" };
	} else {
		console.log("loggin in...");
	}
}
