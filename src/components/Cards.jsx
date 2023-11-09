import React from "react";
import styled from "styled-components";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import FolderIcon from "@mui/icons-material/Folder";

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
