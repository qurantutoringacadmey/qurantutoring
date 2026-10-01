import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog";
import { site } from "@/lib/data";
import WaveDivider from "@/components/WaveDivider";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${site.url}/blog/${post.slug}`,
      publishedTime: post.date,
      images: [{ url: post.image, width: 1200, height: 800, alt: post.title }],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `${site.url}${post.image}`,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: `${site.url}/images/logo.png` },
    },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${site.url}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${site.url}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="relative overflow-hidden bg-ink py-24 text-white">
        <Image src={post.image} alt={post.title} fill className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
        <div className="container-page relative mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-wide text-brand-light">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">{post.title}</h1>
        </div>
        <WaveDivider fill="#fdf6ee" />
      </section>

      <section className="section bg-cream">
        <div className="container-page grid gap-14 lg:grid-cols-3">
          <article className="lg:col-span-2 space-y-8">
            {post.content.map((block, i) => (
              <div key={i}>
                {block.heading && (
                  <h2 className="mb-3 text-2xl font-bold text-ink">{block.heading}</h2>
                )}
                {block.paragraphs.map((p, j) => (
                  <p key={j} className="mb-3 leading-relaxed text-gray-600">
                    {p}
                  </p>
                ))}
                {block.list && (
                  <ul className="mt-2 space-y-2">
                    {block.list.map((item) => (
                      <li key={item} className="flex gap-3 text-gray-600">
                        <span className="mt-1 text-brand">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="rounded-3xl bg-ink p-8 text-center text-white">
              <h3 className="text-xl font-bold">Ready to start learning with a certified tutor?</h3>
              <p className="mt-2 text-gray-300">
                Book a free trial class and see the difference for yourself.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-block rounded-full bg-brand px-7 py-3 font-semibold text-white transition hover:bg-brand-light"
              >
                Book Your Free Trial
              </Link>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <h3 className="text-lg font-bold text-ink">More Articles</h3>
              <ul className="mt-3 space-y-3 text-sm">
                {otherPosts.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`} className="text-gray-600 transition hover:text-brand">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <h3 className="text-lg font-bold text-ink">Explore Our Courses</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link href="/courses/basic-qaida" className="text-gray-600 transition hover:text-brand">Basic Qaida</Link></li>
                <li><Link href="/courses/quran-reading-with-tajweed" className="text-gray-600 transition hover:text-brand">Quran with Tajweed</Link></li>
                <li><Link href="/courses/quran-memorization" className="text-gray-600 transition hover:text-brand">Quran Memorization</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
