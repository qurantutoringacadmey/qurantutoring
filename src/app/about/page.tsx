import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/data";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "About Us – Our Story Since 2011 & Our Founder",
  description:
    "Quran Tutoring began in 2011 as a small local Quran class run by Hafiz Qari Muhammad Shoukat. Fifteen years on, it's an online academy teaching students worldwide.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Quran Tutoring – Our Story Since 2011",
    description:
      "From a small local Quran class in 2011 to an online academy teaching students around the world, this is our story.",
    url: `${site.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink py-24 text-center text-white">
        <div className="mesh-bg absolute inset-0" />
        <div className="blob -left-24 top-10 h-72 w-72 bg-brand" />
        <div className="container-page relative">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-light">
            Our Story
          </span>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Teaching the Quran Since 2011
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            What started as a few local Quran lessons has grown into an
            online academy trusted by families around the world.
          </p>
        </div>
        <WaveDivider fill="#fffdfb" />
      </section>

      {/* Our Story narrative */}
      <section className="section">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-widest text-brand">
              How We Started
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              A Small Quran Class That Grew Into a Global Academy
            </h2>
            <p className="mt-5 leading-relaxed text-gray-600">
              Quran Tutoring didn&rsquo;t begin as a company. In 2011, Hafiz
              Qari Muhammad Shoukat started teaching Quran to children in his
              own neighborhood, one student at a time, on a mat in his
              living room. Word spread. Parents who saw how patiently he
              worked with their children began referring their friends and
              relatives, and within a few years what had been a handful of
              local students had grown into something much bigger than one
              teacher could manage alone.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              As more families, including many living abroad, began asking
              if their children could join the same classes over video call,
              the academy naturally moved online. Today, the same approach
              that worked in that first living room, patient, one-on-one
              attention from a tutor who genuinely cares about your
              child&rsquo;s progress, is what we still build every class
              around, now for students across the USA, UK, Canada, and
              beyond.
            </p>
          </Reveal>
          <Reveal delay={100} className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] shadow-xl">
            <Image
              src="/images/boy-reading-quran-mosque.jpg"
              alt="Student reading the Quran with a tutor"
              fill
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Founder */}
      <section className="section bg-cream">
        <Reveal className="container-page mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-brand">
            Meet the Founder
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-ink">
            Hafiz Qari Muhammad Shoukat
          </h2>
          <p className="mt-1 font-semibold text-brand">
            Founder &amp; Lead Tutor, Quran Tutoring
          </p>
          <p className="mt-5 leading-relaxed text-gray-600">
            Qari Shoukat holds qualifications in Hifz-e-Quran,
            Tajweed-e-Quran, Dars-e-Nizami, and Arabic Language, along with a
            PhD in Islamic Studies. But parents who&rsquo;ve enrolled their
            children with him over the years usually mention something else
            first: his patience. He still personally trains every tutor who
            joins the academy, so the same standard of care he brought to
            that first living room class in 2011 carries through to every
            lesson today.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            &ldquo;I don&rsquo;t think of myself as running an academy,&rdquo;
            he says. &ldquo;I think of it as a group of teachers who care
            about your child the way I cared about my first students, back
            when it was just me and a Qaida book.&rdquo;
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-10 border-t border-black/5 pt-8">
            <div>
              <p className="text-3xl font-extrabold text-brand">2011</p>
              <p className="text-sm text-gray-500">Academy Founded</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-brand">
                <Counter to={15} suffix="+" />
              </p>
              <p className="text-sm text-gray-500">Years Teaching</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-brand">
                <Counter to={9} />
              </p>
              <p className="text-sm text-gray-500">Courses Offered</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-brand">24/7</p>
              <p className="text-sm text-gray-500">Availability</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section relative overflow-hidden bg-ink text-white">
        <Image
          src="/images/mosque-dome-interior.jpg"
          alt=""
          fill
          className="object-cover opacity-15"
        />
        <div className="container-page relative grid gap-7 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <h3 className="text-xl font-bold text-brand-light">Our Mission</h3>
              <p className="mt-3 text-gray-300">
                To teach the Quran the way it was taught to us, patiently,
                properly, and with real care for each student, no matter
                where in the world they&rsquo;re logging in from.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <h3 className="text-xl font-bold text-brand-light">Our Vision</h3>
              <p className="mt-3 text-gray-300">
                To remain the kind of academy families refer to their
                friends and relatives, the same way ours grew, one
                recommendation at a time, for many more years to come.
              </p>
            </div>
          </Reveal>
        </div>
        <WaveDivider fill="#e8730a" />
      </section>

      <section className="section relative overflow-hidden bg-gradient-to-br from-brand to-brand-dark text-white">
        <div className="blob -right-20 -top-20 h-72 w-72 bg-white/30" />
        <div className="container-page relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Join the academy families have trusted since 2011
          </h2>
          <Link
            href="/book-trial"
            className="cta-shiny-dark whitespace-nowrap rounded-full px-8 py-3.5 font-semibold text-white transition hover:-translate-y-0.5"
          >
            Start Your Free 3-Day Trial
          </Link>
        </div>
        <WaveDivider fill="#0f1115" />
      </section>
    </>
  );
}
