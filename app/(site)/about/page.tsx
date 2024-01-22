import getPost from "@/actions/getPost";
import { PageTitle } from "@/components/PageTitle";
import { Melodrama } from "@/fonts";
import Blocks from "editorjs-blocks-react-renderer";

export default async function About() {
	const post = await getPost("about");
	const dataFromEditor = {
		time: 1670233667511,
		blocks: post.post_blocks,
		version: "2.26.0",
	};
	return (
		<>
			<PageTitle>About</PageTitle>
			<article className="max-w-xl w-full mx-auto">
				<Blocks data={dataFromEditor} config={defaultConfigs} />
			</article>
		</>
	);
}

const defaultConfigs = {
	code: {
		className: "",
	},
	delimiter: {
		className: "",
	},
	embed: {
		className: "",
		rel: "noreferer nofollower external", // Generates an <a> if not able to receive an "embed" property
		sandbox: undefined,
	},
	header: {
		className: `${Melodrama.className} text-6xl mb-4`,
	},
	image: {
		className: "",
		actionsClassNames: {
			stretched: "image-block--stretched",
			withBorder: "image-block--with-border",
			withBackground: "image-block--with-background",
		},
	},
	list: {
		className: "",
	},
	paragraph: {
		className: "text-3xl",
	},
	quote: {
		className: "",
		actionsClassNames: {
			alignment: "text-align-{alignment}", // This is a substitution placeholder: left or center.
		},
	},
	table: {
		className: "",
	},
};
