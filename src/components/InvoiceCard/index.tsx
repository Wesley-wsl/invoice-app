import React from "react";
import { Container } from "./styles";
import IconArrowRight from "../../assets/icon-arrow-right.svg";
import { InvoiceCardProps } from "../../@types/InvoiceTypes";
import Link from "next/link";

const InvoiceCard: React.FC<InvoiceCardProps> = ({ data }) => {
    return (
        <Container>
            <Link href={`invoice/${data.invoiceId}`}>
                <ul>
                    <li className="id">
                        <span>#</span>
                        {data.invoiceId}
                    </li>
                    <li className="date">{data.paymentDue}</li>
                    <li className="name">{data.clientName}</li>
                    <li className="invoice">${data.total}</li>
                    <li className={`state ${data.status}`}>
                        {" "}
                        <div /> <p>{data.status}</p>
                    </li>
                    <li className="icon">
                        <IconArrowRight />
                    </li>
                </ul>
            </Link>
        </Container>
    );
};

export default InvoiceCard;
