import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  width: 100%;
  
  color: ${(props) => props.theme.color.white.default};
  font-family: ${(props) => props.theme.font.family.two};
  font-size: ${(props) => props.theme.font.size.sm};
  line-height: 1;
  transition-property: background, color;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  cursor: pointer;
  span {
    cursor: pointer;
    &:hover {
      transition: color 0.2s ease-in-out;
      color: ${(props) => props.theme.color.cyan.default};
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <div>
        <p>
          © Designed & Built by{" "}
          <span onClick={() => window.open("https://github.com/GeisielMelo", "_blank")}>Geisiel Melo</span>
        </p>
      </div>
    </Container>
  );
};

export default Footer;
