import React from "react";
import styled from "styled-components";
import { FeaturedCard } from "../Cards";
import { HideMotion } from "../Motion";

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

const Featured = ({ locale, visible }) => {
  return (
    <section id="featured">
      <HideMotion visible={visible}>
        <Container>
          <h1>{locale.title}</h1>
          <p>{locale.subtitle}</p>
        </Container>

        <FeaturedCard float={"left"} />
        <FeaturedCard float={"right"} />
        <FeaturedCard float={"left"} />
        <FeaturedCard float={"right"} />
      </HideMotion>
    </section>
  );
};

export default Featured;
