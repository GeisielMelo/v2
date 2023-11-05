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
  const [code] = useState(`// Seu código JavaScript aqui
  export default async function Page() { 
    return (
      <>
        <h1>Users</h1>
        <ul>
          {data.map(user => (
            <li key={user.id}>
              {user.name}
            </li>
          )}
        </ul>
      </>
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
