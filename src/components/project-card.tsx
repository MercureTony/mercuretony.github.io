import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
}

export function ProjectCard({ title, description, tags, link }: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border border-neutral-800 bg-neutral-900/50 p-3">
      <CardHeader className="p-0">
        <div className="space-y-1">
          <CardTitle className="text-base font-bold text-neutral-200">
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-neutral-300"
              >
                {title}{" "}
                <span className="h-1 w-1 rounded-full bg-green-500"></span>
              </a>
            ) : (
              title
            )}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="mt-2 text-xs text-neutral-400 flex-grow p-0">
        {description}
      </CardContent>
      <CardFooter className="p-0 mt-4">
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-neutral-800 text-neutral-300 text-[10px] font-medium"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
