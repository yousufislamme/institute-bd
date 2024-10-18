import Header from "@/components/Header";
import Contact from "@/components/Hero/Contact";
import FAQ from "@/components/Hero/FAQ";
import Hero from "@/components/Hero/Hero";
import TeacherCard from "@/components/Hero/TeacherCard";
import Teachers from "@/components/Hero/Teachers";
import NoticeBoard from "@/components/NoticeBoard";
import SchoolHero from "@/components/School-Hero/SchoolHero";

export default function Home() {
  return (
    <main>
      <SchoolHero />
      <Hero />
      <Teachers />
      <FAQ />
      <Contact />
      {/* <NoticeBoard /> */}
    </main>
  );
}
