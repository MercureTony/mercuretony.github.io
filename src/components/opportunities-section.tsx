"use client";

export function OpportunitiesSection() {
	return (
		<section className="space-y-6">
			<h2 className="text-xl font-bold text-neutral-200">Ask!</h2>

			<div className="space-y-2">
				<h3 className="text-neutral-200">
					Design partners for Coalesc
				</h3>
				<p className="text-sm text-neutral-400">
					Partner-led accounting firms, 5–50 employees, managing 500–2,500+
					client files per year. If your team burns hours splitting PDFs,
					chasing missing receipts, and sorting documents before bookkeeping,
					tax, or audit work can even start — we should talk. We work on-site
					alongside your staff during peak season.
				</p>
				<div className="flex gap-2 pt-2">
					<span className="text-xs px-2 py-1 bg-neutral-800 rounded-full text-neutral-400">
						5–50 employees
					</span>
					<span className="text-xs px-2 py-1 bg-neutral-800 rounded-full text-neutral-400">
						500+ client files/year
					</span>
					<span className="text-xs px-2 py-1 bg-neutral-800 rounded-full text-neutral-400">
						document chaos
					</span>
				</div>
			</div>
		</section>
	);
}
