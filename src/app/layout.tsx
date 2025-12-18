import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Orbitron } from "next/font/google";
import "./globals.css";

import Navigation from "@/components/Navigation";
import BackgroundPattern from "@/components/BackgroundPattern";
import ProblemBackground from "@/components/ProblemBackground";
import SectionBackground from "@/components/SectionBackground";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const orbitron = Orbitron({
	variable: "--font-orbitron",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Qrspect",
	description:
		"Your personal security guard against malicious QR codes. Instantly detect phishing links, malware, and scams before they compromise your device.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased dark py-2 min-h-screen`}
			>
				<BackgroundPattern />
				<ProblemBackground />
				<Navigation />
				<main>{children}</main>
			</body>
		</html>
	);
}
