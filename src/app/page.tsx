import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Silk from "@/components/Silk";

export default function Home() {
  return (
    <>
      <Silk speed={5} scale={1} color="#7B7481" noiseIntensity={1.5} rotation={0} />
      <Hero />
      <Gallery />
    </>
  );
}

