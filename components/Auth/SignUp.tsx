import { handleSignUp } from "@/actions/signUp";

export async function SignUp() {
	return (
		<>
			<article className="w-full h-full flex justify-center">
				<form className="w-full md:w-80" action={handleSignUp}>
					<label
						htmlFor="email"
						className="flex flex-col gap-y-2 mb-8"
					>
						E-mail
						<input
							type="email"
							name="email"
							id="email"
							className="w-full placeholder:text-black placeholder:text-ellipsis border-black/80 bg-inherit border-b-2 focus:outline-none focus:border-orange-300/80 text-md"
						/>
					</label>
					<label
						htmlFor="password"
						className="flex flex-col gap-y-2 mb-8"
					>
						Password
						<input
							type="password"
							name="password"
							id="password"
							className="w-full placeholder:text-black placeholder:text-ellipsis border-black/80 bg-inherit border-b-2 focus:outline-none focus:border-orange-300/80 text-md"
						/>
					</label>
					<label
						htmlFor="confirm"
						className="flex flex-col gap-y-2 mb-8"
					>
						Confirm password
						<input
							type="password"
							name="confirm"
							id="confirm"
							className="w-full placeholder:text-black placeholder:text-ellipsis border-black/80 bg-inherit border-b-2 focus:outline-none focus:border-orange-300/80 text-md"
						/>
					</label>
					<button
						type="submit"
						className="bg-orange-400/50 hover:bg-orange-400/70 text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					>
						Sign Up
					</button>
				</form>
			</article>
		</>
	);
}
