import { HeroSection } from "@/components/component/hero-section";
import { LinkedinToZapfolio } from "@/components/component/linkedin-to-zapfolio";

export default function Home() {
  return (
    <div className=" h-full w-full overflow-x-hidden  flex flex-col"

    >
      <HeroSection />

      <LinkedinToZapfolio />


    </div>
  );
}
