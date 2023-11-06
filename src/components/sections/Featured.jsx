import React from "react";
import styled from "styled-components";
import { FeaturedProject } from "../FeaturedProject";

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
  }
`;

const Featured = () => {
  return (
    <section>
      <Container>
        <h1>Some Things I’ve Built</h1>
        <p>A catalog of significant personal projects I've undertaken in my spare time.</p>
      </Container>

      <FeaturedProject float={"left"} />
      <FeaturedProject float={"right"} />
      <FeaturedProject float={"left"} />
      <FeaturedProject float={"right"} />
    </section>
  );
};

export default Featured;
