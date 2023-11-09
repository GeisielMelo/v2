import ReCAPTCHA from "react-google-recaptcha";
import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { OpacityMotion } from "./Motion";
import SendIcon from "@mui/icons-material/Send";
import { Loading } from "./Loading";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  width: 100%;
  input,
  textarea {
    font-family: ${(props) => props.theme.font.family.one};
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
      background-color: ${(props) => props.theme.color.grey.transparent};
      border-color: ${(props) => props.theme.color.grey.default};
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
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 76px;
      border-radius: 4px;
      background-color: ${(props) => props.theme.color.white.default};
      color: ${(props) => props.theme.color.cyan.default};
      &:disabled {
        cursor: not-allowed;
        color: ${(props) => props.theme.color.grey.default};
      }
    }
  }
`;

const ContactForm = ({ locale }) => {
  const reCaptchaKey = import.meta.env.VITE_RECAPTCHAV2_SITE_KEY;
  const service = import.meta.env.VITE_EMAILJS_SERVICE;
  const template = import.meta.env.VITE_EMAILJS_TEMPLATE;
  const emailJsKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [captchaValid, setIsCaptchaValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailSended, setEmailSended] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleCaptcha = () => {
    setIsCaptchaValid(true);
  };

  const handleBlockSubmit = () => {
    if (!captchaValid || name === "" || email === "" || message === "" || emailSended || loading) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      const templateParams = {
        user_name: name,
        user_email: email,
        message: message,
      };
      await emailjs.send(service, template, templateParams, emailJsKey);
      setEmailSended(true);
    } catch (error) {
      console.log("Falha ao enviar o e-mail.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <OpacityMotion delay={1}>
        <input
          disabled={emailSended || loading}
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder={locale.placeholderName}
        />
        <input
          disabled={emailSended || loading}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder={locale.placeholderEmail}
        />
        <textarea
          disabled={emailSended || loading}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder={locale.placeholderMessage}
        ></textarea>

        <div className="submit">
          {!emailSended && <ReCAPTCHA sitekey={reCaptchaKey} onChange={() => handleCaptcha()} />}
          <button onClick={() => handleSubmit()} disabled={handleBlockSubmit()}>
            {emailSended ? locale.doneMessage : loading ? <Loading /> : <SendIcon />}
          </button>
        </div>
      </OpacityMotion>
    </Container>
  );
};

export default ContactForm;
