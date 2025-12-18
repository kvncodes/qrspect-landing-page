"use client";

import { motion } from "motion/react";
import { heroContainer, heroItem } from "./animations/hero";
import { PhoneCarousel } from "./ui/phone-carousel";

export default function HowItWorks() {
	const exampleImages = [
		{
			src: "/design/phone-ui-2.JPG",
			alt: "Behance app on iPhone",
		},
		{
			src: "/design/phone-ui.JPG",
			alt: "Notion app on iPhone",
		},
		{
			src: "/design/phone-ui-3.JPG",
			alt: "One app on iPhone",
		},
		{
			src: "/design/phone-ui-4.JPG",
			alt: "Reddit app on iPhone",
		},
	];

	return (
		<motion.section
			variants={heroContainer}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
			className="flex items-center flex-col mt-20 font-sans "
			id="how-it-works"
		>
			<div
				className="absolute max-h-screen inset-0 -z-10 bg-cover bg-center fade-edges-strong blur-lg contrast-130 top-295 opacity-50"
				style={{ backgroundImage: "url('/mesh-219.png')" }}
			/>
			<div
				className="absolute max-h-screen inset-0 -z-10 bg-cover bg-center fade-edges-strong blur-lg contrast-130 top-0"
				style={{ backgroundImage: "url('/mesh-529.png')" }}
			/>
			<motion.h1
				variants={heroItem}
				className="md:text-7xl text-5xl text-center leading-none font-medium mt-9"
			>
				How it Works ?{" "}
			</motion.h1>
			<motion.p
				variants={heroItem}
				className="max-w-175 text-center text-xl md:text-2xl mt-14 leading-10"
			>
				Our app acts as your digital bodyguard, analyzing every QR code
				before you visit the link. We check for phishing attempts,
				suspicious redirects, malware distribution sites, and known scam
				patterns—giving you a clear safety verdict in milliseconds.
			</motion.p>

			<PhoneCarousel images={exampleImages} />
		</motion.section>
	);
}
