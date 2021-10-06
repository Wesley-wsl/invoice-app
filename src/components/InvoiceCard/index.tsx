import React from "react";
import { Container } from "./styles";
import IconArrowRight from "../../assets/icon-arrow-right.svg";
import {InvoiceCardProps} from '../../@types/InvoiceTypes';


const InvoiceCard: React.FC<InvoiceCardProps> = ({ data }) => {
    return (
        <Container>
            <ul>
                <li className="id">
                    <span>#</span>{data.invoiceId}
                </li>
                <li className="date">{data.paymentDue}</li>
                <li className="name">{data.email}</li>
                <li className="invoice">${data.total}</li>
                <li className="state">
                    {" "}
                    <div /> <p>{data.status}</p>
                </li>
                <li className="icon">
                    <IconArrowRight />
                </li>
            </ul>
        </Container>
    );
};

export default InvoiceCard;
