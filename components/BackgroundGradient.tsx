"use client";
import { useState, useEffect } from "react";

export function BackgroundGradient() {
	const screenDimentions = useClientSide(getWindowWidthHeight) ?? {
		screenWidth: 1920,
		screenHeight: 1080,
	};

	const mousePosition = useMousePosition();

	const mouseX = Math.round(
		(mousePosition.x / screenDimentions.screenWidth) * 100
	);
	const mouseY = Math.round(
		(mousePosition.y / screenDimentions.screenHeight) * 100
	);
	return (
		<div
			style={
				{
					"--mouseX": `${mouseX}%`,
					"--mouseY": `${mouseY}%`,
				} as React.CSSProperties
			}
			className="bg"
		>
			<div className="gradient"></div>
			<div className="overlay"></div>
		</div>
	);
}
function getWindowWidthHeight() {
	return { screenWidth: window.innerWidth, screenHeight: window.innerHeight };
}

const useClientSide = (func: Function) => {
	const [value, setValue] = useState(null);
	useEffect(() => {
		setValue(func());
	}, [func]);
	return value;
};

const useMousePosition = () => {
	const [mousePosition, setMousePosition] = useState<{
		x: number;
		y: number;
	}>({
		x: 50,
		y: 50,
	});

	useEffect(() => {
		const updateMousePosition = (ev: MouseEvent) => {
			setMousePosition({ x: ev.clientX, y: ev.clientY });
		};

		window.addEventListener("mousemove", updateMousePosition);

		return () => {
			window.removeEventListener("mousemove", updateMousePosition);
		};
	}, []);

	return mousePosition;
};
