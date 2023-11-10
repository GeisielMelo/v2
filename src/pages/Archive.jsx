import React, { useState } from "react";
import enUS from "../locales/en-US.json";
import ptBR from "../locales/pt-BR.json";
import Wrapper from "../components/Wrapper";
import Nav from "../components/Nav";
import Table from "../components/Table";
import VerticalBox from "../components/VerticalBox";
import Footer from "../components/Footer";
import { useScreenWidth } from "../hooks/useScreenWidth";

const Archive = () => {
  const ScreenWidth = useScreenWidth();
  const [locale, setLocale] = useState(enUS);

  const handleLanguage = () => {
    locale === enUS ? setLocale(ptBR) : setLocale(enUS);
  };

  return (
    <Wrapper>
      <Nav isMobile={ScreenWidth < 1150} locale={locale.sections.Nav.buttons} />
      <Table />
      <VerticalBox translate={handleLanguage} isMobile={ScreenWidth < 1150} />
      <Footer locale={locale.sections.Footer} />
    </Wrapper>
  );
};

export default Archive;
