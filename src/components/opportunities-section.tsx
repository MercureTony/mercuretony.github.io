"use client";

export function OpportunitiesSection() {
	return (
		<section className="space-y-6">
			<h2 className="text-xl font-bold text-neutral-200">Ask</h2>

			<div className="space-y-3">
				<h3 className="text-neutral-200">Design partners for Coalesc</h3>
				<p className="text-sm text-neutral-400">
					I&apos;m looking to speak with partner-led accounting firms handling
					hundreds or thousands of client files per year.
				</p>
				<p className="text-sm text-neutral-400">
					Especially firms where teams still spend hours collecting documents,
					checking what is missing, splitting PDFs, relaunching clients, and
					preparing files before the real accounting work can begin.
				</p>
				<p className="text-sm text-neutral-400">
					If your team deals with document chaos before bookkeeping, tax,
					compilation, or assurance work, we should talk. We are especially
					interested in firms open to working closely with us during peak
					season.
				</p>
				<div className="flex flex-wrap gap-2 pt-2">
					<span className="text-xs px-2 py-1 bg-neutral-800 rounded-full text-neutral-400">
						Partner-led firms
					</span>
					<span className="text-xs px-2 py-1 bg-neutral-800 rounded-full text-neutral-400">
						500+ client files/year
					</span>
					<span className="text-xs px-2 py-1 bg-neutral-800 rounded-full text-neutral-400">
						Bookkeeping, tax, compilation, assurance
					</span>
					<span className="text-xs px-2 py-1 bg-neutral-800 rounded-full text-neutral-400">
						Document collection, missing items, file preparation
					</span>
				</div>
			</div>
		</section>
	);
}
