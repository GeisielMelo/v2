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

const Index = () => {
  const [data, setData] = useState(enUS);
  const [language, setLanguage] = useState("enUS");
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1150);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    if (loading) {
      setLoading(false);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          <Nav isMobile={isMobile} />
          <Hero />
          <About data={data.Technologies} />
          <Featured />
          <Projects data={data.Archive} />
          <VerticalBox translate={handleLanguage} isMobile={isMobile} />
          <Footer />
        </Wrapper>
      )}
    </>
  );
};

export default Index;
