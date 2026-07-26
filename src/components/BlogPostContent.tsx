import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import { BlogPostArticle } from "@/components/BlogPostArticle";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { profileData } from "@/data/profile";

interface BlogPostContentProps {
  slug: string;
}

export function BlogPostContent({ slug }: BlogPostContentProps) {
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <BlogPostArticle post={post} />
      <Footer email={profileData.email} telegram={profileData.telegram} />
    </>
  );
}
