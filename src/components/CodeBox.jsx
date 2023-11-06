import React, { useState } from "react";
import styled from "styled-components";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { monokaiSublime } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeWindow = styled.div`
  max-width: 600px;
  width: 100%;
`;

const CodeTextArea = styled.div`
  border: 1px solid #ccc;
  background-color: transparent;
  background-color: ${(props) => props.theme.color.black.light};
  border: 1px solid ${(props) => props.theme.color.grey.transparent};
  border-top: none;
  color: ${(props) => props.theme.color.white.default};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;

  color: ${(props) => props.theme.color.grey.default};
  font-family: ${(props) => props.theme.font.family.one};
  font-size: ${(props) => props.theme.font.size.sm};
  border: 1px solid ${(props) => props.theme.color.grey.transparent};
  overflow-x: auto;
`;

const CopyButton = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.color.grey.default};
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  padding: 0;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.color.grey.transparent};
    transition: background-color 0.2s ease;
  }
`;

const Code = styled.pre`
  background-color: transparent;
`;

export const CodeBox = () => {
  const [code] = useState(`// Learn more about Geisiel Melo
  export const About = () => { 
    return (
      <div>
        <h1>About Me!</h1>
        <p>
          Hello, I'm Geisiel Melo, and I love coding and 
          problem-solving. My programming journey began with
          configuring custom mods and servers for online games,
          bringing enjoyment to my friends and me.Over time,
          I ventured into creating scripts to automate tasks and 
          eventually developed full-fledged applications 
          for complex challenges.
        </p>
        <p>
          As I delved into app development, I discovered my 
          passion for creating solutions that benefit others.
          This led me to focus on web application development,
          aiming to provide accessible and user-friendly 
          experiences to a broader audience.
        </p>
        <p>
          Sharing my applications and witnessing how they simplify
          people's lives motivates me greatly. I firmly believe in
          the positive impact of technology on society, and I'm 
          dedicated to crafting intuitive, efficient, and enjoyable 
          web applications.
        </p>
      </div>
    );
  }`);

  const copyCodeToClipboard = () => {
    const textArea = document.createElement("textarea");
    textArea.value = code;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  };

  return (
    <CodeWindow>
      <Header>
        <span>src/components/About.tsx</span>
        <CopyButton onClick={copyCodeToClipboard}>
          <ContentCopyOutlinedIcon style={{ fontSize: "18px" }} />
        </CopyButton>
      </Header>
      <CodeTextArea>
        <Code>
          <SyntaxHighlighter language="javascript" style={monokaiSublime} showLineNumbers={true}>
            {code}
          </SyntaxHighlighter>
        </Code>
      </CodeTextArea>
    </CodeWindow>
  );
};
