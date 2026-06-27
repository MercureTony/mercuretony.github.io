"use client";

import { Misc } from "@/components/misc";
import { OpportunitiesSection } from "@/components/opportunities-section";
import { RESUME_DATA } from "@/data/resume-data";
import { motion } from "framer-motion";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

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

export default function Home() {
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
						className="group text-lg sm:text-xl text-neutral-300"
					>
						<span>Founder of </span>
						<a
							href="https://coalesc.ai"
							className="inline-flex items-center gap-1 text-neutral-100 hover:text-white transition-colors duration-200"
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
					</motion.li>

					<motion.li
						variants={item}
						className="text-base sm:text-lg text-neutral-300"
					>
						Building the AI workspace where accounting teams prepare client
						files before the work begins.
					</motion.li>

					<motion.li
						variants={item}
						className="text-sm sm:text-base text-neutral-400"
					>
						Coalesc helps partner-led accounting firms turn messy client
						emails, PDFs, statements, receipts, and supporting documents into
						work-ready files for bookkeeping, tax, compilation, and assurance.
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
							href={`mailto:${RESUME_DATA.contact.email}`}
							className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-200 transition-colors duration-200"
						>
							<span className="border-b border-neutral-700 hover:border-neutral-400 transition-colors duration-200">
								{RESUME_DATA.contact.email}
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
