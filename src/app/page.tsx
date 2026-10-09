"use client";

import { Misc } from "@/components/misc";
import { MontrealLight } from "@/components/montreal-light";
import { OpportunitiesSection } from "@/components/opportunities-section";
import { RESUME_DATA } from "@/data/resume-data";
import { CURRENT_THESIS, THESIS_HISTORY } from "@/data/thesis-history";
import { formatDateOnly } from "@/lib/date";
import { motion } from "framer-motion";
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

const quietLink =
	"border-b border-neutral-700 transition-colors duration-200 hover:border-neutral-400 hover:text-neutral-200";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-start min-h-screen text-neutral-200 px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-32">
			<motion.div
				className="max-w-2xl w-full space-y-8 sm:space-y-10"
				variants={container}
				initial="hidden"
				animate="show"
			>
				<motion.div variants={item}>
					{/* The gradient's end is lit by the real sun over Montreal; see montreal-light.tsx. */}
					<h1
						id="name"
						className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text"
						style={{ backgroundImage: "linear-gradient(90deg, #ffffff, var(--sky, #a3a3a3))" }}
					>
						Anthony Uyende
					</h1>
					<MontrealLight target="name" />
				</motion.div>

				<motion.ul className="space-y-4 sm:space-y-6" variants={container}>
					<motion.li
						variants={item}
						className="text-lg sm:text-xl text-neutral-300"
					>
						<span>Founder of </span>
						<a
							href="https://coalesc.ai"
							className="border-b border-neutral-700 text-neutral-100 transition-colors duration-200 hover:border-neutral-400 hover:text-white"
							target="_blank"
							rel="noopener noreferrer"
						>
							Coalesc
						</a>
					</motion.li>

					<motion.li
						variants={item}
						className="text-base sm:text-lg text-neutral-300"
					>
						I&apos;m building Coalesc, software that executes accounting work.
					</motion.li>

					<motion.li
						variants={item}
						className="text-sm sm:text-base text-neutral-400"
					>
						Our thesis is that the fundamental unit of accounting automation is the
						engagement, not the task. Coalesc understands what an engagement
						requires, what evidence has arrived, what remains unresolved, and what
						requires judgment, then executes what it can to move the work toward
						review. The vision: accountants should start at review. Live today:
						intake, completeness, client follow-up, and bank preparation.
					</motion.li>

					<motion.li variants={item} className="font-mono text-xs text-neutral-500">
						<Link
							href="/thesis"
							className="transition-colors duration-200 hover:text-neutral-300"
						>
							thesis v{CURRENT_THESIS.version} · since{" "}
							{formatDateOnly(CURRENT_THESIS.date, {
								month: "short",
								day: "numeric",
								year: "numeric",
							})}{" "}
							· {THESIS_HISTORY.length - 1} earlier versions
						</Link>
					</motion.li>

					<motion.li
						variants={item}
						className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm sm:text-base text-neutral-400"
					>
						<Link href="/resume" className={quietLink}>
							Resume
						</Link>
						<span aria-hidden="true" className="text-neutral-700">
							·
						</span>
						<a
							href="https://cal.com/auyende/15min"
							className={quietLink}
							target="_blank"
							rel="noopener noreferrer"
						>
							Book a 15-minute call
						</a>
						<span aria-hidden="true" className="text-neutral-700">
							·
						</span>
						<a href={`mailto:${RESUME_DATA.contact.email}`} className={quietLink}>
							{RESUME_DATA.contact.email}
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
