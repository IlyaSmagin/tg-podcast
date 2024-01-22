"use client";
import { useState, useRef, useCallback, Ref } from "react";
import { createReactEditorJS } from "react-editor-js";
// @ts-ignore
import Header from "@editorjs/header";
import { updatePost } from "@/actions/uploadPost";
const EDITOR_JS_TOOLS = {
	header: Header,
};
const ReactEditorJS = createReactEditorJS();
export default function EditorJS() {
	const editorCore = useRef(null);
	const handleInitialize = useCallback((instance: any) => {
		editorCore.current = instance;
		setIsLoading(false);
	}, []);
	async function handleSave() {
		const savedData = await editorCore.current.save();
		const uploaded = await updatePost(savedData.blocks);
	}
	const [isLoading, setIsLoading] = useState(true);
	return (
		<>
			{isLoading ? (
				<Spinner />
			) : (
				<button
					className="absolute bottom-8 right-8 z-10 bg-orange-400/50 hover:bg-orange-400/70 text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					onClick={handleSave}
				>
					Save
				</button>
			)}
			<div className="w-full h-full" id="editor"></div>
			<ReactEditorJS
				holder="editor"
				tools={EDITOR_JS_TOOLS}
				onInitialize={handleInitialize}
				defaultValue={{
					time: 1635603431943,
					blocks: [
						{
							id: "sheNwCUP5A",
							type: "header",
							data: {
								text: "Start from scratch",
								level: 2,
							},
						},
					],
				}}
			/>
		</>
	);
}
function Spinner() {
	return (
		<svg
			className="animate-spin -ml-1 mr-3 h-8 w-8 text-orange-500"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<circle
				className="opacity-25"
				cx="12"
				cy="12"
				r="10"
				stroke="currentColor"
				strokeWidth="4"
			></circle>
			<path
				className="opacity-75"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			></path>
		</svg>
	);
}
