// animations/hero.ts
import { Variants } from "motion";

export const heroContainer: Variants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.12,
			delayChildren: 0.15,
		},
	},
};

export const heroItem: Variants = {
	hidden: {
		opacity: 0,
		y: 32,
		filter: "blur(10px)",
	},
	visible: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: {
			duration: 0.6,
			ease: "easeOut",
		},
	},
};
