import React, { useState } from "react";
import enUS from "../locales/en-US.json";
import ptBR from "../locales/pt-BR.json";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Featured from "../components/sections/Featured";
import Projects from "../components/sections/Projects";
import VerticalBox from "../components/VerticalBox";
import Footer from "../components/Footer";
import { useScreenPosition } from "../hooks/useScreenPosition";
import { useScreenWidth } from "../hooks/useScreenWidth";

const Index = () => {
  const ScreenPosition = useScreenPosition();
  const ScreenWidth = useScreenWidth();

  const [loading, setLoading] = useState(false);
  const [locale, setLocale] = useState(enUS);

  const handleLanguage = () => {
    locale === enUS ? setLocale(ptBR) : setLocale(enUS);
  };

  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : (
        <Wrapper>
          <Nav isMobile={ScreenWidth < 1150} locale={locale.sections.Nav.buttons} />
          <Hero isVisible={ScreenPosition >= 0} locale={locale.sections.Hero} />
          <About isVisible={ScreenPosition >= 200} data={locale.Technologies} locale={locale.sections.About} />
          <Featured isVisible={ScreenPosition >= 800} locale={locale.sections.Featured} />
          <Projects isVisible={ScreenPosition >= 3100} data={locale.Archive} locale={locale.sections.Projects} />
          <VerticalBox translate={handleLanguage} isMobile={ScreenWidth < 1150} />
          <Footer locale={locale.sections.Footer} />
        </Wrapper>
      )}
    </>
  );
};

export default Index;
