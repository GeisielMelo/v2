import React from "react";
import styled from "styled-components";
import example from "../assets/img/example.png";

const Content = styled.div`
  float: ${(props) => props.float};
  position: relative;
  max-width: 700px;
  display: flex;
  color: #fff;
  margin: 0px 10px 100px 10px;
  &:last-of-type {
    margin-bottom: 0px;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Description = styled.div`
  position: absolute;
  max-width: 500px;
  bottom: 100px;
  text-align: ${(props) => props.float};
  h1 {
    margin: 5px 0;
  }
  h2 {
    font-size: 20px;
  }
  p {
    margin: 20px 0;
  }
  ul {
    display: flex;
    list-style-type: none;
  }
`;

export const FeaturedProject = ({ float, title, subTitle, description, techList }) => {
  return (
    <>
      <Content float={float}>
        <Image src={example} alt="" />
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
              <li>Styled Components</li>
              <li>Styled Components</li>
              <li>Styled Components</li>
              <li>Styled Components</li>
              <li>Styled Components</li>
            </ul>
          </div>
        </Description>
      </Content>
    </>
  );
};
