import { profileData } from "@/data/profile";
import { CaseContent } from "@/components/CaseContent";

interface CasePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return profileData.cases.map((caseItem) => ({
    slug: caseItem.slug,
  }));
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params;
  return <CaseContent slug={slug} />;
}
