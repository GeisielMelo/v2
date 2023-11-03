import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import logo from "../assets/img/logo.png";

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: padding 0.3s ease;
  padding: 18px 30px;

  @media (max-width: 1080px) {
    padding: 18px 20px;
  }

  border-bottom: 1px solid;
  border-color: ${(props) => (props["data-border-bottom"] ? props.theme.color.transparent.Slate : "transparent")};
  background: ${(props) => props.theme.color.Black};
  transition: border-color 0.2s ease-in-out;
  button {
    display: flex;
    align-items: center;
    height: 30px;
    padding: 10px;
    margin: 0 5px;
    transition: color 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.color.White};
    }
  }
  .hamburger-menu {
    width: 30px;
    height: 30px;
    background: none;
    color: ${(props) => props.theme.color.Slate};
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  button {
    background: none;
    color: ${(props) => props.theme.color.LightSlate};
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  .contact-btn {
    background: none;
    color: ${(props) => props.theme.color.LightSlate};
  }
  .resume-btn {
    background: none;
    color: ${(props) => props.theme.color.White};
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.color.transparent.Slate};
    transition: background 0.2s ease-in-out;
    &:hover {
      background: ${(props) => props.theme.color.Slate};
    }
  }
  .linkedIn-btn {
    background: ${(props) => props.theme.color.White};
    color: ${(props) => props.theme.color.Black};
    transition: background 0.2s ease-in-out;
    border-radius: 6px;
    &:hover {
      color: ${(props) => props.theme.color.Black};
      background: ${(props) => props.theme.color.LightSlate};
    }
  }
`;

const Logo = styled.div`
  width: 26px;
  height: 26px;
  img {
    max-width: 26px;
    margin-right: 30px;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 68px;
  width: calc(100% - 60px);

  display: flex;
  flex-direction: column;
  margin: 0 30px;
  button {
    background: ${(props) => props.theme.color.Black};
    color: ${(props) => props.theme.color.LightSlate};
    border-bottom: 1px solid ${(props) => props.theme.color.transparent.Slate};
    height: 48px;
    transition: border-color 0.1s ease-in-out;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.color.White};
      border-color: ${(props) => props.theme.color.White};
    }
  }
  .m-resume-btn {
    height: 40px;
    margin: 8px 0;
    border-radius: 6px;
    color: ${(props) => props.theme.color.White};
    border: 1px solid ${(props) => props.theme.color.transparent.Slate};
    transition: background 0.2s ease-in-out;
    &:hover {
      background: ${(props) => props.theme.color.Slate};
    }
  }
  .m-linkedIn-btn {
    height: 40px;
    margin: 8px 0;
    background: ${(props) => props.theme.color.White};
    color: ${(props) => props.theme.color.Black};
    transition: background 0.2s ease-in-out;
    border-radius: 6px;
    &:hover {
      color: ${(props) => props.theme.color.Black};
      background: ${(props) => props.theme.color.LightSlate};
    }
  }
`;

const Nav = ({ isMobile }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const linkedInUrl = "https://www.linkedin.com/in/geisiel-nascimento-858346265";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const handleInternalLinkClick = (link) => {
    window.location.href = link;
    setIsMobileMenuOpen(false);
  };

  const handleExternalLinkClick = (link) => {
    window.open(link, "_blank");
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {!isMobile ? (
        <Container data-border-bottom={prevScrollPos >= 65}>
          <Left>
            <Logo onClick={() => handleInternalLinkClick("/#")}><img src={logo} alt="Geisiel Melo Logo" /></Logo>
            <button onClick={() => handleInternalLinkClick("/#about")}>About</button>
            <button onClick={() => handleInternalLinkClick("/#featured")}>Featured</button>
            <button onClick={() => handleInternalLinkClick("/#projects")}>Projects</button>
            <button onClick={() => handleInternalLinkClick("/#archive")}>Archive</button>
          </Left>

          <Right>
            <button className="contact-btn" onClick={() => handleInternalLinkClick("/#contact")}>Contact</button>
            <button className="resume-btn" onClick={() => handleExternalLinkClick(linkedInUrl)}>Resume</button>
            <button className="linkedIn-btn" onClick={() => handleExternalLinkClick(linkedInUrl)}>LinkedIn</button>
          </Right>
        </Container>
      ) : (
        <>
          <Container data-border-bottom={prevScrollPos >= 65}>
            <Logo onClick={() => handleInternalLinkClick("/#")}><img src={logo} alt="Geisiel Melo Logo" /></Logo>
            <button className="hamburger-menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
            </button>
          </Container>
          {isMobileMenuOpen && (
            <MobileMenu>
              <button onClick={() => handleInternalLinkClick("/#about")}>About</button>
              <button onClick={() => handleInternalLinkClick("/#featured")}>Featured</button>
              <button onClick={() => handleInternalLinkClick("/#projects")}>Projects</button>
              <button onClick={() => handleInternalLinkClick("/#archive")}>Archive</button>
              <button onClick={() => handleInternalLinkClick("/#contact")}>Contact</button>
              <button className="m-resume-btn" onClick={() => handleExternalLinkClick(linkedInUrl)}>Resume</button>
              <button className="m-linkedIn-btn" onClick={() => handleExternalLinkClick(linkedInUrl)}>LinkedIn</button>
            </MobileMenu>
          )}
        </>
      )}
    </>
  );
};

export default Nav;
