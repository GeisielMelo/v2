import React from "react";
import styled from "styled-components";
import { CodeBox } from "../CodeBox";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  h1 {
    font-size: clamp(9px, 5vw, 24px);
    font-family: ${(props) => props.theme.font.family.one};
    color: ${(props) => props.theme.color.white.default};
    border: 1px solid ${(props) => props.theme.color.grey.transparent};
    background-color: transparent;
    font-weight: 500;
    margin-bottom: 30px;
    padding: 5px 10px;
    text-align: center;
  }
`;

const About = () => {
  return (
    <section>
      <Container>
        <h1>{"Learn more <About> Me!"}</h1>
        <CodeBox />
      </Container>
    </section>
  );
};

export default About;
