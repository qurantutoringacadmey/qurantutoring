import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pricingPlans, paymentMethods, site } from "@/lib/data";
import { CheckIcon, ShieldIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Quran Class Pricing – Affordable Online Quran Course Plans",
  description:
    "Affordable monthly Quran class plans for kids and adults, starting at $35/month, plus a dedicated Hifz (memorization) plan, all including a free trial class.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Quran Class Pricing – Affordable Online Quran Course Plans",
    description:
      "Simple, affordable monthly plans for every student, with a free trial class before you commit.",
    url: `${site.url}/pricing`,
  },
};

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink py-24 text-center text-white">
        <Image
          src="/images/mosque-minaret.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink to-ink" />
        <div className="container-page relative">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-light">
            Simple &amp; Affordable
          </span>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Pricing Plans</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Simple, affordable monthly plans for every student, with a free trial
            class before you commit.
          </p>
        </div>
        <WaveDivider fill="#fdf6ee" />
      </section>

      <section className="section bg-cream">
        <div className="container-page grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
          {pricingPlans.map((plan, i) => {
            const primary = plan.prices[0];
            const rest = plan.prices.slice(1);
            return (
              <Reveal key={plan.name} delay={i * 80}>
                <div
                  className={`card-lift flex h-full flex-col rounded-3xl p-6 ${
                    plan.highlight
                      ? "bg-ink text-white shadow-xl ring-1 ring-brand/40"
                      : "bg-white shadow-sm ring-1 ring-black/5"
                  }`}
                >
                  {plan.highlight && (
                    <span className="mb-3 inline-block w-fit rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  )}
                  <h3 className={`text-lg font-bold ${plan.highlight ? "text-white" : "text-ink"}`}>
                    {plan.name}
                  </h3>
                  <p className={`mt-1 text-sm ${plan.highlight ? "text-gray-400" : "text-gray-500"}`}>
                    {plan.recommendedFor}
                  </p>

                  <p className={`mt-4 text-4xl font-extrabold ${plan.highlight ? "text-white" : "text-ink"}`}>
                    {primary.symbol}
                    {primary.amount}
                    <span className={`text-base font-medium ${plan.highlight ? "text-gray-400" : "text-gray-500"}`}>
                      {" "}
                      {primary.currency}/mo
                    </span>
                  </p>

                  <ul className={`mt-3 space-y-1 text-xs ${plan.highlight ? "text-gray-400" : "text-gray-500"}`}>
                    {rest.map((p) => (
                      <li key={p.currency} className="flex justify-between">
                        <span>{p.currency}</span>
                        <span>
                          {p.symbol}
                          {p.amount}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <ul className={`mt-6 flex-1 space-y-3 border-t pt-5 text-sm ${plan.highlight ? "border-white/10 text-gray-300" : "border-black/5 text-gray-600"}`}>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 shrink-0 text-brand" /> {plan.classesPerMonth}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 shrink-0 text-brand" /> {plan.classesPerWeek}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 shrink-0 text-brand" /> {plan.duration}
                    </li>
                  </ul>

                  <Link
                    href="/book-trial"
                    className={`mt-6 block rounded-full px-5 py-2.5 text-center text-sm font-semibold transition ${
                      plan.highlight
                        ? "bg-brand text-white hover:bg-brand-light"
                        : "bg-ink text-white hover:bg-brand"
                    }`}
                  >
                    Book Trial
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="container-page mt-14 rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-black/5">
          <h3 className="text-xl font-bold text-ink">All Plans Include!</h3>
          <div className="mt-4 flex flex-wrap justify-center gap-6 text-gray-700">
            <span className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-brand" /> Free Trial Class
            </span>
            <span className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-brand" /> 24/7 Availability
            </span>
            <span className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-brand" /> Classes via Zoom / Skype
            </span>
          </div>
        </div>

        <div className="container-page mt-16">
          <h3 className="text-center text-xl font-bold text-ink">
            We accept the following payment methods for your convenience
          </h3>
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            {paymentMethods.map((m) => (
              <span
                key={m}
                className="rounded-full bg-white px-6 py-3 font-semibold text-ink shadow-sm ring-1 ring-black/5"
              >
                {m}
              </span>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-gray-600">
            After making your payment, please send us the transaction details (Full
            Name, Amount, and Reference Number) via WhatsApp or Email at{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-brand">
              {site.email}
            </a>{" "}
            so we can confirm your payment promptly.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page mx-auto max-w-3xl">
          <Reveal>
            <div className="flex flex-col items-center gap-6 rounded-3xl border border-black/5 bg-white p-10 text-center shadow-sm sm:flex-row sm:text-left">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-brand">
                <ShieldIcon className="h-8 w-8" />
              </span>
              <div>
                <h2 className="text-xl font-bold text-ink">Our No-Risk Guarantee</h2>
                <p className="mt-2 text-gray-600">
                  Every plan starts with a free trial class, no credit card, no
                  commitment. If you&rsquo;re not happy with your tutor, we&rsquo;ll
                  match you with another one at no extra cost. You only pay once
                  you&rsquo;re confident Quran Tutoring is the right fit for your family.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section relative overflow-hidden bg-gradient-to-br from-brand to-brand-dark text-white">
        <div className="blob -right-20 -top-20 h-72 w-72 bg-white/30" />
        <div className="container-page relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Ready to begin your Quran journey?
            </h2>
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
