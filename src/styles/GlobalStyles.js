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
    background: linear-gradient(90deg,
      ${(props) => props.theme.color.Black},
      ${(props) => props.theme.color.LightBlack}
    );
    background-size: 200% 200%;
    animation: gradientAnimation 20s ease-in-out infinite;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
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
`

export default GlobalStyle;