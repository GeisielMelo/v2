import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 90px;
  width: 100%;
  color: ${(props) => props.theme.color.White};
  span {
    cursor: pointer;
    &:hover {
      transition: color 0.2s ease-in-out;
      color: #00adb5;
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
