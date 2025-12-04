import BentoHero from "@/components/BentoHero";
import BentoGrid from "@/components/BentoGrid";
import Silk from "@/components/Silk";

export default function Home() {
  return (
    <>
      <Silk speed={5} scale={1} color="#7B7481" noiseIntensity={1.5} rotation={0} />
      <BentoHero />
      <BentoGrid />
    </>
  );
}

