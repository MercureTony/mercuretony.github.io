"use client";

export function OpportunitiesSection() {
	return (
		<section className="space-y-6">
			<h2 className="text-xl font-bold text-neutral-200">Ask</h2>

			<div className="space-y-3">
				<h3 className="text-neutral-200">Accounting firms where getting to review is expensive</h3>
				<p className="text-sm text-neutral-400">
					I&apos;m looking for introductions to managing partners, COOs, heads of
					operations, and practice leaders at established accounting firms.
				</p>
				<p className="text-sm text-neutral-400">
					The strongest fit is a high-volume workflow where the firm can point to
					a measurable cost before review: gathering evidence, rebuilding
					context, reconciling accounts, following up with clients, preparing
					workpapers, or resolving recurring exceptions.
				</p>
				<p className="text-sm text-neutral-400">
					The goal is not a generic AI pilot. We want to instrument one workflow,
					measure the baseline, let Coalesc execute as much of that accounting
					work as it safely can, and measure what changed on the path to review.
					If the economics are meaningful, we expand from there.
				</p>
				<div className="flex flex-wrap gap-2 pt-2">
					<span className="text-xs px-2 py-1 bg-neutral-800 rounded-full text-neutral-400">
						Established accounting firms
					</span>
					<span className="text-xs px-2 py-1 bg-neutral-800 rounded-full text-neutral-400">
						Partner / COO / practice leader
					</span>
					<span className="text-xs px-2 py-1 bg-neutral-800 rounded-full text-neutral-400">
						High-volume, measurable workflow
					</span>
					<span className="text-xs px-2 py-1 bg-neutral-800 rounded-full text-neutral-400">
						Evidence → execution → review
					</span>
				</div>
			</div>
		</section>
	);
}
