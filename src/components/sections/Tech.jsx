import React, { useState } from "react";
import styled from "styled-components";
import * as Logos from "../../assets/svg";
import { OpacityMotion } from "../Motion";

const Container = styled.div`
  text-align: center;
  color: ${(props) => props.theme.color.white.default};
  margin: 0px 30px 0px 30px;
  h1 {
    font-family: ${(props) => props.theme.font.family.one};
  }
  p {
    margin-top: 5px;
    font-family: ${(props) => props.theme.font.family.two};
  }
`;

const Technologies = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 600px;
    width: 100%;
    color: ${(props) => props.theme.color.white.default};
    list-style: none;
  }

  li {
    padding: 10px 20px;
    border: 1px solid ${(props) => props.theme.color.grey.transparent};
    font-family: ${(props) => props.theme.font.family.two};
    font-size: ${(props) => props.theme.font.size.sm};
    margin: 5px;
    border-radius: 9999px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 80px;
  height: 80px;
  img {
    max-width: 60px;
  }
`;

const Tech = ({ data }) => {
  const [showLogo, setShowLogo] = useState();
  const [visibleLogo, setVisibleLogo] = useState(false);

  const handleSetLogo = (Logo) => {
    switch (Logo) {
      case "React":
        return setShowLogo(Logos.React);
      case "Redis":
        return setShowLogo(Logos.Redis);
      case "JavaScript":
        return setShowLogo(Logos.JavaScript);
      case "Node":
        return setShowLogo(Logos.Node);
      case "HTML5":
        return setShowLogo(Logos.HTML5);
      case "CSS3":
        return setShowLogo(Logos.CSS3);
      case "SQLite":
        return setShowLogo(Logos.SQLite);
      case "MongoDB":
        return setShowLogo(Logos.MongoDB);
      case "Git":
        return setShowLogo(Logos.Git);
      case "Npm":
        return setShowLogo(Logos.Npm);
      case "Python":
        return setShowLogo(Logos.Python);
      case "QT":
        return setShowLogo(Logos.QT);
      case "Styled-Components":
        return setShowLogo(Logos.StyledComponents);
      case "MySql":
        return setShowLogo(Logos.MySql);
      case "Express":
        return setShowLogo(Logos.Express);
      case "Postman":
        return setShowLogo(Logos.Postman);
      case "Vite":
        return setShowLogo(Logos.Vite);
      default:
        setShowLogo("");
    }
  };

  const handleShowLogo = (item) => {
    setVisibleLogo(true);
    handleSetLogo(item);
  };

  const handleHideLogo = () => {
    setVisibleLogo(false);
  };

  return (
    <section>
      <Container>
        <h1>Technologies</h1>
        <p>Here are some of the technologies I've worked with.</p>
      </Container>
      <Technologies>
        <Logo>
          {visibleLogo ? (
            <OpacityMotion delay={0.1}>
              <img src={showLogo} alt="" />
            </OpacityMotion>
          ) : null}
        </Logo>
        <ul>
          {data.map((item, index) => (
            <li key={index} onMouseEnter={() => handleShowLogo(item)} onMouseLeave={() => handleHideLogo()}>
              {item}
            </li>
          ))}
        </ul>
      </Technologies>
    </section>
  );
};

export default Tech;
