import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog – Quran, Tajweed & Islamic Knowledge Articles",
  description:
    "Helpful articles on Quran recitation, Tajweed rules, duas, and Islamic history from Quran Tutoring, coming soon.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Quran Tutoring Blog",
    description: "Articles on Quran, Tajweed, and Islamic knowledge, coming soon.",
    url: `${site.url}/blog`,
  },
};

export default function BlogPage() {
  return (
    <section className="relative overflow-hidden bg-ink py-32 text-center text-white">
      <div className="blob left-1/2 top-10 h-80 w-80 -translate-x-1/2 bg-brand" />
      <div className="container-page relative">
        <span className="text-sm font-bold uppercase tracking-widest text-brand-light">
          Coming Soon
        </span>
        <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
          Blog &amp; Articles
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-gray-300">
          We&rsquo;re preparing helpful articles on Quran recitation, Tajweed,
          duas, and Islamic history. Check back soon, or follow us on social
          media for updates.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-brand px-8 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-light"
        >
          Ask Us a Question Instead
        </Link>
      </div>
    </section>
  );
}
