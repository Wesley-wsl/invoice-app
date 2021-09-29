import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    background-color: #141625;
    color: #fff;
  }

  a {
    text-decoration: none;
  }

  input {
    background-color: #252945;      
    border: 1px solid #7c5dfa;
    padding: 14px;
    border-radius: 7px;
    color: #fff;
}
`;

const theme = {
    colors: {
        primary: "#000",
    },
};

export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
