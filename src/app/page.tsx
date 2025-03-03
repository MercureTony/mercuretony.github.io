"use client";

import { Misc } from "@/components/misc";
import { OpportunitiesSection } from "@/components/opportunities-section";
import { motion } from "framer-motion";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface LocationData {
	city: string;
	country: string;
	timestamp: number;
}

export default function Home() {
	const [mounted, setMounted] = useState(false);
	const [currentLocation, setCurrentLocation] = useState<string | null>(null);
	const [lastLocation, setLastLocation] = useState<LocationData | null>(null);

	useEffect(() => {
		setMounted(true);

		// Get last location from localStorage
		const storedLocation = localStorage.getItem("lastVisit");
		const lastVisit = storedLocation ? JSON.parse(storedLocation) : null;

		// Get current location
		fetch("http://ip-api.com/json/24.48.0.1")
			.then((res) => res.json())
			.then((data) => {
				if (data.status === "success") {
					const currentLoc = `${data.city}, ${data.country}`;
					setCurrentLocation(currentLoc);

					// Only update last visit if:
					// 1. There's no previous visit, or
					// 2. It's been at least 1 hour since last visit, or
					// 3. The location is different
					if (
						!lastVisit ||
						Date.now() - lastVisit.timestamp > 3600000 || // 1 hour in milliseconds
						lastVisit.city !== data.city
					) {
						const newLocation: LocationData = {
							city: data.city,
							country: data.country,
							timestamp: Date.now(),
						};
						localStorage.setItem("lastVisit", JSON.stringify(newLocation));
					}

					// Set last location state if it exists and is different
					if (lastVisit && lastVisit.city !== data.city) {
						setLastLocation(lastVisit);
					}
				}
			})
			.catch(() => setCurrentLocation(" a place on Earth"));
	}, []);

	// Format time difference
	const getTimeDifference = (timestamp: number) => {
		const diff = Date.now() - timestamp;
		const minutes = Math.floor(diff / 60000);
		const hours = Math.floor(minutes / 60);
		const days = Math.floor(hours / 24);

		if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
		if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
		if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
		return "just now";
	};

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.04, 0.62, 0.23, 0.98],
			},
		},
	};

	if (!mounted) return null;

	return (
		<main className="flex flex-col items-center justify-start min-h-screen text-neutral-200 px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
			<motion.div
				className="max-w-2xl w-full space-y-8 sm:space-y-10"
				variants={container}
				initial="hidden"
				animate="show"
			>
				<motion.div variants={item}>
					<h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-neutral-400 text-transparent bg-clip-text">
						Anthony Uyende
					</h1>
				</motion.div>

				<motion.ul className="space-y-4 sm:space-y-6" variants={container}>
					<motion.li
						variants={item}
						className="text-lg sm:text-xl text-neutral-300"
					>
						Software engineer II - Data & AI
					</motion.li>

					<motion.li variants={item} className="group">
						<span className="text-neutral-300">Currently building </span>
						<a
							href="https://coalesc.xyz"
							className="inline-flex items-center gap-1 text-neutral-200 hover:text-white transition-colors duration-200"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span className="border-b border-neutral-700 group-hover:border-neutral-400 transition-colors duration-200">
								Coalesc
							</span>
							<motion.div
								whileHover={{ scale: 1.1, rotate: 45 }}
								transition={{ type: "spring", stiffness: 400, damping: 10 }}
							>
								<SquareArrowOutUpRight className="w-4 h-4" />
							</motion.div>
						</a>
						<span className="text-neutral-400">
							{" "}
							- A startup building AI for financial audits to enable faster and
							more accurate audits
						</span>
					</motion.li>

					<motion.li variants={item}>
						<Link
							href="/resume"
							className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-800/50 hover:bg-neutral-800 transition-colors duration-200 text-neutral-200 hover:text-white"
						>
							<span>View my resume</span>
							<motion.div
								whileHover={{ x: 5 }}
								transition={{ type: "spring", stiffness: 400, damping: 10 }}
							>
								→
							</motion.div>
						</Link>
					</motion.li>

					<motion.li variants={item}>
						<a
							href="https://cal.com/auyende/15min"
							className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-800/50 hover:bg-neutral-800 transition-colors duration-200 text-neutral-200 hover:text-white"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span>Book a meeting</span>
							<motion.div
								whileHover={{ x: 5 }}
								transition={{ type: "spring", stiffness: 400, damping: 10 }}
							>
								→
							</motion.div>
						</a>
					</motion.li>

					<motion.li variants={item}>
						<a
							href="mailto:anthony.m.uyende@gmail.com"
							className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-200 transition-colors duration-200"
						>
							<span className="border-b border-neutral-700 hover:border-neutral-400 transition-colors duration-200">
								anthony.m.uyende@gmail.com
							</span>
							<motion.div
								whileHover={{ scale: 1.1, rotate: 45 }}
								transition={{ type: "spring", stiffness: 400, damping: 10 }}
							>
								<SquareArrowOutUpRight className="w-4 h-4" />
							</motion.div>
						</a>
					</motion.li>

					<motion.div variants={item}>
						<Misc />
					</motion.div>

					<motion.div variants={item} className="mt-12">
						<OpportunitiesSection />
					</motion.div>
				</motion.ul>
			</motion.div>
		</main>
	);
}
