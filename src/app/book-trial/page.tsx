import type { Metadata } from "next";
import { site } from "@/lib/data";
import BookTrialForm from "@/components/BookTrialForm";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";
import { ShieldIcon, ClockIcon, CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Book a Free Trial Class – No Commitment Required",
  description:
    "Book your free trial Quran class with a certified male or female tutor. No credit card, no commitment, just tell us your goals and we'll match you with the right tutor.",
  alternates: { canonical: "/book-trial" },
  openGraph: {
    title: "Book a Free Trial Class – Quran Tutoring",
    description:
      "No credit card, no commitment. Book your free trial Quran class today.",
    url: `${site.url}/book-trial`,
  },
};

const trialPerks = [
  {
    icon: ShieldIcon,
    title: "No Commitment",
    desc: "Your trial class is completely free, with no card required and no obligation to continue.",
  },
  {
    icon: ClockIcon,
    title: "We Reply Fast",
    desc: "Our team usually confirms your trial class within a few hours.",
  },
  {
    icon: CheckIcon,
    title: "Matched to You",
    desc: "We pair you with a certified tutor based on age, level, and course goals.",
  },
];

export default function BookTrialPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink py-24 text-center text-white">
        <div className="mesh-bg absolute inset-0" />
        <div className="blob -left-24 top-0 h-72 w-72 bg-brand" />
        <div className="container-page relative">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-light">
            Free Trial Class
          </span>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Book Your Free Trial Class
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Tell us a little about yourself or your child, and we&rsquo;ll match
            you with the right tutor for a free, no-commitment trial class.
          </p>
        </div>
        <WaveDivider fill="#fdf6ee" />
      </section>

      <section className="section bg-cream">
        <div className="container-page grid gap-8 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
              <h2 className="text-2xl font-bold text-ink">Tell Us About Your Goals</h2>
              <p className="mt-2 text-sm text-gray-600">
                Fill in the details below and our team will reach out to confirm
                your free trial class, usually within 24 hours.
              </p>
              <div className="mt-6">
                <BookTrialForm />
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="space-y-5">
            {trialPerks.map((perk) => (
              <div
                key={perk.title}
                className="card-lift rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-brand">
                  <perk.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-3 font-bold text-ink">{perk.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{perk.desc}</p>
              </div>
            ))}

            <div className="card-lift rounded-3xl bg-ink p-6 text-white shadow-sm">
              <h3 className="font-bold text-brand-light">Prefer to Chat Directly?</h3>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                className="mt-1 block text-white/90 hover:underline"
              >
                Message us on WhatsApp, 24/7
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
