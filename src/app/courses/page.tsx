import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { courses, site } from "@/lib/data";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Online Quran Courses – Qaida, Tajweed, Hifz, Arabic & More",
  description:
    "Explore our online Quran courses: Basic Qaida, Quran with Tajweed, Hifz (Memorization), Arabic Language, Islamic Studies, and Seerah, taught 1-on-1 by certified male and female tutors.",
  alternates: { canonical: "/courses" },
  openGraph: {
    title: "Online Quran Courses – Qaida, Tajweed, Hifz, Arabic & More",
    description:
      "Six structured online Quran courses for kids, adults, and beginners, taught by certified tutors worldwide.",
    url: `${site.url}/courses`,
  },
};

export default function CoursesPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: courses.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${site.url}/courses/${c.slug}`,
      name: c.title,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <section className="relative overflow-hidden bg-ink py-24 text-center text-white">
        <div className="mesh-bg absolute inset-0" />
        <div className="blob -left-24 top-0 h-72 w-72 bg-brand" />
        <div className="container-page relative">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-light">
            Our Programs
          </span>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Our Courses</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            We&rsquo;re covering all the Islamic fields, from the very first
            letter of the Quran to full memorization and Islamic knowledge.
          </p>
        </div>
        <WaveDivider fill="#fdf6ee" />
      </section>

      <section className="section bg-cream">
        <div className="container-page grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => (
            <Reveal key={course.slug} delay={(i % 3) * 100}>
              <div className="card-lift flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
                <div className="relative h-48 w-full">
                  <Image src={course.image} alt={course.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-lg font-bold text-ink">{course.shortTitle}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                    {course.summary}
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <Link
                      href={`/courses/${course.slug}`}
                      className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
                    >
                      Book Now
                    </Link>
                    <a
                      href="tel:+9231604283767"
                      className="text-sm font-semibold text-ink transition hover:text-brand"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
