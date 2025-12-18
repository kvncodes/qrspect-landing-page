"use client";
import type React from "react";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface Iphone15ProProps extends React.SVGProps<SVGSVGElement> {
	width?: string | number;
	height?: string | number;
	src?: string;
	alt?: string;
}

const Iphone15Pro: React.FC<Iphone15ProProps> = ({
	width = "100%",
	height = "auto",
	src,
	alt = "iPhone screen content",
	className,
	...props
}) => {
	// Generate unique ID for clipPath to avoid conflicts
	const clipPathId = useRef(
		`clip-${Math.random().toString(36).substr(2, 9)}`
	);

	return (
		<div
			className={cn("relative w-full", className)}
			style={{
				maxWidth: typeof width === "number" ? `${width}px` : width,
			}}
		>
			<svg
				viewBox="0 0 433 882"
				preserveAspectRatio="xMidYMid meet"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="w-full h-auto"
				{...props}
			>
				{/* Outer frame */}
				<path
					d="M2 73C2 32.6832 34.6832 0 75 0H357C397.317 0 430 32.6832 430 73V809C430 849.317 397.317 882 357 882H75C34.6832 882 2 849.317 2 809V73Z"
					className="dark:fill-[#DADADA] fill-[#404040]"
				/>
				{/* side nubs */}
				<path
					d="M0 171C0 170.448 0.447715 170 1 170H3V204H1C0.447715 204 0 203.552 0 203V171Z"
					className="dark:fill-[#DADADA] fill-[#404040]"
				/>
				<path
					d="M1 234C1 233.448 1.44772 233 2 233H3.5V300H2C1.44772 300 1 299.552 1 299V234Z"
					className="dark:fill-[#DADADA] fill-[#404040]"
				/>
				<path
					d="M1 319C1 318.448 1.44772 318 2 318H3.5V385H2C1.44772 385 1 384.552 1 384V319Z"
					className="dark:fill-[#DADADA] fill-[#404040]"
				/>
				<path
					d="M430 279H432C432.552 279 433 279.448 433 280V384C433 384.552 432.552 385 432 385H430V279Z"
					className="dark:fill-[#DADADA] fill-[#404040]"
				/>
				{/* inner body */}
				<path
					d="M6 74C6 35.3401 37.3401 4 76 4H356C394.66 4 426 35.3401 426 74V808C426 846.66 394.66 878 356 878H76C37.3401 878 6 846.66 6 808V74Z"
					className="fill-[#262626] dark:fill-gradient-to-b dark:from-white dark:to-[#F0F0F0]"
				/>
				<path
					opacity="0.5"
					d="M174 5H258V5.5C258 6.60457 257.105 7.5 256 7.5H176C174.895 7.5 174 6.60457 174 5.5V5Z"
					className="dark:fill-[#DADADA] fill-[#404040]"
				/>
				{/* screen area */}
				<path
					d="M21.25 75C21.25 44.2101 46.2101 19.25 77 19.25H355C385.79 19.25 410.75 44.2101 410.75 75V807C410.75 837.79 385.79 862.75 355 862.75H77C46.2101 862.75 21.25 837.79 21.25 807V75Z"
					className="dark:fill-[#F5F5F5] fill-[#404040] dark:stroke-[#E0E0E0] stroke-[#404040] stroke-[0.5]"
					filter="drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1))"
				/>
				<defs>
					<clipPath id={clipPathId.current}>
						<rect
							x="21.25"
							y="19.25"
							width="389.5"
							height="843.5"
							rx="55.75"
							ry="55.75"
						/>
					</clipPath>
				</defs>
				{src && (
					<foreignObject
						x="21.25"
						y="19.25"
						width="389.5"
						height="843.5"
						clipPath={`url(#${clipPathId.current})`}
					>
						<div
							style={{
								width: "100%",
								height: "100%",
								overflow: "hidden",
								borderRadius: "55.75px",
							}}
						>
							<img
								src={src || "/placeholder.svg"}
								alt={alt}
								style={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
									display: "block",
								}}
							/>
						</div>
					</foreignObject>
				)}
				{/* notch area */}
				<path
					d="M154 48.5C154 38.2827 162.283 30 172.5 30H259.5C269.717 30 278 38.2827 278 48.5C278 58.7173 269.717 67 259.5 67H172.5C162.283 67 154 58.7173 154 48.5Z"
					className="fill-[#262626] dark:fill-[#F0F0F0] dark:drop-shadow-sm"
				/>
				<path
					d="M249 48.5C249 42.701 253.701 38 259.5 38C265.299 38 270 42.701 270 48.5C270 54.299 265.299 59 259.5 59C253.701 59 249 54.299 249 48.5Z"
					className="fill-[#262626] dark:fill-[#F0F0F0]"
				/>
				<path
					d="M254 48.5C254 45.4624 256.462 43 259.5 43C262.538 43 265 45.4624 265 48.5C265 51.5376 262.538 54 259.5 54C256.462 54 254 51.5376 254 48.5Z"
					className="fill-[#262626] dark:fill-[#E0E0E0]"
				/>
				{/* highlight */}
				<path
					d="M76 4C37.3401 4 6 35.3401 6 74V808C6 846.66 37.3401 878 76 878H356C394.66 878 426 846.66 426 808V74C426 35.3401 394.66 4 356 4H76Z"
					className="fill-transparent dark:stroke-white/20 stroke-[0.5] stroke-transparent"
				/>
			</svg>
		</div>
	);
};

