import Link from "next/link";
import Image from "next/image";
import { site, courses } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-gray-300">
      <div className="container-page grid gap-10 py-16 md:grid-cols-4">
        <div>
          <Link href="/" className="mb-4 flex items-center gap-2.5">
            <Image src="/images/logo.png" alt="Quran Tutoring logo" width={48} height={48} />
            <span className="text-lg font-extrabold text-white">
              Quran<span className="text-brand">Tutoring</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-gray-400">
            Online Quran Tutoring is available to individuals of all ages without any
            distinction. We have an experienced team to identify the strengths &amp;
            weaknesses of every student.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { label: "f", href: site.social.facebook, name: "Facebook" },
              { label: "ig", href: site.social.instagram, name: "Instagram" },
              { label: "in", href: site.social.linkedin, name: "LinkedIn" },
            ].map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm text-white transition hover:bg-brand"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/" className="transition hover:text-brand-light">Home</Link></li>
            <li><Link href="/blog" className="transition hover:text-brand-light">Blog</Link></li>
            <li><Link href="/about" className="transition hover:text-brand-light">About Us</Link></li>
            <li><Link href="/contact" className="transition hover:text-brand-light">Contact Us</Link></li>
            <li><Link href="/pricing" className="transition hover:text-brand-light">Pricing</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Our Courses</h3>
          <ul className="space-y-2.5 text-sm">
            {courses.map((c) => (
              <li key={c.slug}>
                <Link href={`/courses/${c.slug}`} className="transition hover:text-brand-light">
                  {c.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Get In Touch</h3>
          <ul className="space-y-2.5 text-sm">
            <li>Email: {site.email}</li>
            <li>Phone: {site.phone}</li>
            <li>Available 24/7, worldwide</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Quran Tutoring. All Rights Reserved.
      </div>
    </footer>
  );
}
