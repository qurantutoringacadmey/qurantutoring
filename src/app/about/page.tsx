import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/data";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "About Us – Meet Our Founder & Quran Teaching Philosophy",
  description:
    "Meet Hafiz Qari Muhammad Shoukat, founder of Quran Tutoring, with over 15 years of experience teaching Quran, Tajweed, Hifz, and Islamic Studies online to students worldwide.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Quran Tutoring – Our Founder & Mission",
    description:
      "15+ years of authentic, structured Quran education, now available online for students of all ages.",
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
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">About Us</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Authentic and structured Quranic education, built on years of
            dedicated teaching experience.
          </p>
        </div>
        <WaveDivider fill="#fffdfb" />
      </section>

      <section className="section">
        <Reveal className="container-page mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-brand">
            Meet the Founder
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-ink">
            Hafiz Qari Muhammad Shoukat
          </h2>
          <p className="mt-1 font-semibold text-brand">
            Founder of Quran Tutoring
          </p>
          <p className="mt-5 leading-relaxed text-gray-600">
            At Quran Tutoring, we take pride in offering authentic and
            structured Quranic education under the guidance of our founder,
            Hafiz Qari Muhammad Shoukat. With over{" "}
            <strong>15 years</strong> of teaching experience, he has
            dedicated his life to spreading the knowledge of the Holy Quran
            and Islamic teachings.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            He holds qualifications in{" "}
            <strong>
              Hifz-e-Quran, Tajweed-e-Quran, Dars-e-Nizami, Arabic Language,
              and a PhD in Islamic Studies
            </strong>
            , making him a highly qualified and experienced instructor.
          </p>

          <div className="mt-10 flex justify-center gap-10 border-t border-black/5 pt-8">
            <div>
              <p className="text-3xl font-extrabold text-brand">
                <Counter to={15} suffix="+" />
              </p>
              <p className="text-sm text-gray-500">Years of Experience</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-brand">
                <Counter to={6} />
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
                To provide quality Quran education online with proper Tajweed,
                inspiring students to understand, recite, and live by the
                teachings of the Quran.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <h3 className="text-xl font-bold text-brand-light">Our Vision</h3>
              <p className="mt-3 text-gray-300">
                To become a trusted global Quran tutoring platform where
                students of all ages can learn the Quran easily, respectfully,
                and meaningfully, from the comfort of their homes.
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
            Start learning with a tutor who has taught for 15+ years
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
