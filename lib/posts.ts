import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "content/posts");

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
};

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(postsDir, file), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug: file.replace(".md", ""),
        title: data.title as string,
        date: data.date as string,
        category: (data.category as string) || "Insights",
        excerpt: (data.excerpt as string) || "",
        content,
      };
    })
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getPost(slug: string): Post | null {
  try {
    const raw = fs.readFileSync(path.join(postsDir, `${slug}.md`), "utf-8");
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      category: (data.category as string) || "Insights",
      excerpt: (data.excerpt as string) || "",
      content,
    };
  } catch {
    return null;
  }
}
