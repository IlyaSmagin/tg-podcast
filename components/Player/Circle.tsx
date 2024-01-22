import { Melodrama } from "@/fonts";
export function Circle({ text }: { text: "play" | "pause" }) {
	let longText: string = text;

	while (longText.length < 20) {
		longText = longText.concat(" ", text);
	}

	return (
		<svg
			className={`text-xl md:w-auto md:h-auto w-32 h-32 turn backdrop-blur rounded-full font-thin ${Melodrama.className}`}
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			width={300}
			height={300}
			viewBox="0 0 100 100"
			xmlSpace="preserve"
		>
			<g>
				{/* <path
					id="circle"
					d="
      M 15, 50
      a 35,35 0 1,0 70,0
      a 35,35 0 1,0 -70,0
    "
					fill="none"
				/> */}
				<path
					id="circle"
					d="
      M 15, 50
a 35,35 0 1,1 70,0
a 35,35 0 1,1 -70,0
    "
					fill="none"
				/>
				<text textLength={212} fill="currentColor">
					<textPath textLength={212} xlinkHref="#circle">
						{longText + " "}
					</textPath>
				</text>
			</g>
		</svg>
	);
}