export interface ImageItem {
	src: string;
	alt: string;
}

interface PhoneCarouselProps {
	images: ImageItem[];
	className?: string;
	featureMode?: boolean;
	featuresData?: { images: ImageItem[] }[];
	activeFeatureIndex?: number;
}

export const PhoneCarousel: React.FC<PhoneCarouselProps> = ({
	images,
	className,
	featureMode,
	featuresData,
	activeFeatureIndex = 0,
}) => {
	const [isClient, setIsClient] = useState<boolean>(false);
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [isPaused, setIsPaused] = useState<boolean>(false);
	const [isHovering, setIsHovering] = useState<boolean>(false);
	const carouselRef = useRef<HTMLDivElement>(null);
	const isMobile = useIsMobile();

	useEffect(() => {
		setIsClient(true);
	}, []);

	useEffect(() => {
		if (featureMode) return;

		let interval: NodeJS.Timeout;
		if (!isPaused && !isHovering) {
			interval = setInterval(() => {
				setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
			}, 3000);
		}
		return () => clearInterval(interval);
	}, [isPaused, isHovering, images.length, featureMode]);

	if (!isClient) {
		return (
			<div className="w-full h-[400px] flex items-center justify-center">
				<div className="animate-pulse w-64 h-96 rounded-3xl"></div>
			</div>
		);
	}

	// FEATURE MODE
	if (featureMode && featuresData) {
		const total = featuresData.length;
		const active = activeFeatureIndex;
		const prev = (active - 1 + total) % total;
		const next = (active + 1) % total;

		const prevImage = featuresData[prev].images[0];
		const activeImage = featuresData[active].images[0];
		const nextImage = featuresData[next].images[0];

		return (
			<section
				className={cn(
					"relative w-full py-6 md:py-10 overflow-hidden",
					className
				)}
				aria-label="iPhone product showcase in feature mode"
			>
				<div className="relative h-[550px] sm:h-[600px] md:h-[650px] lg:h-[700px] w-full flex items-center justify-center">
					<div className="relative w-full max-w-[280px] sm:max-w-[300px] md:max-w-[350px] mx-auto">
						{/* Back phone (prev) */}
						<div
							className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60 w-full"
							style={{
								transform:
									"translate(-50%, calc(-50% - 20px)) scale(0.92)",
								zIndex: 10,
							}}
						>
							<Iphone15Pro
								width="100%"
								src={prevImage.src}
								alt={prevImage.alt}
							/>
						</div>

						{/* Middle phone (next) */}
						<div
							className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80 w-full"
							style={{
								transform:
									"translate(-50%, calc(-50% + 25px)) scale(0.96)",
								zIndex: 20,
							}}
						>
							<Iphone15Pro
								width="100%"
								src={nextImage.src}
								alt={nextImage.alt}
							/>
						</div>

						{/* Front phone (active) */}
						<div
							className="relative w-full"
							style={{
								transform: "translateY(70px)",
								zIndex: 30,
							}}
						>
							<Iphone15Pro
								width="100%"
								src={activeImage.src}
								alt={activeImage.alt}
							/>
						</div>
					</div>
				</div>
			</section>
		);
	}

	// NORMAL MODE
	const handlePrevious = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const togglePause = () => {
		setIsPaused((prev) => !prev);
	};

	return (
		<section
			className="relative w-full py-6 md:py-10 overflow-hidden border-2 border-zinc-800 rounded-xl mt-6"
			aria-label="iPhone product showcase"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="relative">
					{/* Main carousel container */}
					<div
						ref={carouselRef}
						className="relative flex items-center justify-center"
						style={{
							height: isMobile ? "450px" : "570px",
							overflow: "visible",
						}}
					>
						<div
							className="relative flex items-center justify-center w-full"
							style={{ maxWidth: isMobile ? "240px" : "320px" }}
						>
							{images.map((image, index) => {
								const isActive = index === currentIndex;
								const isPrevious =
									index === currentIndex - 1 ||
									(currentIndex === 0 &&
										index === images.length - 1);
								const isNext =
									index === currentIndex + 1 ||
									(currentIndex === images.length - 1 &&
										index === 0);

								const phoneWidth = isMobile ? 240 : 320;
								const offsetX = isPrevious
									? -phoneWidth * 0.65
									: isNext
									? phoneWidth * 0.65
									: 0;
								const scale = isActive ? 1 : 0.85;

								return (
									<div
										key={index}
										className={cn(
											"absolute top-1/2 left-1/2 transition-all duration-700 ease-in-out",
											isActive
												? "z-20 opacity-100"
												: "opacity-0",
											isPrevious ? "z-10 opacity-30" : "",
											isNext ? "z-10 opacity-30" : ""
										)}
										style={{
											width: `${phoneWidth}px`,
											transform: `translate(-50%, -50%) translateX(${offsetX}px) scale(${scale})`,
											WebkitTransform: `translate(-50%, -50%) translateX(${offsetX}px) scale(${scale})`,
										}}
										aria-hidden={!isActive}
									>
										<Iphone15Pro
											width={phoneWidth}
											src={image.src}
											alt={image.alt}
										/>
									</div>
								);
							})}
						</div>
					</div>

					{/* Controls */}
					<div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-4 z-30">
						<Button
							variant="outline"
							size="icon"
							onClick={handlePrevious}
							className="rounded-full bg-black/60 backdrop-blur-sm border-white/20 hover:bg-black/80 shadow-md"
							aria-label="Previous image"
						>
							<ChevronLeft className="h-5 w-5 text-white" />
						</Button>
						<Button
							variant="outline"
							size="icon"
							onClick={togglePause}
							className="rounded-full bg-black/60 backdrop-blur-sm border-white/20 hover:bg-black/80 shadow-md"
							aria-label={
								isPaused ? "Play slideshow" : "Pause slideshow"
							}
						>
							{isPaused ? (
								<Play className="h-5 w-5 text-white" />
							) : (
								<Pause className="h-5 w-5 text-white" />
							)}
						</Button>
						<Button
							variant="outline"
							size="icon"
							onClick={handleNext}
							className="rounded-full bg-black/60 backdrop-blur-sm border-white/20 hover:bg-black/80 shadow-md"
							aria-label="Next image"
						>
							<ChevronRight className="h-5 w-5 text-white" />
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};
