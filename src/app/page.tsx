import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";


export default function Home() {
  // Force scroll to top on mount to prevent browser scroll restoration
  if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual';
  }

  return (
    <>
      {/* Global Background */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <div className="global-grid-overlay" />
      </div>

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Gallery />
        <Footer />
      </div>
    </>
  );
}
