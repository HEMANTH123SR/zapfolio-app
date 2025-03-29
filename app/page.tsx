import { HeroSection } from "@/components/component/hero-section";
import { LinkedinToZapfolio } from "@/components/component/linkedin-to-zapfolio";
import { ZapfolioFeedbackSection } from "@/components/component/feedback-section";
import { FaqSection } from "@/components/component/faq";
import { hackerMedium } from "@/fonts/font";

export default function Home() {
  return (
    <div className=" h-full w-full overflow-x-hidden  flex flex-col"
      style={hackerMedium.style}

    >
      <HeroSection />

      <LinkedinToZapfolio />

      <ZapfolioFeedbackSection />
      <FaqSection />

    </div>
  );
}
