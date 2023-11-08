import React, { useState } from "react";
import styled from "styled-components";
import { OpacityMotion, HideMotion } from "../Motion";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: ${(props) => props.theme.color.white.default};
  margin: 10px 10px;
  h1 {
    font-family: ${(props) => props.theme.font.family.one};
  }
  p {
    margin-top: 5px;
    font-family: ${(props) => props.theme.font.family.two};
    max-width: 600px;
  }
`;

const Technologies = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 10px;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 500px;
    width: 100%;
    color: ${(props) => props.theme.color.white.default};
    list-style: none;
    margin: 10px 0;
  }

  li {
    padding: 10px 20px;
    border: 1px solid ${(props) => props.theme.color.grey.transparent};
    font-family: ${(props) => props.theme.font.family.two};
    font-size: ${(props) => props.theme.font.size.sm};
    margin: 5px;
    border-radius: 9999px;
  }
  p {
    text-align: center;
    margin: 5px 10px;
    font-family: ${(props) => props.theme.font.family.two};
    color: ${(props) => props.theme.color.white.default};
  }
`;

const Frame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  width: 100%;
  height: 100px;
  span {
    height: 1px;
    border-bottom: 1px solid;
    border-color: ${(props) => props.theme.color.grey.transparent};
    width: 100%;
    margin: 0 10px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 60px;
  max-height: 60px;
  width: 100%;
  height: 100%;

  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.color.grey.transparent};
  margin: 0 10px;
  img {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 40px;
    max-height: 40px;
  }
`;

const About = ({ locale, data, isVisible }) => {
  const [logo, setLogo] = useState();
  const [logoAlt, setLogoAlt] = useState();
  const [visibleLogo, setVisibleLogo] = useState(false);

  const handleShowLogo = (item) => {
    setLogo(item.svg);
    setLogoAlt(item.name);
    setVisibleLogo(true);
  };

  const handleHideLogo = () => {
    setVisibleLogo(false);
  };

  return (
    <section id="about">
      <HideMotion isVisible={isVisible}>
        <Container>
          <h1>{locale.title}</h1>
          <p>{locale.description}</p>
        </Container>

        <Technologies>
          <Frame>
            <span />
            <Logo>
              {visibleLogo ? (
                <OpacityMotion delay={0.1}>
                  <img src={logo} alt={logoAlt} />
                </OpacityMotion>
              ) : null}
            </Logo>
            <span />
          </Frame>
          <p>{locale.subtitle}</p>
          <ul>
            {data.map((item, index) => (
              <li
                title={item.name}
                key={index}
                onMouseEnter={() => handleShowLogo(item)}
                onMouseLeave={() => handleHideLogo()}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </Technologies>
      </HideMotion>
    </section>
  );
};

export default About;
