import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/sections/AboutSection";

export default function Nosotros() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
