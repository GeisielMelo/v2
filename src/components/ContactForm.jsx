import ReCAPTCHA from "react-google-recaptcha";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import { OpacityMotion } from "./Motion";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  width: 100%;
  input,
  textarea {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ccc;
    transition: border-color 0.3s;
    margin-bottom: 10px;
    padding: 10px;
    &:focus {
      border-color: #35a29f;
    }
    &:disabled {
      cursor: not-allowed;
    }
  }
  textarea {
    height: 100px;
    resize: none;
  }
  .submit {
    display: flex;
    gap: 10px;
    button {
      width: 100%;
      height: 76px;
      border-radius: 4px;
    }
  }
`;

const ContactForm = () => {
  const [captchaValid, setIsCaptchaValid] = useState(false);
  const key = "6Lexmz4oAAAAAIIPexNR5cSG2u2GT9xY6WOBElNN";

  const handleCaptcha = () => {
    setIsCaptchaValid(true);
  };

  return (
    <Container>
      <OpacityMotion delay={1}>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="E-mail" />
        <textarea type="text" placeholder="Message"></textarea>
        <div className="submit">
          <ReCAPTCHA sitekey="no" onChange={() => handleCaptcha()} />
          <button>Submit</button>
        </div>
      </OpacityMotion>
    </Container>
  );
};

export default ContactForm;
