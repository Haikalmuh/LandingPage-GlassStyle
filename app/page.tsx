import Hero from "@/components/Hero";
import About from "@/components/About";
import Speakers from "@/components/Speakers";
import Schedule from "@/components/Schedule";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Speakers />
      <Schedule />
      <Registration />
      <Footer />
    </main>
  );
}
