import React from "react";
import styled from "styled-components";
import { HideMotion } from "../Motion";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

const Container = styled.div`
  text-align: center;
  color: ${(props) => props.theme.color.white.default};
  margin: 0px 30px 95px 30px;
  h1 {
    font-family: ${(props) => props.theme.font.family.one};
  }
  p {
    margin-top: 5px;
    font-family: ${(props) => props.theme.font.family.two};
    color: ${(props) => props.theme.color.cyan.default};
  }
`;

const FeaturedContent = styled.div`
  position: relative;
  max-width: 700px;
  height: 400px;
  width: calc(100% - 20px);
  float: ${(props) => props["data-float"]};

  display: flex;
  color: ${(props) => props.theme.color.white.default};
  outline: 1px solid ${(props) => props.theme.color.grey.transparent};
  border-radius: 12px;
  margin: 0px 10px 100px 10px;
  background-image: url(${(props) => props["data-image"]});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.color.black.transparent};
    border-radius: 12px;
  }

  &:last-of-type {
    margin-bottom: 0px;
  }
`;

const FeaturedDescription = styled.div`
  margin: 20px 10px;
  padding: 10px;
  position: absolute;
  bottom: 0;
  max-width: 500px;
  text-align: ${(props) => props["data-float"]};
  background-color: ${(props) => props.theme.color.cyan.transparent};
  border-radius: 6px;
  h1 {
    margin: 5px 0;
    font-size: 20px;
    font-family: ${(props) => props.theme.font.family.one};
  }
  p {
    margin: 20px 0;
    border-radius: 6px;
    font-family: ${(props) => props.theme.font.family.two};
    font-size: ${(props) => props.theme.font.size.sm};
  }
  ul {
    display: flex;
    list-style-type: none;
    justify-content: ${(props) => (props["data-float"] === "right" ? "flex-end" : "flex-start")};
    font-family: ${(props) => props.theme.font.family.two};
    font-size: ${(props) => props.theme.font.size.sm};
    gap: 10px;
    margin: 10px 0;
    flex-wrap: wrap;
    li {
      &:hover {
        transition: color 0.2s ease-in-out;
        color: ${(props) => props.theme.color.grey.light};
      }
    }
  }
  .buttons {
    display: flex;
    gap: 10px;
    justify-content: ${(props) => (props["data-float"] === "right" ? "flex-end" : "flex-start")};
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      color: ${(props) => props.theme.color.white.default};
      &:hover {
        color: ${(props) => props.theme.color.cyan.default};
      }
    }
  }
`;

const Featured = ({ locale, visible, data }) => {
  const featuredItens = data.filter((item) => item.Featured);

  const isEvenNumber = (n) => {
    if (n % 2 === 0) {
      return true;
    } else {
      return false;
    }
  };

  const handleButtonClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section id="featured">
      <HideMotion visible={visible}>
        <Container>
          <h1>{locale.title}</h1>
          <p>{locale.subtitle}</p>
        </Container>
        {featuredItens.map((item, index) => (
          <FeaturedContent data-float={isEvenNumber(index) ? "left" : "right"} data-image={item.ImageLink} key={index}>
            <FeaturedDescription
              data-float={isEvenNumber(index) ? "left" : "right"}
              style={isEvenNumber(index) ? { left: 0 } : { right: 0 }}
            >
              <div>
                <h1>{item.Title}</h1>
                <p>{item.Description}</p>
                <ul>
                  {item.Technologies.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="buttons ">
                  {item.LiveLink && (
                    <button onClick={() => handleButtonClick(item.LiveLink)} >
                      <GitHubIcon />
                    </button>
                  )}
                  {item.GitLink && (
                    <button onClick={() => handleButtonClick(item.GitLink)} >
                      <OpenInNewIcon />
                    </button>
                  )}
                </div>
              </div>
            </FeaturedDescription>
          </FeaturedContent>
        ))}
      </HideMotion>
    </section>
  );
};

export default Featured;
