"use server";

import { signUpWithEmailAndPassword } from "@/actions/authActions";
import { z } from "zod";
//todo rename object
const passwordForm = z
	.object({
		email: z.string().email({ message: "Invalid email address" }),
		password: z.string(),
		confirm: z.string(),
	})
	.refine((data) => data.password === data.confirm, {
		message: "Passwords don't match",
		path: ["confirm"], // path of error
	});

passwordForm.safeParse({ email: "",password: "asdf", confirm: "asdf" });

export async function handleSignUp(formData: FormData) {
	const email = formData.get("email");
	const password = formData.get("password");
	const confirm = formData.get("confirm");
	if (email && password && confirm) {
		const result = await signUpWithEmailAndPassword({
			email: email as string,
			password: password as string,
			confirm: password as string,
		});
		const { error } = JSON.parse(result);
		if (error?.message) {
			console.error(error);
		} else {
			console.log("Singing up...");
		}
	} else {
		console.error(
			"email, password or password conformation was not provided",
			formData,
			email
		);
	}
}
