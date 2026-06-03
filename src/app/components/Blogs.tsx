"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { IconBrandMedium, IconExternalLink } from "@tabler/icons-react";
import { blogPosts } from "../data/blogs";

const INITIAL_BLOGS_VISIBLE = 2;

export const Blogs = () => {
  const [showAll, setShowAll] = useState(false);

  const visiblePosts = useMemo(() => {
    if (showAll) return blogPosts;
    return blogPosts.slice(0, INITIAL_BLOGS_VISIBLE);
  }, [showAll]);

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6">
      <div className="rounded-2xl border border-[var(--second-color)]/30 bg-[var(--second-bg-color)]/80 p-6 md:p-8 shadow-xl">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-label">Writing</p>
            <h2 className="section-title text-2xl sm:text-3xl">
              Medium Blogs
            </h2>
            <p className="mt-2 text-sm text-[var(--second-color)]">
              Posts on cloud infrastructure, backend engineering, distributed
              systems, and Java.
            </p>
          </div>

          <Link
            href="https://medium.com/@risni.jeeva"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--main-color)] hover:underline"
          >
            <IconBrandMedium size={18} />
            View profile
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {visiblePosts.map((post) => (
            <article
              key={post.href}
              className="group rounded-xl border border-[var(--second-color)]/20 bg-[var(--bg-color)] p-5 transition-all duration-200 hover:border-[var(--main-color)]/40 hover:shadow-[0_0_24px_var(--accent-glow)]"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold leading-snug text-[var(--text-color)]">
                  {post.title}
                </h3>
                <IconExternalLink
                  className="mt-0.5 flex-none text-[var(--second-color)] transition-colors group-hover:text-[var(--main-color)]"
                  size={18}
                />
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-[var(--second-bg-color)] px-2 py-0.5 text-xs text-[var(--second-color)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4">
                <Link
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--main-color)] hover:underline"
                >
                  Read on Medium
                </Link>
              </div>
            </article>
          ))}
        </div>

        {blogPosts.length > INITIAL_BLOGS_VISIBLE && (
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

