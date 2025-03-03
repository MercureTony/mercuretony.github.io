"use client";

export function OpportunitiesSection() {
	return (
		<section className="space-y-6">
			<h2 className="text-xl font-bold text-neutral-200">Ask!</h2>

			<div className="space-y-2">
				<h3 className="text-neutral-200">
					Looking for SMEs to try our early beta product
				</h3>
				<p className="text-sm text-neutral-400">
					I'm looking for SMEs (50-250 employees) to try our early beta product.
					If you're interested in being interviewed, please reach out to me on
					my email.
				</p>
				<div className="flex gap-2 pt-2">
					<span className="text-xs px-2 py-1 bg-neutral-800 rounded-full text-neutral-400">
						small business
					</span>
					<span className="text-xs px-2 py-1 bg-neutral-800 rounded-full text-neutral-400">
						AI
					</span>
					<span className="text-xs px-2 py-1 bg-neutral-800 rounded-full text-neutral-400">
						fintech
					</span>
				</div>
			</div>
		</section>
	);
}
