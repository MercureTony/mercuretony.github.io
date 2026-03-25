import { Mail, Phone } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";

const iconClasses = "w-5 h-5 text-neutral-400 hover:text-neutral-200 transition-colors";

export function SocialIcons() {
  return (
    <div className="flex gap-4">
      {RESUME_DATA.contact.email && (
        <a
          href={`mailto:${RESUME_DATA.contact.email}`}
          className="rounded-lg p-2 hover:bg-neutral-800/50 transition-all"
          aria-label="Email"
        >
          <Mail className={iconClasses} />
        </a>
      )}

      {RESUME_DATA.contact.tel && (
        <a
          href={`tel:${RESUME_DATA.contact.tel}`}
          className="rounded-lg p-2 hover:bg-neutral-800/50 transition-all"
          aria-label="Phone"
        >
          <Phone className={iconClasses} />
        </a>
      )}

      {RESUME_DATA.contact.social.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg p-2 hover:bg-neutral-800/50 transition-all"
          aria-label={social.name}
        >
          <social.icon className={iconClasses} />
        </a>
      ))}
    </div>
  );
}
