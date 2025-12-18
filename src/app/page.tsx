import Features from "@/components/Features";
import { Footer } from "@/components/footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
export default function Home() {
	return (
		<>
			<div className="flex flex-col space-y-20 items-center relative selection:text-black selection:bg-white px-3 mb-20">
				<Hero />
				<HowItWorks />
				<Features />
			</div>
			<section id="contact">
				<Footer />
			</section>
		</>
	);
}
