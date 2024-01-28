"use server";

import { signUpWithEmailAndPassword } from "@/actions/authActions";
import { z } from "zod";

const signUpSchema = z
	.object({
		email: z.string().email({ message: "Invalid email address" }),
		password: z.string(),
		confirm: z.string(),
	})
	.refine((data) => data.password === data.confirm, {
		message: "Passwords don't match",
		path: ["confirm"], // path of error
	});

export async function handleSignUp(formData: FormData) {
	const email = formData.get("email");
	const password = formData.get("password");
	const confirm = formData.get("confirm");

	const unvalidatedFormData = { email, password, confirm };
	const safeFormData = signUpSchema.safeParse(unvalidatedFormData);

	if (!safeFormData.success) {
		//TODO more funtional style?
		const errorlist = safeFormData.error.issues;
		let errorMessageForClient = { error: "" };

		errorlist.forEach((error) => {
			errorMessageForClient.error += " " + error.message;
		});
		return errorMessageForClient;
	}

	const { error } = await signUpWithEmailAndPassword(safeFormData.data);
	if (error) {
		console.error(error);
		return {
			error: "Email, password or conformation password is incorrect",
		};
	} else {
		console.log("new user sign up...");
	}
}
