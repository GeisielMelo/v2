import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import VerticalBox from "../components/VerticalBox";
import Footer from "../components/Footer";

const Index = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState("enUS");

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
  };

  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : (
        <Wrapper>
          <Nav isMobile={isMobile} />
          <Hero />
          <About />
          <About />
          <About />
          <VerticalBox translate={handleLanguage} isMobile={isMobile} />
          <Footer />
        </Wrapper>
      )}
    </>
  );
};

export default Index;
