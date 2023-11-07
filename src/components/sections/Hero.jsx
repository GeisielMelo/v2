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
  height: calc(100vh - 350px);

  text-align: center;
  font-family: ${(props) => props.theme.font.family.one};
  color: ${(props) => props.theme.color.white.default};

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: ${(props) => (props["data-height"] ? "0px" : "100px")};
    transition: height 0.2s ease;
    

    @media (max-width: 768px) {
      margin: 20px 0;
      height: ${(props) => (props["data-height"] ? "0px" : "350px")};
    }
  }
  h1 {
    font-size: clamp(20px, 8vw, 80px);
    white-space: nowrap;
  }
  h2 {
    font-size: clamp(9px, 5vw, 60px);
    white-space: nowrap;
  }
  p {
    display: ${(props) => (props["data-height"] ? "none" : "block")};
    padding: 0 40px;
    margin: 0 10px;
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
    margin: 10px;
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
  const [displayText, setDisplayText] = useState(false);

  const handleShowMore = () => {
    setShow(true);
    setDisplayText(true);
  };

  const handleShowLess = () => {
    setDisplayText(false);
    setShow(false);
  };

  return (
    <section>
      <Container data-height={!show} data-display={displayText}>
        <h1>Geisiel Melo</h1>
        <h2>I'm a Full Stack Developer</h2>

        <div>
          <p>
            Software engineer with experience in web application development. I'm currently seeking new opportunities to
            apply my skills and knowledge. With a special focus on creating accessible and user-centric solutions, I am
            committed to building products that stand out and provide amazing experiences for users.
          </p>
        </div>

        <button onClick={() => (show ? handleShowLess() : handleShowMore())}>
          {!show ? <KeyboardDoubleArrowDownRoundedIcon /> : <KeyboardDoubleArrowUpRoundedIcon />}
        </button>
      </Container>
    </section>
  );
};

export default Hero;
