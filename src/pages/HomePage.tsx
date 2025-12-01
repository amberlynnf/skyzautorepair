import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect } from "react";
import { Header } from "../components/header/Header";
import { Hero } from "../components/main/hero/Hero";
import { AboutHero } from "../components/main/hero/about-hero/AboutHero";
import { ServiceHero } from "../components/main/hero/service-hero/ServiceHero";
import { Footer } from "../components/footer/Footer";
import { LearnMore } from "../components/main/hero/learn-hero/LearnMore";
import { Specials } from "../components/main/hero/specials-hero/Specials";

export function HomePage() {
  const [opened, { toggle }] = useDisclosure(false);

  useEffect(() => {
    const heroElement = document.getElementById('home');
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { desktop: true, mobile: !opened } }}
      styles={{
        main: {
          padding: 0,
          margin: 0,
        },
      }}
      padding="md"
    >
      <Header opened={opened} toggle={toggle} />

      <Hero id="home" />

      <AboutHero id="about" />

      <ServiceHero />
      <LearnMore/>
      <Specials/>

      <Footer />
    </AppShell>
  );
}

export default HomePage;
