import { ProjectCard } from "@/components/project-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { RESUME_DATA_FR } from "@/data/resume-data.fr";
import { GlobeIcon, Mail, Phone } from "lucide-react";
import { Metadata } from "next";

const iconClasses = "w-4 h-4 text-neutral-400 hover:text-neutral-200 transition-colors";

export const metadata: Metadata = {
  title: `${RESUME_DATA_FR.name} | CV`,
  description: RESUME_DATA_FR.summary,
};

export default function Page() {
  return (
    <main lang="fr" className="container relative mx-auto mb-32 scroll-my-12 p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-[#171717] print:space-y-6">
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold text-neutral-200">{RESUME_DATA_FR.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-neutral-400">
              {RESUME_DATA_FR.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-neutral-400">
              <a
                className="inline-flex min-h-11 items-center gap-x-1.5 rounded-md pr-2 align-baseline leading-none text-neutral-400 transition-colors duration-150 hover:text-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300"
                href={RESUME_DATA_FR.locationLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlobeIcon className="h-3 w-3" />
                {RESUME_DATA_FR.location}
              </a>
            </p>

            <div className="flex gap-x-1 pt-1 font-mono text-sm text-neutral-400 print:hidden">
              {RESUME_DATA_FR.contact.email ? (
                <a
                  href={`mailto:${RESUME_DATA_FR.contact.email}`}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg transition-colors duration-150 hover:bg-neutral-800/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300"
                  aria-label="Courriel"
                >
                  <Mail className={iconClasses} />
                </a>
              ) : null}

              {RESUME_DATA_FR.contact.tel ? (
                <a
                  href={`tel:${RESUME_DATA_FR.contact.tel}`}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg transition-colors duration-150 hover:bg-neutral-800/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300"
                  aria-label="Téléphone"
                >
                  <Phone className={iconClasses} />
                </a>
              ) : null}

              {RESUME_DATA_FR.contact.social.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg transition-colors duration-150 hover:bg-neutral-800/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300"
                  aria-label={social.name}
                >
                  <social.icon className={iconClasses} />
                </a>
              ))}
            </div>
          </div>

          <Avatar className="h-24 w-24 shrink-0 sm:h-28 sm:w-28">
            <AvatarImage alt={RESUME_DATA_FR.name} src={RESUME_DATA_FR.avatarUrl} />
            <AvatarFallback>{RESUME_DATA_FR.initials}</AvatarFallback>
          </Avatar>
        </div>

        <Section>
          <h2 className="text-xl font-bold text-neutral-200">À propos</h2>
          <p className="text-pretty font-mono text-sm text-neutral-400">
            {RESUME_DATA_FR.summary}
          </p>
        </Section>

        <Section>
          <h2 className="text-xl font-bold text-neutral-200">Expérience professionnelle</h2>
          {RESUME_DATA_FR.work.map((work) => (
            <Card key={work.company} className="border-neutral-800 bg-neutral-900/50">
              <CardHeader>
                <div className="flex flex-col gap-1 text-base sm:flex-row sm:items-start sm:justify-between sm:gap-x-3">
                  <h3 className="inline-flex items-center gap-x-1 font-semibold leading-none text-neutral-200">
                    <a className="hover:text-neutral-300" href={work.link} target="_blank" rel="noopener noreferrer">
                      {work.company}
                    </a>
                    <span className="inline-flex gap-x-1">
                      {work.badges.map((badge) => (
                        <Badge
                          variant="secondary"
                          className="bg-neutral-800 text-xs text-neutral-300"
                          key={badge}
                        >
                          {badge}
                        </Badge>
                      ))}
                    </span>
                  </h3>
                  <div className="text-sm tabular-nums text-neutral-400">
                    {work.start} - {work.end}
                  </div>
                </div>
                <h4 className="font-mono text-sm leading-none text-neutral-400">
                  {work.title}
                </h4>
              </CardHeader>
              <CardContent className="mt-2 text-xs text-neutral-400">
                {work.description}
              </CardContent>
            </Card>
          ))}
        </Section>

        <Section>
          <h2 className="text-xl font-bold text-neutral-200">Formation</h2>
          {RESUME_DATA_FR.education.map((education) => (
            <Card key={education.school} className="border-neutral-800 bg-neutral-900/50">
              <CardHeader>
                <div className="flex flex-col gap-1 text-base sm:flex-row sm:items-start sm:justify-between sm:gap-x-3">
                  <h3 className="font-semibold leading-none text-neutral-200">
                    {education.school}
                  </h3>
                  <div className="text-sm tabular-nums text-neutral-400">
                    {education.start} - {education.end}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="mt-2 text-neutral-400">
                {education.degree}
              </CardContent>
            </Card>
          ))}
        </Section>

        <Section>
          <h2 className="text-xl font-bold text-neutral-200">Compétences</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA_FR.skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </Section>

        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold text-neutral-200">Projets</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA_FR.projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.techStack}
                link={"link" in project ? project.link.href : undefined}
              />
            ))}
          </div>
        </Section>
      </section>
    </main>
  );
}
