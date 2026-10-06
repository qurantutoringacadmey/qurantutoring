import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { courses, site } from "@/lib/data";
import { CheckIcon, BookIcon, StarIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/courses/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) return {};
  const title = `${course.title} Online – Learn with Certified Tutors`;
  return {
    title,
    description: `${course.summary} Book a free trial class with Quran Tutoring's certified male and female tutors, available 24/7 worldwide.`,
    alternates: { canonical: `/courses/${course.slug}` },
    openGraph: {
      title,
      description: course.summary,
      url: `${site.url}/courses/${course.slug}`,
      images: [{ url: course.image, width: 1200, height: 800, alt: course.title }],
    },
  };
}

export default async function CoursePage({ params }: PageProps<"/courses/[slug]">) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) notFound();

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.summary,
    provider: {
      "@type": "EducationalOrganization",
      name: site.name,
      sameAs: site.url,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "Flexible, 1-on-1 live sessions",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: course.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Courses", item: `${site.url}/courses` },
      {
        "@type": "ListItem",
        position: 3,
        name: course.title,
        item: `${site.url}/courses/${course.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="relative overflow-hidden bg-ink py-28 text-white">
        <Image
          src={course.image}
          alt={`${course.title} online course`}
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
        <div className="container-page relative text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-light">
            Course
          </span>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">{course.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-200">{course.subtitle}</p>
          <Link
            href="/book-trial"
            className="cta-shiny mt-7 inline-block rounded-full px-8 py-3.5 font-semibold text-white transition hover:-translate-y-0.5"
          >
            Book Your Free 3-Day Trial
          </Link>
        </div>
        <WaveDivider fill="#fdf6ee" />
      </section>

      <section className="section bg-cream">
        <div className="container-page grid gap-16 lg:grid-cols-3">
          <Reveal className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-ink">Who is this course for?</h2>
              <ul className="mt-4 space-y-2">
                {course.who.map((item) => (
                  <li key={item} className="flex gap-3 text-gray-600">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-ink">What You Will Learn?</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {course.learn.map((item) => (
                  <li key={item} className="flex gap-3 text-gray-600">
                    <BookIcon className="mt-1 h-4 w-4 shrink-0 text-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-ink">Key Features</h2>
              <ul className="mt-4 space-y-2">
                {course.features.map((item) => (
                  <li key={item} className="flex gap-3 text-gray-600">
                    <StarIcon className="mt-1 h-4 w-4 shrink-0 text-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-black/5">
              <h2 className="text-xl font-bold text-ink">Course Outcome</h2>
              <p className="mt-2 text-gray-600">{course.outcome}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-ink">
                FAQs About Our {course.shortTitle} Course
              </h2>
              <div className="mt-4 divide-y divide-gray-100 rounded-3xl border border-black/5 bg-white shadow-sm">
                {course.faqs.map((faq) => (
                  <details key={faq.q} className="group p-5">
                    <summary className="cursor-pointer list-none font-semibold text-ink marker:content-none">
                      <span className="flex items-center justify-between gap-4">
                        {faq.q}
                        <span className="text-brand transition group-open:rotate-45">+</span>
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="space-y-6" as="aside">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <h3 className="text-lg font-bold text-ink">
                Ready to start your Quran journey?
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Book your free 3-day trial with our certified tutors today.
              </p>
              <Link
                href="/book-trial"
                className="cta-shiny mt-4 block rounded-full px-6 py-3 text-center font-semibold text-white transition"
              >
                Enroll Now In {course.shortTitle}
              </Link>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <h3 className="text-lg font-bold text-ink">Other Courses</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {courses
                  .filter((c) => c.slug !== course.slug)
                  .map((c) => (
                    <li key={c.slug}>
                      <Link href={`/courses/${c.slug}`} className="text-gray-600 transition hover:text-brand">
                        {c.shortTitle}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section relative overflow-hidden bg-gradient-to-br from-brand to-brand-dark text-white">
        <div className="blob -right-20 -top-20 h-72 w-72 bg-white/30" />
        <div className="container-page relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Ready to enroll in {course.shortTitle}?
            </h2>
            <p className="mt-2 text-white/90">
              Start with a free 3-day trial, no commitment required.
            </p>
          </div>
          <Link
            href="/book-trial"
            className="cta-shiny-dark whitespace-nowrap rounded-full px-8 py-3.5 font-semibold text-white transition hover:-translate-y-0.5"
          >
            Book Your Free 3-Day Trial
          </Link>
        </div>
      </section>
    </>
  );
}
