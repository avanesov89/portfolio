import type { Metadata } from "next";
import { blogPosts } from "@/data/blog";
import { BlogPostContent } from "@/components/BlogPostContent";
import { getBlogPostMetadata } from "@/lib/seo";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  return getBlogPostMetadata(slug);
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  return <BlogPostContent slug={slug} />;
}
