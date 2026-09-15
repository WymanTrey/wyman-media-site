import Hero from "@/components/Hero";
import NicheBar from "@/components/NicheBar";
import Problems from "@/components/Problems";
import OurWork from "@/components/OurWork";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import PatternDivider from "@/components/PatternDivider";
import ContractorProblems from "@/components/ContractorProblems";
import ContractorBenefits from "@/components/ContractorBenefits";
import ContractorWork from "@/components/ContractorWork";
import ContractorPricing from "@/components/Pricing/ContractorPricing";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <PatternDivider />
      <NicheBar />

      <div id="beauty-spas">
        <Container>
          <div className="text-center pt-6 pb-2">
            <span className="inline-block bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full">
              For Salons, Barbers &amp; Spas
            </span>
          </div>

          <Section
            id="problem"
            title="Great work isn't enough anymore."
            description="If people can't find you, trust you, and book you instantly, the appointment goes to whoever they can."
          >
            <Problems />
          </Section>

          <Benefits />

          <Section
            id="work"
            title="Real work, built for booking businesses."
            description="See exactly what we build — live example sites, for every niche we serve."
          >
            <OurWork />
          </Section>

          <Section
            id="pricing"
            title="One simple monthly subscription."
            description="We build it, run it, and keep it working while you work."
          >
            <Pricing />
          </Section>

          <FAQ />

          <Stats />
        </Container>
      </div>

      <PatternDivider />

      <div id="contractors" className="bg-gray-50">
        <Container>
          <div className="text-center pt-6 pb-2">
            <span className="inline-block bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full">
              For Contractors
            </span>
          </div>

          <Section
            id="contractor-problem"
            title="Reputation is what wins high-ticket jobs."
            description="If your reviews and referrals aren't building on their own, the job goes to whoever's word-of-mouth is louder."
          >
            <ContractorProblems />
          </Section>

          <ContractorBenefits />

          <Section
            id="contractor-work"
            title="Real work, built for contractors."
            description="Live examples of what we build for local contractors."
          >
            <ContractorWork />
          </Section>

          <Section
            id="contractor-pricing"
            title="One upfront setup, then a simple monthly retainer."
            description="We build it, run it, and keep it working while you're on the job."
          >
            <ContractorPricing />
          </Section>
        </Container>
      </div>

      <Container>
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
