import About from "@/components/pages/About";
import Contact from "@/components/pages/Contact";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/pages/Hero";
import Products from "@/components/pages/Products";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
