"use client";

import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { ScanQrCode, Link, ShieldOff, Target } from "lucide-react";
import Letter3DSwap from "./fancy/text/letter-3d-swap";
import { heroContainer, heroItem } from "./animations/hero";

const transitionVariants = {
	item: {
		hidden: {
			opacity: 0,
			filter: "blur(12px)",
			y: 12,
		},
		visible: {
			opacity: 1,
			filter: "blur(0px)",
			y: 0,
			transition: {
				type: "spring",
				bounce: 0.3,
				duration: 1.5,
			},
		},
	},
};

export default function Hero() {
	return (
		<motion.section
			variants={heroContainer}
			initial="hidden"
			animate="visible"
			className="flex items-center flex-col mt-20 font-sans px-3"
		>
			<motion.div variants={heroItem} className="mb-3">
				<Badge variant="secondary">
					<ScanQrCode />
					Stop QR Code Scams Before They Start.
				</Badge>
			</motion.div>
			<motion.h1
				variants={heroItem}
				className=" header-size text-center leading-none font-medium"
			>
				Scan with{" "}
				<span className="font-orbitron italic bg-linear-to-t from-zinc-400 to-white bg-clip-text text-transparent">
					Confidence.
				</span>
			</motion.h1>
			<motion.p
				variants={heroItem}
				className="max-w-175 text-center text-xl md:text-2xl mt-14 leading-10 mix-blend-exclusion"
			>
				Your personal security guard against malicious QR codes.
				Instantly detect{" "}
				<Badge variant="secondary">
					<Link />
					<span className="text-center text-base">
						phishing links
					</span>
				</Badge>{" "}
				,{" "}
				<Badge variant="outline">
					<ShieldOff />
					<span className="text-center text-base">malware</span>
				</Badge>{" "}
				, and{" "}
				<Badge variant="default">
					<Target />
					<span className="text-center text-base">scams</span>
				</Badge>{" "}
				before they compromise your{" "}
				<span className="underline">device</span> or{" "}
				<span className="underline">data</span> .
			</motion.p>

			<motion.div variants={heroItem}>
				<Button size="lg" className="cursor-pointer mt-12 text-lg">
					Protect Yourself Now
				</Button>
			</motion.div>
		</motion.section>
	);
}
