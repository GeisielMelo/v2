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
  background: ${(props) => props.theme.color.Black};
}

section {
  padding: 100px 0px;
  max-width: 1080px;
  width: 100%;
  border-left: 1px solid ${(props) => props.theme.color.transparent.Slate};
  border-right: 1px solid ${(props) => props.theme.color.transparent.Slate};
  border-bottom: 1px solid ${(props) => props.theme.color.transparent.Slate};
  &:first-of-type { 
    margin-top: 132px;
    border-top: 1px solid ${(props) => props.theme.color.transparent.Slate};
  }
}

// Custom scroll bar
::-webkit-scrollbar {
    width: 5px;
}

::-webkit-scrollbar-track {
  background: ${(props) => props.theme.color.HeavySlate}
}

::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.color.Slate};
    border-radius: 4px;
} 
`;

export default GlobalStyle;
