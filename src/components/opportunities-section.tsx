"use client";

import { useTranslations } from "next-intl";

export function OpportunitiesSection() {
	const t = useTranslations("Ask");
	return (
		<section className="space-y-6">
			<h2 className="text-xl font-bold text-neutral-200">{t("heading")}</h2>

			<div className="space-y-3">
				<h3 className="text-neutral-200">{t("subhead")}</h3>
				<p className="text-sm text-neutral-400">{t("p1")}</p>
				<p className="text-sm text-neutral-400">{t("p2")}</p>
				<p className="text-sm text-neutral-400">{t("p3")}</p>
				<div className="flex flex-wrap gap-2 pt-2">
					<span className="text-xs px-2 py-1 bg-neutral-800 rounded-full text-neutral-400">
						{t("tagFirms")}
					</span>
					<span className="text-xs px-2 py-1 bg-neutral-800 rounded-full text-neutral-400">
						{t("tagFiles")}
					</span>
					<span className="text-xs px-2 py-1 bg-neutral-800 rounded-full text-neutral-400">
						{t("tagServices")}
					</span>
					<span className="text-xs px-2 py-1 bg-neutral-800 rounded-full text-neutral-400">
						{t("tagPrep")}
					</span>
				</div>
			</div>
		</section>
	);
}
