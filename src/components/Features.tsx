"use client";

import { motion } from "motion/react";
import { FeatureSection } from "./feature-section";
import { heroContainer, heroItem } from "./animations/hero";

export default function Features() {
	return (
		<motion.section
			variants={heroContainer}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
			className="flex items-center flex-col mt-20 font-sans "
			id="features"
		>
			<div
				className="absolute max-h-screen inset-0 -z-10 bg-cover bg-center fade-edges-strong blur-lg contrast-130 top-0"
				style={{ backgroundImage: "url('/mesh-529.png')" }}
			/>
			<motion.h1
				variants={heroItem}
				className="md:text-7xl text-5xl text-center leading-none font-medium mt-9"
			>
				Features :{" "}
			</motion.h1>
			<motion.p
				variants={heroItem}
				className="max-w-175 text-center text-xl md:text-2xl mt-1 leading-10"
			>
				Military-Grade Protection in Your Pocket
			</motion.p>
			<FeatureSection />
		</motion.section>
	);
}
