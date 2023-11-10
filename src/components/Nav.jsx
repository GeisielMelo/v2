import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: padding 0.3s ease;
  padding: 18px 30px;

  z-index: 1;

  @media (max-width: 1080px) {
    padding: 18px 20px;
  }

  border-bottom: 1px solid;
  border-color: ${(props) => (props["data-border-bottom"] ? props.theme.color.grey.transparent : "transparent")};
  background: ${(props) => props.theme.color.black.default};
  transition: border-color 0.2s ease-in-out;
  button {
    display: flex;
    align-items: center;
    height: 30px;
    margin: 0 5px;
    font-family: ${(props) => props.theme.font.family.two};
    font-size: ${(props) => props.theme.font.size.sm};
    border-radius: 9999px;
    background: transparent;
    padding: 8px 12px;
    line-height: 1;
    transition-property: background, color;
    transition-duration: 0.2s;
    transition-timing-function: ease;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.color.white.default};
    }
  }
  .hamburger-menu {
    width: 30px;
    height: 30px;
    background: none;
    color: ${(props) => props.theme.color.grey.default};
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  button {
    background: none;
    color: ${(props) => props.theme.color.grey.light};
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  .contact-btn {
    background: none;
    color: ${(props) => props.theme.color.grey.default};
  }
  .resume-btn {
    background: none;
    color: ${(props) => props.theme.color.white.default};
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.color.grey.transparent};
    font-weight: ${(props) => props.theme.font.weight.bold};
    transition: background 0.2s ease-in-out;
    &:hover {
      background: ${(props) => props.theme.color.grey.default};
    }
  }
  .linkedIn-btn {
    background: ${(props) => props.theme.color.white.default};
    color: ${(props) => props.theme.color.black.default};
    font-weight: ${(props) => props.theme.font.weight.bold};
    transition: background 0.2s ease-in-out;
    border-radius: 6px;
    &:hover {
      color: ${(props) => props.theme.color.black.default};
      background: ${(props) => props.theme.color.grey.default};
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
  width: 100%;

  display: flex;
  flex-direction: column;
  padding: 0 30px;
  background: ${(props) => props.theme.color.black.default};
  height: calc(100vh - 68px);
  button {
    background: ${(props) => props.theme.color.black.default};
    color: ${(props) => props.theme.color.grey.default};
    border-bottom: 1px solid ${(props) => props.theme.color.grey.transparent};
    font-family: ${(props) => props.theme.font.family.two};
    height: 48px;
    transition: border-color 0.1s ease-in-out;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.color.white.default};
      border-color: ${(props) => props.theme.color.white.default};
    }
  }
  .m-resume-btn {
    height: 40px;
    margin: 8px 0;
    border-radius: 6px;
    color: ${(props) => props.theme.color.white};
    border: 1px solid ${(props) => props.theme.color.grey.transparent};
    transition: background 0.2s ease-in-out;
    &:hover {
      border: ${(props) => props.theme.color.white};
    }
  }
  .m-linkedIn-btn {
    height: 40px;
    margin: 8px 0;
    background: ${(props) => props.theme.color.white.default};
    color: ${(props) => props.theme.color.black.default};
    transition: background 0.2s ease-in-out;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.color.grey.transparent};
    &:hover {
      border: transparent;
      color: ${(props) => props.theme.color.black.default};
      background: ${(props) => props.theme.color.grey.default};
    }
  }
`;

const Nav = ({ locale, isMobile }) => {
  const navigate = useNavigate();
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
        <Container data-border-bottom={prevScrollPos >= 10}>
          <Left>
            <Logo onClick={() => handleInternalLinkClick("/#")}>
              <img src="./img/logo.png" alt="Geisiel Melo Logo" />
            </Logo>
            <button onClick={() => handleInternalLinkClick("/#about")}>{locale.about}</button>
            <button onClick={() => handleInternalLinkClick("/#featured")}>{locale.featured}</button>
            <button onClick={() => handleInternalLinkClick("/#projects")}>{locale.projects}</button>
            <button onClick={() => navigate("/archive")}>{locale.archive}</button>
          </Left>

          <Right>
            <button className="contact-btn" onClick={() => handleInternalLinkClick("/#contact")}>
              {locale.contact}
            </button>
            <button className="resume-btn" onClick={() => handleExternalLinkClick(linkedInUrl)}>
              {locale.resume}
            </button>
            <button className="linkedIn-btn" onClick={() => handleExternalLinkClick(linkedInUrl)}>
              {locale.linkedin}
            </button>
          </Right>
        </Container>
      ) : (
        <>
          <Container data-border-bottom={prevScrollPos >= 65}>
            <Logo onClick={() => handleInternalLinkClick("/#")}>
              <img src="./img/logo.png" alt="Geisiel Melo Logo" />
            </Logo>
            <button className="hamburger-menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
            </button>
          </Container>
          {isMobileMenuOpen && (
            <MobileMenu>
              <button onClick={() => handleInternalLinkClick("/#about")}>{locale.about}</button>
              <button onClick={() => handleInternalLinkClick("/#featured")}>{locale.featured}</button>
              <button onClick={() => handleInternalLinkClick("/#projects")}>{locale.projects}</button>
              <button onClick={() => navigate("/archive")}>{locale.archive}</button>
              <button onClick={() => handleInternalLinkClick("/#contact")}>{locale.contact}</button>
              <button className="m-resume-btn" onClick={() => handleExternalLinkClick(linkedInUrl)}>
                {locale.resume}
              </button>
              <button className="m-linkedIn-btn" onClick={() => handleExternalLinkClick(linkedInUrl)}>
                {locale.linkedin}
              </button>
            </MobileMenu>
          )}
        </>
      )}
    </>
  );
};

export default Nav;
