import React, { useState } from "react";
import styled from "styled-components";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import FolderIcon from "@mui/icons-material/Folder";
import { UpMotion, HideMotion } from "../Motion";

const Title = styled.div`
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

const Cards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 100px);
  margin: 50px;

  button {
    padding: 20px 30px;
    background: none;
    border-radius: 5px;
    color: ${(props) => props.theme.color.cyan.default};
    border: 1px solid ${(props) => props.theme.color.cyan.default};

    &:hover {
      background: ${(props) => props.theme.color.cyan.transparent};
    }
  }
`;

const ProjectsContent = styled.div`
  position: relative;
  max-width: 325px;
  height: 100%;
  padding: 20px;
  background: ${(props) => props.theme.color.black.light};
  border-radius: 4px;
  box-shadow: 1px 1px 3px rgba(176, 179, 184, 0.7);
  &:hover {
    transition: box-shadow 0.4s ease;
    box-shadow: 1px 1px 3px ${(props) => props.theme.color.cyan.default};
  }
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
    color: ${(props) => props.theme.color.grey.light};
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

const Projects = ({ locale, data, visible }) => {
  const [maxCards, setMaxCards] = useState(6);

  const handleButtonClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section id="projects">
      <HideMotion visible={visible}>
        <Title>
          <h1>{locale.title}</h1>
          <p>{locale.subtitle}</p>
        </Title>
        <Cards>
          {data?.slice(0, maxCards).map((item, index) => (
            <UpMotion key={index}>
              <ProjectsContent>
                <div className="header">
                  <button>
                    <FolderIcon />
                  </button>

                  <div>
                    {item.GitLink && (
                      <button onClick={() => handleButtonClick(item.GitLink)}>
                        <GitHubIcon />
                      </button>
                    )}

                    {item.LiveLink && (
                      <button onClick={() => handleButtonClick(item.LiveLink)}>
                        <OpenInNewIcon />
                      </button>
                    )}
                  </div>
                </div>
                <h1>{item.Title}</h1>
                <p>{item.Description}</p>
                <ul>
                  {item.Technologies.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </ProjectsContent>
            </UpMotion>
          ))}
        </Cards>
        <Button>
          {maxCards < data.length ? (
            <button onClick={() => setMaxCards(maxCards + 3)}>{locale.buttons.more}</button>
          ) : (
            <button onClick={() => setMaxCards(6)}>{locale.buttons.less}</button>
          )}
        </Button>
      </HideMotion>
    </section>
  );
};

export default Projects;
