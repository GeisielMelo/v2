import React from "react";
import styled from "styled-components";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import FolderIcon from "@mui/icons-material/Folder";

const FeaturedContent = styled.div`
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
    justify-content: ${(props) => (props.float === "right" ? "flex-end" : "flex-start")};
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

const ProjectsContent = styled.div`
  position: relative;
  max-width: 325px;
  height: 100%;
  padding: 20px;
  background: ${(props) => props.theme.color.cyan.transparent};
  border-radius: 4px;
  box-shadow: 1px 1px 3px rgba(176, 179, 184, 0.7);

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      display: flex;
      gap: 10px;
    }
  }
  h1 {
    margin-top: 30px;
    margin-bottom: 10px;
    font-family: ${(props) => props.theme.font.family.one};
    color: ${(props) => props.theme.color.white.default};
  }
  p {
    margin-bottom: 50px;
    font-family: ${(props) => props.theme.font.family.two};
    color: ${(props) => props.theme.color.white.default};
  }
  ul {
    position: absolute;
    bottom: 10px;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    font-family: ${(props) => props.theme.font.family.one};
    font-size: ${(props) => props.theme.font.size.es};
    color: ${(props) => props.theme.color.white.default};
    font-weight: 600;
    cursor: default;
    li {
      &:hover {
        color: ${(props) => props.theme.color.grey.light};
      }
    }
  }
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

  @media screen and (max-width: 860px) and (min-width: 611px) {
    max-width: 250px;
  }

  @media (max-width: 610px) {
    max-width: 760px;
    margin: 10px 20px;
  }
`;

export const FeaturedCard = ({ float, title, subTitle, description, techList }) => {
  return (
    <>
      <FeaturedContent float={float} data-image="./img/example.png">
        <FeaturedDescription float={float} style={float === "left" ? { left: 0 } : { right: 0 }}>
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
                <OpenInNewIcon />
              </button>
            </div>
          </div>
        </FeaturedDescription>
      </FeaturedContent>
    </>
  );
};

export const ProjectCard = ({ title, description, tech, gitUrl, LiveUrl }) => {
  const handleButtonClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <ProjectsContent>
      <div className="header">
        <button>
          <FolderIcon />
        </button>

        <div>
          {gitUrl && (
            <button onClick={() => handleButtonClick(gitUrl)}>
              <GitHubIcon />
            </button>
          )}

          {LiveUrl && (
            <button onClick={() => handleButtonClick(LiveUrl)}>
              <OpenInNewIcon />
            </button>
          )}
        </div>
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {tech.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </ProjectsContent>
  );
};
