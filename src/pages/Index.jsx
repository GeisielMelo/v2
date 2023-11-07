import React, { useEffect, useState } from "react";
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

  const [data, setData] = useState(enUS);
  const [language, setLanguage] = useState("enUS");
  const [loading, setLoading] = useState(false);

  const handleLanguage = () => {
    const newLanguage = language === "enUS" ? "ptBR" : "enUS";
    localStorage.setItem("language", JSON.stringify(newLanguage));
    setLanguage(newLanguage);
    language === "enUS" ? setData(enUS) : setData(ptBR);
  };

  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : (
        <Wrapper>
          <Nav isMobile={ScreenWidth < 1150} />
          <Hero isVisible={ScreenPosition >= 0} />
          <About isVisible={ScreenPosition >= 200} data={data.Technologies} />
          <Featured isVisible={ScreenPosition >= 800} />
          <Projects isVisible={ScreenPosition >= 3100} data={data.Archive} />
          <VerticalBox translate={handleLanguage} isMobile={ScreenWidth < 1150} />
          <Footer />
        </Wrapper>
      )}
    </>
  );
};

export default Index;
