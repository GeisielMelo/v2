import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import TranslateIcon from "@mui/icons-material/Translate";
import { OpacityMotion } from "./Motion";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 5px;
  height: 100px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 45px;
  height: 300px;
  ${(props) => (props.direction === "left" ? "left: 20px" : "right: 20px")};
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  margin: 2px;
  cursor: pointer;
  background: none;
  
  color: ${(props) => props.theme.color.white.default};
  transition-property: background, color, border;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  &:hover {
    color: ${(props) => props.theme.color.cyan.default};
    border: 1px solid ${(props) => props.theme.color.cyan.default};
    background-color: ${(props) => props.theme.color.grey.heavy};
  }
`;

const Line = styled.div`
  position: fixed;
  bottom: 0;
  width: 2px;
  max-height: 170px;
  height: 100%;
  background-color: ${(props) => props.theme.color.grey.default};
  margin-top: 20px;
`;

const VerticalBox = ({ translate, isMobile }) => {
  const urls = {
    Github: "https://github.com/GeisielMelo",
    LinkedIn: "https://www.linkedin.com/in/geisiel-nascimento-858346265",
    Email: "geisiel.nascimento@gmail.com",
  };

  const handleContactClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleButtonClick = (link) => {
    window.open(link, "_blank");
  };

  return isMobile ? (
    <Container>
      <Button onClick={() => handleButtonClick(urls.Github)}>
        <GitHubIcon />
      </Button>
      <Button onClick={() => handleButtonClick(urls.LinkedIn)}>
        <LinkedInIcon />
      </Button>
      <Button title="Português / English" onClick={translate}>
        <TranslateIcon />
      </Button>
      <Button onClick={() => handleContactClick(urls.Email)}>
        <EmailIcon />
      </Button>
    </Container>
  ) : (
    <OpacityMotion delay={1}>
      <Box direction={"left"}>
        <Button onClick={() => handleButtonClick(urls.Github)}>
          <GitHubIcon />
        </Button>
        <Button onClick={() => handleButtonClick(urls.LinkedIn)}>
          <LinkedInIcon />
        </Button>
        <Line />
      </Box>

      <Box direction={"right"}>
        <Button title="Português / English" onClick={translate}>
          <TranslateIcon />
        </Button>
        <Button onClick={() => handleContactClick(urls.Email)}>
          <EmailIcon />
        </Button>
        <Line />
      </Box>
    </OpacityMotion>
  );
};

export default VerticalBox;
