import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
	return (
		<header className="font-sans flex justify-between items-center max-w-4xl mx-auto border border-zinc-900 rounded-full px-3.5 py-0.5 backdrop-blur-sm bg-white/80 dark:bg-black/50 sticky top-2 z-50">
			<div>
				<Link href="/">
					<Image
						src="/Logo.jpeg"
						alt="Logo"
						width={40}
						height={40}
						className="saturate-0 contrast-120 rounded-full"
					/>
				</Link>
			</div>
			<NavigationMenu>
				<NavigationMenuList className="gap-6">
					<NavigationMenuItem className="text-zinc-300 font-medium hidden sm:block">
						<NavigationMenuLink asChild>
							<Link href="#how-it-works">How it Works</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>

					<NavigationMenuItem className="text-zinc-300 font-medium">
						<NavigationMenuLink asChild>
							<Link href="#features">Features</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>

					<NavigationMenuItem className="text-zinc-300 font-medium">
						<NavigationMenuLink asChild>
							<Link href="#pricing">Pricing</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>

					<NavigationMenuItem className="text-zinc-300 font-medium hidden sm:block">
						<NavigationMenuLink asChild>
							<Link href="#faq">FAQ</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>

					<NavigationMenuItem className="text-zinc-300 font-medium">
						<NavigationMenuLink asChild>
							<Link href="#contact">Contact</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>

			<div>
				<Button size="sm" className="rounded-full h-7 cursor-pointer">
					Download App
				</Button>
			</div>
		</header>
	);
}
