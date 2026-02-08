"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { IconSearch, IconBrandGithub } from "@tabler/icons-react";
import { cn } from "../utils/cn";

export type ProjectItem = {
  title: string;
  image: string;
  description: string;
  stack: string[];
  techs: string[];
  github: { frontend: string; backend: string };
};

const projects: ProjectItem[] = [
  {
    title: "MediSeek",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/mediseek.png?alt=media&token=116d21df-ec2e-452b-b79a-7c362fa92d11",
    description:
      "Helps patients find rare medicines within their country. Ongoing individual project.",
    techs: ["Spring Boot", "Next.js", "SQL"],
    stack: [
      "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fspring-logo.png?alt=media&token=37ffb903-f75d-4f9f-917d-29660d6a2eee",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fnext.jpeg?alt=media&token=63069384-b9b4-4c87-834b-b2def273a1e0",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fsql.jpeg?alt=media&token=f402d85c-c0e2-4075-acbb-d0244fd6e4a3",
    ],
    github: {
      frontend: "https://github.com/ris-jeewa/mediseek-frontend",
      backend: "https://github.com/ris-jeewa/mediseek-backend",
    },
  },
  {
    title: "Anothershot",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/anothershot.png?alt=media&token=9440df16-34d9-4a45-831a-ffd842bea1f9",
    description:
      "Book photographers and showcase portfolios. 2nd year software project.",
    techs: ["Next.js", "NestJS", "TypeScript", "Tailwind", "MongoDB", "Prisma", "Vercel", "Azure"],
    stack: [
      "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fnext.jpeg?alt=media&token=63069384-b9b4-4c87-834b-b2def273a1e0",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fnest.svg?alt=media&token=de7403a8-7451-4ec3-8a98-32555ab198cb",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fcloudinary.svg?alt=media&token=27dbb89c-75dd-4eba-894c-1daba1dce239",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fmongo.png?alt=media&token=9dc32b0d-d77b-4f55-b0ee-807f1b36098c",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fprisma.jpeg?alt=media&token=a3af1df1-3344-4c5f-948e-64e4a61be7f3",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Ftypescript.svg?alt=media&token=d190a918-c630-4c41-9b4c-5d7e725d99ab",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Ftailwind.png?alt=media&token=d08c76b0-ca3d-4ff4-b145-2b7b2d16644e",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fvercel.png?alt=media&token=9a6257dd-4b8f-4af9-9dec-8e2aeab07e5a",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fazure.jpeg?alt=media&token=a88c24f9-4f98-40c1-ad98-4bc7e0c8c4ad",
    ],
    github: {
      frontend: "https://github.com/NerdLabs-UoM/anothershot-frontend",
      backend: "https://github.com/NerdLabs-UoM/anothershot-backend",
    },
  },
  {
    title: "Quick Chat",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/quickchat.jpeg?alt=media&token=7e885e3a-2433-4dcd-b6f0-5365f3065120",
    description:
      "Real-time web chat. Create an account and chat with other users.",
    techs: ["React", "Firebase", "Sass", "Vite"],
    stack: [
      "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Freact.svg?alt=media&token=dff6fa70-0756-4302-97c3-537331ba3f1b",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Ffirebase.png?alt=media&token=dd30cc04-ce6c-4c32-ae27-c763bb988b3b",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fscss.png?alt=media&token=85390ad3-201e-44a6-87f3-cbea69b9f1e1",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fvite.png?alt=media&token=cf90dc05-e323-48e5-8d2c-5826397a54c8",
    ],
    github: {
      frontend: "https://github.com/ris-jeewa/Quick-Chat",
      backend: "",
    },
  },
  {
    title: "Photo Gallery",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/Screenshot%202024-10-24%20005007.png?alt=media&token=6c04b4a5-6000-4135-9bc1-a2cd5ef473e9",
    description:
      "Photography portfolio with images from Unsplash API.",
    techs: ["Next.js", "Tailwind", "TypeScript"],
    stack: [
      "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fnext.jpeg?alt=media&token=63069384-b9b4-4c87-834b-b2def273a1e0",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Ftailwind.png?alt=media&token=d08c76b0-ca3d-4ff4-b145-2b7b2d16644e",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Ftypescript.svg?alt=media&token=d190a918-c630-4c41-9b4c-5d7e725d99ab",
    ],
    github: {
      frontend: "https://github.com/ris-jeewa/photo-gallery",
      backend: "",
    },
  },
];

function getAllTechs(items: ProjectItem[]): string[] {
  const set = new Set<string>();
  items.forEach((p) => p.techs.forEach((t) => set.add(t)));
  return Array.from(set).sort();
}

export const Portfolio = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

  const allTechs = useMemo(() => getAllTechs(projects), []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        !searchQuery ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techs.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );
      const matchesTech =
        selectedTechs.length === 0 ||
        selectedTechs.some((t) => project.techs.includes(t));
      return matchesSearch && matchesTech;
    });
  }, [searchQuery, selectedTechs]);

  const toggleTech = (tech: string) => {
    setSelectedTechs((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6">
      <div className="rounded-2xl border border-[var(--second-color)]/30 bg-[var(--second-bg-color)]/80 p-6 md:p-8 shadow-xl">
        <h2 className="mb-6 text-xl font-semibold text-[var(--text-color)] md:text-2xl">
          Projects
        </h2>

        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-md">
            <IconSearch
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--second-color)]"
              size={18}
            />
            <input
              type="text"
              placeholder="Search a project..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-[var(--second-color)]/40 bg-[var(--bg-color)] py-2.5 pl-10 pr-4 text-sm text-[var(--text-color)] placeholder:text-[var(--second-color)] focus:border-[var(--main-color)] focus:outline-none focus:ring-1 focus:ring-[var(--main-color)]"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {allTechs.map((tech) => (
              <button
                key={tech}
                type="button"
                onClick={() => toggleTech(tech)}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-medium transition-colors md:text-sm",
                  selectedTechs.includes(tech)
                    ? "bg-[var(--main-color)] text-[var(--bg-color)]"
                    : "border border-[var(--second-color)]/50 bg-transparent text-[var(--text-color)] hover:border-[var(--main-color)]/50 hover:text-[var(--main-color)]"
                )}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
          {filteredProjects.length === 0 ? (
            <p className="col-span-full py-12 text-center text-[var(--second-color)]">
              No projects match your filters. Try a different search or clear
              tech filters.
            </p>
          ) : (
            filteredProjects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-[var(--second-color)]/20 bg-[var(--bg-color)] transition-all duration-200 hover:border-[var(--main-color)]/40 hover:shadow-[0_0_24px_var(--accent-glow)]">
      <div className="relative aspect-video w-full overflow-hidden bg-[var(--second-bg-color)]">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-2 right-2 flex -space-x-1">
          {project.stack.slice(0, 4).map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="h-6 w-6 rounded-full border border-[var(--bg-color)] bg-[var(--bg-color)] object-contain shadow-sm"
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
      <div className="p-4">
        <h3 className="mb-1 font-semibold text-[var(--text-color)]">
          {project.title}
        </h3>
        <p className="mb-3 line-clamp-2 text-sm text-[var(--second-color)]">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.techs.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-[var(--second-bg-color)] px-2 py-0.5 text-xs text-[var(--second-color)]"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-3 flex gap-3 text-xs">
          <Link
            href={project.github.frontend}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[var(--main-color)] hover:underline"
          >
            <IconBrandGithub size={14} />
            Frontend
          </Link>
          {project.github.backend && (
            <Link
              href={project.github.backend}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[var(--main-color)] hover:underline"
            >
              <IconBrandGithub size={14} />
              Backend
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
