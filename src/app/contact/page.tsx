import type { Metadata } from "next";
import { site } from "@/lib/data";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us – Book a Free Trial Quran Class",
  description:
    "Get in touch with Quran Tutoring for course enquiries or to book a free trial Quran class, available 24/7 via WhatsApp, phone, or email.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Quran Tutoring – Book Your Free Trial Class",
    description:
      "Reach our support team 24/7 via WhatsApp, phone, or email to start your Quran learning journey.",
    url: `${site.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink py-24 text-center text-white">
        <div className="blob -right-24 top-0 h-72 w-72 bg-brand" />
        <div className="container-page relative">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-light">
            Get In Touch
          </span>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            We would love to hear from you! Whether you&rsquo;re looking to enroll
            in one of our Quran courses, book a free trial class, or simply ask a
            question, we&rsquo;re here to help you every step of the way.
          </p>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-page grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5 lg:col-span-2">
            <h2 className="text-2xl font-bold text-ink">Send Us a Message</h2>
            <p className="mt-2 text-sm text-gray-600">
              Our support team is available 24/7 to assist students and parents
              from around the world. We aim to respond as quickly as possible.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-5">
            <div className="card-lift rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <h3 className="font-bold text-ink">Call Us</h3>
              <a href={`tel:${site.whatsapp}`} className="mt-1 block text-brand hover:underline">
                {site.phone}
              </a>
            </div>
            <div className="card-lift rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <h3 className="font-bold text-ink">Email Us</h3>
              <a href={`mailto:${site.email}`} className="mt-1 block text-brand hover:underline">
                {site.email}
              </a>
            </div>
            <div className="card-lift rounded-3xl bg-ink p-6 text-white shadow-sm">
              <h3 className="font-bold text-brand-light">WhatsApp</h3>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                className="mt-1 block text-white/90 hover:underline"
              >
                Chat with us anytime, 24/7
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
