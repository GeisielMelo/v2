import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import example from "../assets/img/example.png";

const Content = styled.div`
  position: relative;
  max-width: 700px;
  height: 400px;
  width: calc(100% - 20px);
  float: ${(props) => props.float};

  display: flex;
  color: ${(props) => props.theme.color.white.default};
  outline: 1px solid ${(props) => props.theme.color.grey.transparent};
  border-radius: 12px;
  margin: 0px 10px 100px 10px;

  background-image: url(${(props) => props.imageUrl});
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

const Description = styled.div`
  margin: 20px 10px;
  padding: 10px;
  position: absolute;
  bottom: 0;
  max-width: 500px;
  text-align: ${(props) => props.float};
  background-color: ${(props) => props.theme.color.cyan.transparent};
  border-radius: 6px;
  h1 {
    margin: 5px 0;
    font-weight: 300;
    font-family: ${(props) => props.theme.font.family.two};
    font-size: ${(props) => props.theme.font.size.sm};
  }
  h2 {
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
    justify-content: ${(props) => (props.float === "right" ? "flex-end" : "flex-start")};
    font-family: ${(props) => props.theme.font.family.two};
    font-size: ${(props) => props.theme.font.size.sm};
    gap: 10px;
    margin: 10px 0;
    flex-wrap: wrap;
  }
  .buttons {
    display: flex;
    gap: 10px;
    justify-content: ${(props) => (props.float === "right" ? "flex-end" : "flex-start")};
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      color: ${(props) => props.theme.color.white.default};
    }
  }
`;

export const FeaturedProject = ({ float, title, subTitle, description, techList }) => {
  return (
    <>
      <Content float={float} imageUrl={example}>
        <Description float={float} style={float === "left" ? { left: 0 } : { right: 0 }}>
          <div>
            <h1>Featured Project</h1>
            <h2>My Project</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos alias dolorem provident neque quibusdam et
              molestiae quos delectus at, voluptatem non ipsa sunt nisi dignissimos, veritatis soluta voluptatibus quam
              deserunt?
            </p>
            <ul>
              <li>Node</li>
              <li>Node</li>
              <li>Node</li>
              <li>Node</li>
              <li>Node</li>
            </ul>
            <div className="buttons ">
              <button>
                <GitHubIcon />
              </button>
              <button>
                <LaunchIcon />
              </button>
            </div>
          </div>
        </Description>
      </Content>
    </>
  );
};
