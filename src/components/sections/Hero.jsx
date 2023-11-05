import React, { useState } from "react";
import styled from "styled-components";
import { OpacityMotion } from "../Motion";
import KeyboardDoubleArrowDownRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowDownRounded";
import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-family: ${(props) => props.theme.font.family.one};
  color: ${(props) => props.theme.color.white.default};
  h1 {
    font-size: clamp(20px, 8vw, 80px);
    white-space: nowrap;
  }
  h2 {
    font-size: clamp(9px, 5vw, 60px);
    white-space: nowrap;
  }
  p {
    margin-top: 20px;
    padding: 0 40px;
    font-size: clamp(9px, 5vw, 16px);
    font-weight: 600;
    line-height: 1.2;
    color: ${(props) => props.theme.color.grey.default};
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-top: 20px;
    background-color: transparent;
    border: 1px solid transparent;
    transition: border-color 0.2s ease-in-out;
    color: ${(props) => props.theme.color.grey.default};
    cursor: pointer;
    &:hover {
      border-color: ${(props) => props.theme.color.grey.default};
    }
  }
`;

const Hero = () => {
  const [show, setShow] = useState(false);

  return (
    <section>
      <Container>
        <h1>Geisiel Melo</h1>
        <h2>I'm a Full Stack Developer</h2>
        {show ? (
          <OpacityMotion delay={0.3}>
            <p>
              Software engineer with experience in web application development. I'm currently seeking new opportunities
              to apply my skills and knowledge. With a special focus on creating accessible and user-centric solutions,
              I am committed to building products that stand out and provide amazing experiences for users.
            </p>
          </OpacityMotion>
        ) : null}
        <button onClick={() => setShow(!show)}>
          {show ? <KeyboardDoubleArrowUpRoundedIcon /> : <KeyboardDoubleArrowDownRoundedIcon />}
        </button>
      </Container>
    </section>
  );
};

export default Hero;
