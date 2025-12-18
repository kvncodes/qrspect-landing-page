import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import {
	Cpu,
	Fingerprint,
	Pencil,
	Settings2,
	Sparkles,
	Zap,
	MonitorDown,
	GlobeLock,
	BrickWallShield,
} from "lucide-react";
import type React from "react";

type FeatureType = {
	title: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	description: string;
};

export function FeatureSection() {
	return (
		<div className="mx-auto w-full max-w-5xl space-y-8">
			<div className="mx-auto max-w-3xl text-center">
				<p className="mt-4 text-balance text-muted-foreground text-sm md:text-base">
					Real-Time Threat Detection - "Instantly identifies phishing
					sites, malware distributors, and credential harvesters
					before you click."
				</p>
			</div>

			<div className="overflow-hidden rounded-lg border">
				<div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 md:grid-cols-3">
					{features.map((feature) => (
						<FeatureCard feature={feature} key={feature.title} />
					))}
				</div>
			</div>
		</div>
	);
}

export function FeatureCard({
	feature,
	className,
	...props
}: React.ComponentProps<"div"> & {
	feature: FeatureType;
}) {
	return (
		<div
			className={cn(
				"relative overflow-hidden bg-background p-6",
				className
			)}
			{...props}
		>
			<div className="-mt-2 -ml-20 mask-[radial-gradient(farthest-side_at_top,white,transparent)] pointer-events-none absolute top-0 left-1/2 size-full">
				<GridPattern
					className="absolute inset-0 size-full stroke-foreground/20"
					height={40}
					width={40}
					x={5}
				/>
			</div>
			<feature.icon
				aria-hidden
				className="size-6 text-foreground/75"
				strokeWidth={1}
			/>
			<h3 className="mt-10 text-sm md:text-base">{feature.title}</h3>
			<p className="relative z-20 mt-2 font-light text-muted-foreground text-xs">
				{feature.description}
			</p>
		</div>
	);
}

const features: FeatureType[] = [
	{
		title: "Link Preview",
		icon: Zap,
		description:
			"See exactly where a QR code leads without visiting the site—no surprises, no risks.",
	},
	{
		title: "Scam Database",
		icon: Cpu,
		description:
			"Access to our constantly updated database of millions of known malicious URLs and domains.",
	},
	{
		title: "Privacy First",
		icon: Fingerprint,
		description:
			"Your scan history stays on your device. We never track or sell your data.",
	},
	{
		title: "Offline Protection",
		icon: MonitorDown,
		description:
			"Built-in threat patterns work even without internet connection for basic security checks.",
	},
	{
		title: "Safe Browsing",
		icon: GlobeLock,
		description:
			"If a link is safe, open it directly in our secure in-app browser with added protection layers.",
	},
	{
		title: "Real-Time Threat Detection",
		icon: BrickWallShield,
		description:
			"Instantly identifies phishing sites, malware distributors, and credential harvesters before you click.",
	},
];
