"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { IconSearch, IconBrandGithub, IconWorld } from "@tabler/icons-react";
import { cn } from "../utils/cn";

export type ProjectItem = {
  title: string;
  image: string;
  description: string;
  stack: string[];
  techs: string[];
  github: { frontend: string; backend: string };
  live?: string;
};

const projects: ProjectItem[] = [
  {
    title: "MediSeek",
    image:
      "https://res.cloudinary.com/dcn64hytu/image/upload/v1770568159/portfolio/Screenshot_2026-02-08_215050_aotwhu.png",
    description:
      "Helps patients find rare medicines within their country. Ongoing individual project.",
    techs: ["Spring Boot", "Next.js", "SQL", "Apache Kafka", "Grafana", "Azure", "Vercel"],
    stack: [
      "https://res.cloudinary.com/dcn64hytu/image/upload/c_crop,ar_1:1/v1774288314/portfolio/SB_oupitp.webp",
      "https://res.cloudinary.com/dcn64hytu/image/upload/v1774288529/portfolio/nextjs_siqrfa.webp",
      "https://res.cloudinary.com/dcn64hytu/image/upload/v1774339641/portfolio/mysql_rsxoen.png",
      "https://res.cloudinary.com/dcn64hytu/image/upload/c_crop,ar_1:1/v1774339546/portfolio/kafka_epj5wk.png",
      "https://res.cloudinary.com/dcn64hytu/image/upload/v1770568761/portfolio/images_shmnfl.jpg",
      "https://res.cloudinary.com/dcn64hytu/image/upload/v1770568761/portfolio/images_shmnfl.jpg",
    ],
    github: {
      frontend: "https://github.com/ris-jeewa/mediseek-frontend",
      backend: "https://github.com/ris-jeewa/mediseek-backend",
    },
    live: "https://mediseek-ozpnk3vi6-ris-jeewas-projects.vercel.app/"
  },
  {
    title: "FreeLynk",
    image:
      "https://res.cloudinary.com/dcn64hytu/image/upload/v1774019024/portfolio/Screenshot_2026-03-20_202240_omtht7.png",
    description:
      "Full-stack marketplace connecting clients with freelancers. OAuth2/OIDC via Okta, user profiles (Cloudinary), project/job workflows, and milestone tracking.",
    techs: ["Spring Boot", "React", "Okta", "Cloudinary", "OAuth2", "OIDC"],
    stack: [
      "https://res.cloudinary.com/dcn64hytu/image/upload/c_crop,ar_1:1/v1774288314/portfolio/SB_oupitp.webp",
      "https://res.cloudinary.com/dcn64hytu/image/upload/v1774288880/portfolio/react_cjjstw.jpg",
      "https://res.cloudinary.com/dcn64hytu/image/upload/c_crop,ar_1:1/v1774328213/portfolio/cloudinary_z08igt.png",
    ],
    github: {
      frontend: "https://github.com/ris-jeewa",
      backend: "https://github.com/ris-jeewa",
    },
  },
  {
    title: "Inventory & Order Management",
    image:
      "https://placehold.co/800x450/12121a/06b6d4?text=Inventory+API&font=inter",
    description:
      "Scalable RESTful Web API for product, order, inventory, and warehouse management with RBAC via WSO2 API Manager and Grafana-based real-time monitoring.",
    techs: ["ASP.NET Core", ".NET 8", "WSO2 API Manager", "Grafana", "PostgreSQL", "Swagger", "RBAC"],
    stack: [
      "https://res.cloudinary.com/dcn64hytu/image/upload/v1774338017/portfolio/.net_hdidtu.png",
      "https://res.cloudinary.com/dcn64hytu/image/upload/v1770568761/portfolio/images_shmnfl.jpg",
    ],
    github: {
      frontend: "",
      backend: "https://github.com/ris-jeewa",
    },
  },
  {
    title: "Anothershot",
    image:
      "https://res.cloudinary.com/dcn64hytu/image/upload/v1774340383/portfolio/anothershot_bg62ky.png",
    description:
      "Book photographers and showcase portfolios. 2nd year software project.",
    techs: ["Next.js", "NestJS", "TypeScript", "Tailwind", "MongoDB", "Prisma", "Vercel", "Azure"],
    stack: [
      "https://res.cloudinary.com/dcn64hytu/image/upload/v1774339168/portfolio/nest_js_upughx.png",
      "https://res.cloudinary.com/dcn64hytu/image/upload/v1774288529/portfolio/nextjs_siqrfa.webp",
      "https://res.cloudinary.com/dcn64hytu/image/upload/v1774338730/portfolio/prisma_fbcueu.png",
      "https://res.cloudinary.com/dcn64hytu/image/upload/c_crop,ar_1:1/v1774338781/portfolio/mongoDB_n2dtkj.png",
    ],
    github: {
      frontend: "https://github.com/NerdLabs-UoM/anothershot-frontend",
      backend: "https://github.com/NerdLabs-UoM/anothershot-backend",
    },
  },
  {
    title: "Quick Chat",
    image:
      "https://res.cloudinary.com/dcn64hytu/image/upload/v1774340384/portfolio/quickchat_rwi6oc.jpg",
    description:
      "Real-time web chat. Create an account and chat with other users.",
    techs: ["React", "Firebase", "Sass", "Vite"],
    stack: [
      "https://res.cloudinary.com/dcn64hytu/image/upload/v1774288880/portfolio/react_cjjstw.jpg",
      "https://res.cloudinary.com/dcn64hytu/image/upload/v1774340130/portfolio/firebase_gwx6no.jpg",
      "https://res.cloudinary.com/dcn64hytu/image/upload/v1774340130/portfolio/sass_e2imbk.png",
      "https://res.cloudinary.com/dcn64hytu/image/upload/v1774340135/portfolio/vite_lka2od.png"

          ],
    github: {
      frontend: "https://github.com/ris-jeewa/Quick-Chat",
      backend: "",
    },
  },
  {
    title: "Photo Gallery",
    image:
      "https://res.cloudinary.com/dcn64hytu/image/upload/v1774340455/portfolio/photogallery_h4vtbj.png",
    description:
      "Photography portfolio with images from Unsplash API.",
    techs: ["Next.js", "Tailwind", "TypeScript"],
    stack: [
      "https://res.cloudinary.com/dcn64hytu/image/upload/v1774288529/portfolio/nextjs_siqrfa.webp",
      "https://res.cloudinary.com/dcn64hytu/image/upload/v1774340131/portfolio/tailwind_wf6sem.png",
      "https://res.cloudinary.com/dcn64hytu/image/upload/v1774340134/portfolio/ts_kkiq5o.png"
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
  const [showAll, setShowAll] = useState(false);

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

  useEffect(() => {
    setShowAll(false);
  }, [searchQuery, selectedTechs]);

  const toggleTech = (tech: string) => {
    setSelectedTechs((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const visibleProjects = useMemo(() => {
    if (showAll) return filteredProjects;
    return filteredProjects.slice(0, 2);
  }, [filteredProjects, showAll]);

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6">
      <div className="rounded-2xl border border-[var(--second-color)]/30 bg-[var(--second-bg-color)]/80 p-6 md:p-8 shadow-xl">
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
            visibleProjects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))
          )}
        </div>

        {filteredProjects.length > 2 && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="rounded-full border border-[var(--second-color)]/50 bg-transparent px-6 py-2.5 text-sm font-semibold text-[var(--text-color)] transition-colors hover:border-[var(--main-color)]/60 hover:text-[var(--main-color)]"
            >
              {showAll ? "Show less" : "Show more"}
            </button>
          </div>
        )}
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
          loading="lazy"
          decoding="async"
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
              loading="lazy"
              decoding="async"
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
        <div className="mt-3 flex gap-3 text-xs flex-wrap">
          {project.github.frontend && (
            <Link
              href={project.github.frontend}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[var(--main-color)] hover:underline"
            >
              <IconBrandGithub size={14} />
              Frontend
            </Link>
          )}
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
          {project.live && (
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[var(--main-color)] hover:underline"
            >
              <IconWorld size={14} />
              Live
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
