import { getAllPosts, getPost } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { remark } from "remark";
import remarkHtml from "remark-html";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | OnGroundPM`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const processed = await remark().use(remarkHtml).process(post.content);
  const contentHtml = processed.toString();

  return (
    <main className="pt-28 pb-24 lg:pt-36 lg:pb-32 px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-sans text-sm text-warm-muted hover:text-charcoal transition-colors mb-10"
        >
          &larr; All insights
        </Link>

        <p className="font-sans text-xs text-warm-muted uppercase tracking-widest mb-4">
          {new Date(post.date).toLocaleDateString("en-AU", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}{" "}
          &middot; {post.category}
        </p>

        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal mb-10 text-balance leading-tight">
          {post.title}
        </h1>

        <div
          className="prose prose-stone max-w-none font-sans text-warm-muted leading-relaxed
            prose-headings:font-serif prose-headings:text-charcoal prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-p:mb-5 prose-p:text-base
            prose-li:text-base prose-li:mb-1
            prose-a:text-terracotta prose-a:no-underline hover:prose-a:underline
            prose-strong:text-charcoal prose-strong:font-semibold
            prose-hr:border-border prose-hr:my-10"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        <div className="mt-14 pt-10 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-sans text-sm font-medium text-charcoal mb-1">
              Have a project to discuss?
            </p>
            <p className="font-sans text-sm text-warm-muted">
              We respond within one business day.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center px-6 py-3 bg-terracotta text-cream text-sm font-sans font-medium rounded-sm hover:bg-terracotta-dark transition-colors flex-shrink-0"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </main>
  );
}
