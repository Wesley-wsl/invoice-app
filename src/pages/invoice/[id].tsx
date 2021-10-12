import React from "react";
import IconArrowLeft from "../../assets/icon-arrow-left.svg";
import {
    Back,
    Container,
    InformationsBillFrom,
    InformationsBillTo,
    InvoiceController,
    InvoiceInformatios,
    InvoiceItem,
} from "./styles";
import api from "../../services/api";
import { InvoiceData } from "../../@types/InvoiceTypes";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

const invoice: React.FC<InvoiceData> = ({
    data: {
        senderAddress,
        clientAddress,
        items,
        invoiceId,
        invoiceDate,
        status,
        paymentDue,
        description,
        clientName,
        clientEmail,
        total,
    },
}) => {
    return (
        <Container>
            <Back onClick={() => history.back()}>
                <p>
                    <IconArrowLeft />
                    <b>Go back</b>
                </p>
            </Back>

            <InvoiceController>
                <div>
                    <p>status</p>
                    <div className={`status ${status}`}>
                        <div className="dot" />
                        <p>Pending</p>
                    </div>
                </div>

                <div>
                    <button id="edit">Edit</button>
                    <button id="delete">Delete</button>
                    {/*Caso esteja em pending: Adicionar um botão para transforma-lo em Paid */}
                </div>
            </InvoiceController>

            <InvoiceInformatios>
                {" "}
                {/*Informations */}
                <InformationsBillFrom>
                    <div>
                        <p>
                            <span>#</span>
                            {invoiceId}
                        </p>
                        <p>{description}</p>
                    </div>

                    <div>
                        <p>{senderAddress.street}</p>
                        <p>{senderAddress.city}</p>
                        <p>{senderAddress.postCode}</p>
                        <p>{senderAddress.country}</p>
                    </div>
                </InformationsBillFrom>
                <InformationsBillTo>
                    <div className="dates">
                        <p>Invoice Date</p>
                        <h3>{invoiceDate}</h3>
                        <p>Payment Due</p>
                        <h3>{paymentDue}</h3>
                    </div>

                    <div>
                        <p>BillTo</p>
                        <h3>{clientName}</h3>
                        <p>{clientAddress.street}</p>
                        <p>{clientAddress.city}</p>
                        <p>{clientAddress.postCode}</p>
                        <p>{clientAddress.country}</p>
                    </div>

                    <div>
                        <p>Sent To</p>
                        <h3>{clientEmail}</h3>
                    </div>
                </InformationsBillTo>
                <InvoiceItem>
                    <div className="itemInformations">
                        <div>
                            <p>Item Name</p>
                            <p>
                                <b>{items.name}</b>
                            </p>
                        </div>

                        <div>
                            <p>QTY.</p>
                            <p>
                                <b>{items.quantity}</b>
                            </p>
                        </div>

                        <div>
                            <p>Price</p>
                            <p>
                                <b>{items.price}</b>
                            </p>
                        </div>

                        <div>
                            <p>Total</p>
                            <p>
                                <b>${Number(items.price) * Number(items.quantity)}</b>
                            </p>
                        </div>
                    </div>

                    <div className="AmountDue">
                        <p>Amount Due</p>
                        <h2>${total}</h2>
                    </div>
                </InvoiceItem>
            </InvoiceInformatios>
        </Container>
    );
};

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const { id } = context.query;
    const response = await api.get<InvoiceData>(`/invoices/${id}`);
    const data = response.data;

    return {
        props: data,
    };
};

export default invoice;
