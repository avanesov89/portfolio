import type { Metadata } from "next";
import { profileData } from "@/data/profile";
import { CaseContent } from "@/components/CaseContent";
import { getCaseMetadata } from "@/lib/seo";

interface CasePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return profileData.cases.map((caseItem) => ({
    slug: caseItem.slug,
  }));
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  return getCaseMetadata(slug);
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params;
  return <CaseContent slug={slug} />;
}
