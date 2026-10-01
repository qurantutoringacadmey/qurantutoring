"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { site, courses } from "@/lib/data";
import { WhatsAppIcon, PhoneIcon, MailIcon } from "@/components/icons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
          : "bg-white/60 backdrop-blur-md"
      }`}
    >
      <div className="hidden sm:block border-b border-black/5 bg-ink text-white text-xs">
        <div className="container-page flex flex-wrap items-center justify-between gap-2 py-2">
          <div className="flex flex-wrap items-center gap-5">
            <a
              href={`https://wa.me/${site.whatsapp}`}
              className="flex items-center gap-1.5 text-gray-300 transition hover:text-brand-light"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" /> {site.phone}
            </a>
            <a
              href={`tel:${site.phoneAlt.replace(/[^\d+]/g, "")}`}
              className="flex items-center gap-1.5 text-gray-300 transition hover:text-brand-light"
            >
              <PhoneIcon className="h-3.5 w-3.5" /> {site.phoneAlt}
            </a>
          </div>
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-1.5 text-gray-300 transition hover:text-brand-light"
          >
            <MailIcon className="h-3.5 w-3.5" /> {site.email}
          </a>
        </div>
      </div>

      <div className="container-page flex items-center justify-between py-3.5">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/images/logo.png" alt="Quran Tutoring logo" width={48} height={48} priority />
          <span className="text-xl font-extrabold tracking-tight text-ink">
            Quran<span className="text-brand">Tutoring</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 font-medium text-ink/80">
          {navLinks.map((link) =>
            link.label === "Courses" ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setCoursesOpen(true)}
                onMouseLeave={() => setCoursesOpen(false)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 rounded-full px-4 py-2 transition hover:bg-black/[0.04] hover:text-brand"
                >
                  {link.label} <span aria-hidden className="text-[10px]">▾</span>
                </Link>
                {coursesOpen && (
                  <div className="absolute left-0 top-full w-72 overflow-hidden rounded-2xl border border-black/5 bg-white py-2 shadow-2xl shadow-black/10">
                    {courses.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/courses/${c.slug}`}
                        className="block px-5 py-2.5 text-sm text-ink/80 transition hover:bg-orange-50 hover:text-brand"
                      >
                        {c.shortTitle}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 transition hover:bg-black/[0.04] hover:text-brand"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brand"
          >
            Enroll Now
          </Link>
        </div>

        <button
          className="lg:hidden text-2xl text-ink"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-black/5 bg-white">
          <div className="container-page flex flex-col py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2.5 font-medium text-ink hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-ink px-6 py-3 text-center font-semibold text-white"
            >
              Enroll Now
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
