import Navbar from "@/components/layout/navbar";
import Hero from "@/components/hero/hero";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}