import { ProjectCard } from "@/components/project-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import { GlobeIcon, Mail, Phone } from "lucide-react";
import { Metadata } from "next";

const iconClasses = "w-4 h-4 text-neutral-400 hover:text-neutral-200 transition-colors";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto mb-32 scroll-my-12 p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-[#171717] print:space-y-6">
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold text-neutral-200">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-neutral-400">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-neutral-400">
              <a
                className="inline-flex min-h-11 items-center gap-x-1.5 rounded-md pr-2 align-baseline leading-none text-neutral-400 transition-colors duration-150 hover:text-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 motion-reduce:transition-none"
                href={RESUME_DATA.locationLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlobeIcon className="h-3 w-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-neutral-400 print:hidden">
              {RESUME_DATA.contact.email ? (
                <a 
                  href={`mailto:${RESUME_DATA.contact.email}`}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg transition-colors duration-150 hover:bg-neutral-800/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 motion-reduce:transition-none"
                  aria-label="Email"
                >
                  <Mail className={iconClasses} />
                </a>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <a 
                  href={`tel:${RESUME_DATA.contact.tel}`}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg transition-colors duration-150 hover:bg-neutral-800/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 motion-reduce:transition-none"
                  aria-label="Phone"
                >
                  <Phone className={iconClasses} />
                </a>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg transition-colors duration-150 hover:bg-neutral-800/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 motion-reduce:transition-none"
                  aria-label={social.name}
                >
                  <social.icon className={iconClasses} />
                </a>
              ))}
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-neutral-400 print:flex">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <a href={`tel:${RESUME_DATA.contact.tel}`}>
                  <span className="underline">{RESUME_DATA.contact.tel}</span>
                </a>
              ) : null}
            </div>
          </div>

          <Avatar className="h-24 w-24 shrink-0 sm:h-28 sm:w-28">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className="text-xl font-bold text-neutral-200">About</h2>
          <p className="text-pretty font-mono text-sm text-neutral-400">
            {RESUME_DATA.summary}
          </p>
        </Section>
        <Section>
          <h2 className="text-xl font-bold text-neutral-200">Work Experience</h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.company} className="bg-neutral-900/50 border-neutral-800">
                <CardHeader>
                  <div className="flex flex-col gap-1 text-base sm:flex-row sm:items-start sm:justify-between sm:gap-x-3">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none text-neutral-200">
                      <a className="hover:text-neutral-300" href={work.link} target="_blank" rel="noopener noreferrer">
                        {work.company}
                      </a>

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs bg-neutral-800 text-neutral-300"
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
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold text-neutral-200">Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school} className="bg-neutral-900/50 border-neutral-800">
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
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold text-neutral-200">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => {
              return <Badge key={skill}>{skill}</Badge>;
            })}
          </div>
        </Section>

        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold text-neutral-200">Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>
      </section>

      {/* <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      /> */}
    </main>
  );
}
