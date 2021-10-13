import React from "react";
import { HeaderProps } from "../../@types/InvoiceTypes";
import SunIcon from "../../assets/icon-sun.svg";
import MoonIcon from "../../assets/icon-moon.svg";

import { Container } from "./styles";

const Header: React.FC<HeaderProps> = ({ setLightMode, lightMode }) => {
    return (
        <Container>
            <h1>Invoice-App</h1>
            {lightMode ? (
                <MoonIcon
                    onClick={() => setLightMode(lightMode ? false : true)}
                />
            ) : (
                <SunIcon
                    onClick={() => setLightMode(lightMode ? false : true)}
                />
            )}
        </Container>
    );
};

export default Header;
