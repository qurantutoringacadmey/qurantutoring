import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { courses, testimonials, whyChooseUs, generalFaqs, site } from "@/lib/data";
import { blogPosts } from "@/lib/blog";
import { SparkleIcon, StarIcon, ShieldIcon, ClockIcon, GlobeIcon, BookIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import WaveDivider from "@/components/WaveDivider";

const trustPoints = [
  {
    icon: ShieldIcon,
    title: "Ijazah-Certified Tutors",
    desc: "Verified qualifications in Tajweed, Hifz & Islamic Studies",
  },
  {
    icon: ClockIcon,
    title: "24/7 Scheduling",
    desc: "Classes that fit any time zone, any day of the week",
  },
  {
    icon: GlobeIcon,
    title: "Students Worldwide",
    desc: "Teaching families across the USA, UK, Canada & beyond",
  },
  {
    icon: BookIcon,
    title: "15+ Years Teaching",
    desc: "Structured curriculum built on real classroom experience",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Book a Free Trial",
    desc: "Reach out via WhatsApp, phone, or our contact form to schedule your free trial class.",
  },
  {
    step: "02",
    title: "Meet Your Tutor",
    desc: "Get matched with a certified male or female tutor based on your age, level, and goals.",
  },
  {
    step: "03",
    title: "Start Learning Live",
    desc: "Join one-on-one live video classes on Zoom or Skype, at a time that fits your schedule.",
  },
  {
    step: "04",
    title: "Track Your Progress",
    desc: "Receive regular progress updates and move through your course at a comfortable pace.",
  },
];

export const metadata: Metadata = {
  title: "Learn Quran Online with Certified Male & Female Tutors",
  description:
    "Join Quran Tutoring for personalized 1-on-1 online Quran classes, Noorani Qaida, Tajweed, Hifz, Arabic, and Islamic Studies for kids, adults, and beginners. Free trial class available, 24/7.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Learn Quran Online with Certified Male & Female Tutors",
    description:
      "Personalized 1-on-1 online Quran classes for kids, adults, and beginners worldwide. Free trial class, flexible scheduling, certified tutors.",
    url: site.url,
  },
};

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: generalFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink pb-28 pt-16 text-white sm:pt-24">
        <div className="mesh-bg absolute inset-0" />
        <div className="blob -left-32 -top-32 h-96 w-96 bg-brand" />
        <div className="blob -right-24 top-40 h-80 w-80 bg-brand-light" />
        <p
          dir="rtl"
          aria-hidden="true"
          className="float pointer-events-none absolute top-10 left-1/2 w-full -translate-x-1/2 whitespace-nowrap text-center font-arabic text-[5.5vw] font-bold leading-none text-brand-light/[0.11] sm:top-14 sm:text-[2.3vw]"
        >
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>

        <div className="container-page relative grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-light">
              <SparkleIcon className="h-3.5 w-3.5" /> Free Trial Class for New Students
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
              Empowering Souls Through{" "}
              <span className="gradient-text">Quranic Knowledge</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
              We warmly welcome students of all ages to join our online Quran
              classes with qualified male and female tutors, flexible timings,
              a free trial, and expert guidance every step of the way.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/book-trial"
                className="rounded-full bg-brand px-8 py-3.5 font-semibold text-white shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-light"
              >
                Enroll Now
              </Link>
              <Link
                href="/courses"
                className="rounded-full border border-white/20 px-8 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Explore Courses
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-8">
              <div>
                <p className="text-2xl font-extrabold text-brand-light">
                  <Counter to={15} suffix="+" />
                </p>
                <p className="text-sm text-gray-400">Years Teaching</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-brand-light">
                  <Counter to={6} />
                </p>
                <p className="text-sm text-gray-400">Courses Offered</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-brand-light">24/7</p>
                <p className="text-sm text-gray-400">Availability</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:ml-auto lg:mr-0">
            <div className="float relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-black/40 ring-1 ring-white/10">
              <Image
                src="/images/hero-image.jpg"
                alt="Child listening to Quran recitation while reading along"
                fill
                priority
                sizes="(max-width: 640px) 320px, 384px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden w-56 rounded-2xl border border-white/10 bg-ink/90 p-4 shadow-2xl shadow-black/50 backdrop-blur-md sm:block">
              <p className="text-sm font-semibold text-white">Live 1-on-1 Classes</p>
              <p className="mt-1 text-xs leading-relaxed text-gray-300">
                With certified male &amp; female tutors, worldwide.
              </p>
            </div>
          </div>
        </div>
        <WaveDivider fill="#ffffff" />
      </section>

      {/* Trust bar marquee */}
      <section className="marquee-wrap overflow-hidden border-b border-black/5 bg-white py-7">
        <div className="marquee-track">
          {[...trustPoints, ...trustPoints].map((point, i) => (
            <div
              key={`${point.title}-${i}`}
              className="flex shrink-0 items-center gap-3 px-8"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-brand">
                <point.icon className="h-5 w-5" />
              </span>
              <div className="whitespace-nowrap">
                <p className="font-bold text-ink">{point.title}</p>
                <p className="text-sm text-gray-500">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2">
          <div className="relative order-2 aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] shadow-xl lg:order-1">
            <Image
              src="/images/hero-secondary.jpg"
              alt="Child reading the Quran"
              fill
              className="object-cover"
            />
          </div>
          <Reveal className="order-1 lg:order-2">
            <span className="text-sm font-bold uppercase tracking-widest text-brand">
              Learn Quran Online
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              Expert Tutors For Kids, Adults &amp; Beginners
            </h2>
            <p className="mt-5 leading-relaxed text-gray-600">
              At <strong>Quran Tutoring</strong>, we offer personalized online
              Quran classes for all age groups, from young children to busy
              adults and complete beginners. Our qualified tutors use
              interactive teaching methods, combining fun activities with
              structured Quranic lessons to keep young learners engaged and
              motivated.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              If you&rsquo;re just starting, our tutors will guide you step by
              step through the basics of Quran reading, including Arabic
              letters, Tajweed rules, pronunciation, and recitation
              techniques, all at your own pace.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Whether you&rsquo;re searching for an online Quran academy for
              your child, a Tajweed teacher to refine your recitation, or a
              structured Hifz program to become a Hafiz, Quran Tutoring
              connects you with a dedicated tutor and a flexible schedule
              built around your life, not the other way around.
            </p>
          </Reveal>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-cream">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-brand">
              How It Works
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              Start Learning in Four Simple Steps
            </h2>
            <p className="mt-3 text-gray-600">
              Getting started with Quran Tutoring is quick, flexible, and
              built around your schedule.
            </p>
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((item, i) => (
              <Reveal key={item.step} delay={i * 100}>
                <div className="card-lift relative h-full rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                  <span className="text-4xl font-extrabold text-brand/15">
                    {item.step}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-brand">
              Our Programs
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              What You Can Learn
            </h2>
            <p className="mt-3 text-gray-600">
              Explore our full range of Quran and Islamic learning courses,
              guided by certified, experienced tutors.
            </p>
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, i) => (
              <Reveal key={course.slug} delay={(i % 3) * 100}>
                <div className="card-lift flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
                  <div className="relative h-48 w-full">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-bold text-ink">{course.shortTitle}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                      {course.summary}
                    </p>
                    <div className="mt-4 flex items-center gap-4">
                      <Link
                        href="/book-trial"
                        className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
                      >
                        Book Trial
                      </Link>
                      <Link
                        href={`/courses/${course.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition hover:gap-2.5 hover:text-brand-dark"
                      >
                        Read More <span aria-hidden>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section relative bg-ink text-white">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-light">
              Why Choose Us
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              The First Choice for Authentic Quran Education
            </h2>
            <p className="mt-4 text-gray-300">
              We are the first choice for individuals and families seeking
              authentic, flexible, and high-quality Quran education online,
              and here&rsquo;s why:
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-brand/40 hover:bg-white/10">
                  <h3 className="font-bold text-brand-light">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-gray-300">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <WaveDivider fill="#fffdfb" />
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-brand">
              Testimonials
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              What Our Students Say
            </h2>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <div className="card-lift h-full rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
                  <div className="mb-3 flex gap-1 text-brand">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <StarIcon key={j} className="h-4 w-4" />
                    ))}
                  </div>
                  <h3 className="font-bold text-ink">{t.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="mt-4 text-sm font-semibold text-ink">
                    {t.name} <span className="font-normal text-gray-500">– {t.location}</span>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-cream">
        <div className="container-page mx-auto max-w-3xl">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-brand">
              Frequently Asked Questions
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              Common Questions About Learning Quran Online
            </h2>
          </div>
          <div className="mt-10 divide-y divide-black/5 rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
            {generalFaqs.map((faq) => (
              <details key={faq.q} className="group p-6">
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
      </section>

      {/* Blog preview */}
      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-brand">
              From Our Blog
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              Guides on Quran Learning &amp; Tajweed
            </h2>
            <p className="mt-3 text-gray-600">
              Practical articles to help you and your family get the most out
              of online Quran education.
            </p>
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card-lift flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5"
              >
                <div className="relative h-48 w-full">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-brand">
                    {post.readTime}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-ink">{post.title}</h3>
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

          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-block rounded-full border border-black/10 px-7 py-3 font-semibold text-ink transition hover:bg-black/5"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section relative overflow-hidden bg-gradient-to-br from-brand to-brand-dark text-white">
        <div className="blob -right-20 -top-20 h-72 w-72 bg-white/30" />
        <div className="container-page relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Ready to begin your Quran journey?
            </h2>
            <p className="mt-2 text-white/90">
              Start with a free trial class, no commitment required.
            </p>
          </div>
          <Link
            href="/book-trial"
            className="whitespace-nowrap rounded-full bg-ink px-8 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-black"
          >
            Start Your Free Trial Today!
          </Link>
        </div>
        <WaveDivider fill="#0f1115" />
      </section>
    </>
  );
}
