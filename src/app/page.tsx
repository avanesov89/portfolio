import { profileData } from "@/data/profile";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Cases } from "@/components/Cases";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { AdditionalInfo } from "@/components/AdditionalInfo";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero
          name={profileData.name}
          position={profileData.position}
          tagline={profileData.tagline}
        />
        <Cases cases={profileData.cases} />
        <About about={profileData.about} />
        <Experience experience={profileData.experience} />
        <AdditionalInfo
          education={profileData.education}
          certificates={profileData.certificates}
          hobbies={profileData.hobbies}
        />
      </main>
      <Footer
        email={profileData.email}
        telegram={profileData.telegram}
      />
    </>
  );
}
