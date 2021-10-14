import React from "react";
import { Container } from "./styles";
import IconArrowRight from "../../assets/icon-arrow-right.svg";
import { InvoiceCardProps } from "../../@types/InvoiceTypes";
import Link from "next/link";

const InvoiceCard: React.FC<InvoiceCardProps> = ({ data }) => {
    return (
        <Container>
            <Link href={`invoice/${data.invoiceId}`}>
                <div className="container">
                    <div className="code-name">
                        <p className="id">
                            {" "}
                            <span>#</span>
                            {data.invoiceId}
                        </p>
                        <p className="name">{data.clientName}</p>
                    </div>

                    <div className="informations">

                        <div className="div">
                            <p className="date">{data.paymentDue}</p>
                            <p className="invoice">${data.total}</p>
                        </div>
                        <p className={`state ${data.status}`}>
                            {" "}
                            <span className="dot" /> <span className="stateName">{data.status}</span>
                        </p>
                        <p className="icon">
                            <IconArrowRight />
                        </p>
                    </div>
                </div>
            </Link>
        </Container>
    );
};

export default InvoiceCard;
