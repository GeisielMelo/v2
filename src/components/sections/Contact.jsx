import React, { useState } from "react";
import styled from "styled-components";
import ContactForm from "../ContactForm";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  height: calc(100vh - 200px);
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${(props) => props.theme.font.family.one};
  color: ${(props) => props.theme.color.white.default};
  span {
    max-width: max-content;
    margin-bottom: 30px;
    padding-left: 4px;

    font-family: ${(props) => props.theme.font.family.two};
    font-weight: ${(props) => props.theme.font.weight.regular};
    color: ${(props) => props.theme.color.white.default};
  }
  h1 {
    margin: 20px 0px 10px 0px;
    font-size: clamp(40px, 5vw, 60px);
    font-family: ${(props) => props.theme.font.family.one};
    color: ${(props) => props.theme.color.grey.default};
  }
  p {
    padding: 0 10px;
    max-width: 600px;
    font-family: ${(props) => props.theme.font.family.two};
    color: ${(props) => props.theme.color.grey.default};
    font-weight: ${(props) => props.theme.font.weight.regular};
    text-align: center;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  background: none;
  border-radius: 5px;
  width: 100%;

  transition: max-width 0.2s ease-in-out, height 0.4s ease-in-out, border-color 0.6s ease;
  cursor: ${(props) => (props["data-expanded"] ? "default" : "pointer")};
  max-width: ${(props) => (props["data-expanded"] ? "560px" : "200px")};
  height: ${(props) => (props["data-expanded"] ? "320px" : "40px")};

  color: ${(props) => props.theme.color.cyan.default};
  border: 1px solid;
  border-color: ${(props) =>
    props["data-expanded"] ? props.theme.color.grey.default : props.theme.color.cyan.default};
  &:hover {
    background: ${(props) => (props["data-expanded"] ? "none" : props.theme.color.grey.default)};
  }
`;

const Contact = ({ locale }) => {
  const [formVisible, setFormVisible] = useState(false);

  return (
    <section id="contact">
      <Container>
        <Header>
          <span>{locale.subtitle}</span>
          <h1>{locale.title}</h1>
          <p>{locale.description}</p>
        </Header>
        <ContactContainer data-expanded={formVisible} onClick={() => setFormVisible(true)}>
          {formVisible ? <ContactForm /> : <h1>{locale.buttons.contact}</h1>}
        </ContactContainer>
      </Container>
    </section>
  );
};

export default Contact;
