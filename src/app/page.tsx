import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Gallery />
        <Footer />
      </div>
    </>
  );
}
