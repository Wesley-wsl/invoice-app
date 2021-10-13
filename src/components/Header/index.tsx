import React from "react";
import { HeaderProps } from "../../@types/InvoiceTypes";
import SunIcon from "../../assets/icon-sun.svg";

import { Container } from "./styles";

const Header: React.FC<HeaderProps> = ({setLightMode, lightMode}) => {
    return (
        <Container>
            <h1>Invoice-App</h1>
            <SunIcon onClick={() => setLightMode(lightMode ? false : true)}/>
        </Container>
    );
};

export default Header;
