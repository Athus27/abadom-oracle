import { useLottie } from "lottie-react";
import deathAnimation from "../src/assets/animations/death.json";

export function DeathAnimation() {
	const { View } = useLottie(
		{
			animationData: deathAnimation,
			loop: true,
			autoplay: true,
			rendererSettings: {
				preserveAspectRatio: "xMidYMid meet",
			},
		},
		{
			width: "100%",
			height: "100%",
		}
	);

	return View;
}
