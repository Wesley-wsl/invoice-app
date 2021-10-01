import React from "react";
import { Container } from "./styles";
import IconArrowRight from "../../assets/icon-arrow-right.svg";

const InvoiceCard: React.FC = () => {
    return (
        <Container>
            <ul>
                <li className="id">
                    <span>#</span>XM9141
                </li>
                <li className="date">Due 19 sep 2021</li>
                <li className="name">Josen Huang</li>
                <li className="invoice">R$1,800.90</li>
                <li className="state">
                    {" "}
                    <div /> <p>Pending</p>
                </li>
                <li className="icon">
                    <IconArrowRight />
                </li>
            </ul>
        </Container>
    );
};

export default InvoiceCard;
