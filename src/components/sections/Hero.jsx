import React from "react";
import styled from "styled-components";
import { UpMotion } from "../Motion";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 300px);
  padding: 0 50px;

  span {
    color: ${(props) => props.theme.color.cyan.default};
    font-family: ${(props) => props.theme.font.family.one};
  }
  h1 {
    font-size: clamp(20px, 8vw, 80px);
    white-space: nowrap;
    color: ${(props) => props.theme.color.white.default};
    font-family: ${(props) => props.theme.font.family.one};
    padding-top: 10px;
  }
  h2 {
    font-size: clamp(12px, 5vw, 60px);
    white-space: nowrap;
    color: ${(props) => props.theme.color.white.default};
    font-family: ${(props) => props.theme.font.family.one};
    margin-bottom: 30px;
  }
  p {
    max-width: 600px;
    font-size: clamp(9px, 5vw, 16px);
    font-weight: 600;
    line-height: 1.2;
    color: ${(props) => props.theme.color.grey.default};
    font-family: ${(props) => props.theme.font.family.one};
  }
`;

const Hero = ({ locale }) => {
  return (
    <section id="#">
      <Container>
        <UpMotion>
          <span>{locale.greetings}</span>
        </UpMotion>
        <UpMotion delay={0.2}>
          <h1>{locale.title}.</h1>
        </UpMotion>
        <UpMotion delay={0.4}>
          <h2>{locale.subtitle}</h2>
        </UpMotion>
        <UpMotion delay={0.6}>
          <p>{locale.description}</p>
        </UpMotion>
      </Container>
    </section>
  );
};

export default Hero;
