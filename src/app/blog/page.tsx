import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/data";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog – Quran, Tajweed & Islamic Knowledge Articles",
  description:
    "Helpful articles on Quran recitation, Tajweed rules, and choosing the right online Quran tutor, from the team at Quran Tutoring.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Quran Tutoring Blog",
    description:
      "Articles on Quran recitation, Tajweed, and online Quran education for kids and adults.",
    url: `${site.url}/blog`,
  },
};

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink py-24 text-center text-white">
        <div className="blob left-1/2 top-10 h-80 w-80 -translate-x-1/2 bg-brand" />
        <div className="container-page relative">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-light">
            Our Blog
          </span>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Blog &amp; Articles
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-gray-300">
            Practical guides on Quran recitation, Tajweed, and choosing the
            right online Quran tutor for your family.
          </p>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-page grid gap-7 sm:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card-lift flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5"
            >
              <div className="relative h-56 w-full">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-brand">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-3 text-xl font-bold text-ink">{post.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 font-semibold text-brand">
                  Read Article <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
