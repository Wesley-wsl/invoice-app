import { createGlobalStyle, ThemeProvider } from "styled-components";
import React, { useState } from "react";
import Header from "../components/Header";
import { ThemeProps } from "../@types/InvoiceTypes";


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:monospace, sans-serif, serif;
    transition: background-color .4s linear;
  }

  body {
    background-color: ${(props: {theme: ThemeProps}) => props.theme.primary};
    color: ${(props: {theme: ThemeProps}) => props.theme.color};
  }

  a {
    text-decoration: none;
  }

  input {
    background-color: ${(props: {theme: ThemeProps}) => props.theme.secondary};      
    border: 1px solid #8060ff6a;
    padding: 14px;
    border-radius: 7px;
    color: ${(props: {theme: ThemeProps}) => props.theme.color};
}
`;

const theme = {
    dark: {
        primary: "#141625",
        secondary: "#1e2139",
        color: "#fff",
    },
    light: {
        primary: "rgb(230, 230, 230)",
        secondary: "rgb(250, 250, 250)",
        color: "#000"
    },
};

export default function App({ Component, pageProps }) {
    const [lightMode, setLightMode] = useState(false);

    return (
        <>
            <ThemeProvider theme={lightMode === false ? theme.dark : theme.light}>
                <GlobalStyle />
                <Header setLightMode={setLightMode} lightMode={lightMode}/>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
