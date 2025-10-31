"use client";

export function OpportunitiesSection() {
	return (
		<section className="space-y-6">
			<h2 className="text-xl font-bold text-neutral-200">Ask!</h2>

			<div className="space-y-2">
				<h3 className="text-neutral-200">
					Looking for accounting and bookkeeping firms
				</h3>
				<p className="text-sm text-neutral-400">
					I&apos;m looking for accounting and bookkeeping firms to partner with.
					If you&apos;re interested in learning more about how we can help automate
					your document workflows, please reach out to me.
				</p>
				<div className="flex gap-2 pt-2">
					<span className="text-xs px-2 py-1 bg-neutral-800 rounded-full text-neutral-400">
						accounting
					</span>
					<span className="text-xs px-2 py-1 bg-neutral-800 rounded-full text-neutral-400">
						AI automation
					</span>
					<span className="text-xs px-2 py-1 bg-neutral-800 rounded-full text-neutral-400">
						fintech
					</span>
				</div>
			</div>
		</section>
	);
}
