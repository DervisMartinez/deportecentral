import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import RadioSection from "@/components/sections/RadioSection";
import CoveragesSection from "@/components/sections/CoveragesSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <RadioSection />
        <CoveragesSection />
      </main>
      <Footer />
    </>
  );
}
