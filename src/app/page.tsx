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

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <NicheBar />
      <Container>
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

        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
