import Header from "@/components/Header";
import Contact from "@/components/Hero/Contact";
import FAQ from "@/components/Hero/FAQ";
import Hero from "@/components/Hero/Hero";
import Teachers from "@/components/Hero/Teachers";
import NoticeBoard from "@/components/NoticeBoard";

export default function Home() {
  return (
    <main>
      <Hero />
      <Teachers />
      <FAQ />
      <Contact />
      {/* <NoticeBoard /> */}
    </main>
  );
}
