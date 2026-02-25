import { profileData } from "@/data/profile";
import { CaseContent } from "@/components/CaseContent";

interface CasePageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return profileData.cases.map((caseItem) => ({
    id: caseItem.id,
  }));
}

export default async function CasePage({ params }: CasePageProps) {
  const { id } = await params;
  return <CaseContent id={id} />;
}
