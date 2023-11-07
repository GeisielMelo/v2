import React, { useState } from "react";
import styled from "styled-components";
import { ProjectCard } from "../Cards";

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
  }
`;

const Cards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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

const Projects = ({ data }) => {
  const [maxCards, setMaxCards] = useState(6);

  return (
    <section>
      <Title>
        <h1>Other Noteworthy Projects</h1>
        <p>Take a look!</p>
      </Title>
      <Cards>
        {data?.slice(0, maxCards).map((item, index) => (
          <ProjectCard
            key={index}
            title={item.Title}
            description={item.Description}
            tech={item.Technologies}
            gitUrl={item.GitLink}
            LiveUrl={item.LiveLink}
          />
        ))}
      </Cards>
      <Button>
        {maxCards < data.length ? (
          <button onClick={() => setMaxCards(maxCards + 3)}>Show More</button>
        ) : (
          <button onClick={() => setMaxCards(6)}>Show Less</button>
        )}
      </Button>
    </section>
  );
};

export default Projects;
