import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights | OnGroundPM",
  description:
    "Practical articles on construction project management, estimating, and contracts from the OnGroundPM team.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="pt-28 pb-24 lg:pt-36 lg:pb-32 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <p className="font-sans text-sm uppercase tracking-widest text-terracotta mb-4">
          Insights
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal mb-4 text-balance">
          From the field.
        </h1>
        <p className="font-sans text-base text-warm-muted leading-relaxed mb-14 max-w-xl">
          Practical notes on construction PM, estimating, and contracts &mdash; written for builders and developers who want to manage their projects better.
        </p>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group border border-border bg-cream-dark rounded-sm p-8 hover:border-sandstone/60 hover:-translate-y-0.5 transition-all duration-200"
            >
              <p className="font-sans text-xs text-warm-muted uppercase tracking-widest mb-3">
                {new Date(post.date).toLocaleDateString("en-AU", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}{" "}
                &middot; {post.category}
              </p>
              <h2 className="font-serif text-2xl font-bold text-charcoal mb-3 group-hover:text-terracotta transition-colors">
                {post.title}
              </h2>
              <p className="font-sans text-base text-warm-muted leading-relaxed">
                {post.excerpt}
              </p>
              <p className="font-sans text-sm text-terracotta mt-4 font-medium">
                Read more &rarr;
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
