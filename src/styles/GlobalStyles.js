import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    text-decoration: none;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${(props) => props.theme.color.black.default};
  }

  section {
    padding: 100px 0px;
    max-width: 1080px;
    width: 100%;
    border-left: 1px solid ${(props) => props.theme.color.grey.transparent};
    border-right: 1px solid ${(props) => props.theme.color.grey.transparent}; 
    border-bottom: 1px solid ${(props) => props.theme.color.grey.transparent};
    &:first-of-type { 
      margin-top: 132px;
      border-top: 1px solid ${(props) => props.theme.color.grey.transparent};
    }
  }

  button {
    &:hover {
      cursor: pointer;
      transition: color 0.2s ease-in-out;
    }
  }

  // Custom scroll bar
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.color.grey.heavy};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.color.grey.default};
    border-radius: 4px;
  } 
`;

export default GlobalStyle;
