import React from "react";
import SunIcon from "../../assets/icon-sun.svg";

import { Container } from "./styles";

const Header: React.FC = () => {
    return (
        <Container>
            <h1>Invoice-App</h1>
            <SunIcon />
        </Container>
    );
};

export default Header;
