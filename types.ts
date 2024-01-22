import { ReactNode } from "react";

export type Podcast = {
	id: string;
	title: string;
	audio_url: string;
};

export type ChildrenClassNameProps = {
	children: ReactNode;
	className?: string;
};
export type Post = {
	id: number;
	created_at: string;
	post_blocks: { type: string; data: object }[];
	post_name: string;
};
