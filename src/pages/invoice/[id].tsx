import React, { useEffect, useState } from "react";
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
import { useRouter } from "next/dist/client/router";
import NewInvoice from "../../components/NewInvoice";
import { BackgroundForModal } from "../../styles/Home";

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
    const router = useRouter();
    const { id } = router.query;
    const [statusState, setStatusState] = useState(status);
    const [editInvoice, setEditInvoice] = useState(false);
    const [data, setData] = useState({
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
    })

    async function handleDeleteInvoice() {
        await api.delete(`/invoices/${id}`);
        history.back();
    }

    useEffect(() => {
        setStatusState(data.status)
    },[data.status])

    async function handlePaid() {
        await api.patch(`/invoices/${id}`);
        setStatusState("Paid");
    }

    return (
        <Container>
            <Back onClick={() => history.back()}>
                <p>
                    <IconArrowLeft />
                    <b>Go back</b>
                </p>
            </Back>

            {editInvoice && (
                <>
                    <BackgroundForModal onClick={() => setEditInvoice(false)} />
                    <NewInvoice newInvoice={editInvoice} dataInvoice={data} setNewInvoice={setEditInvoice} setData={setData} />
                </>
            )}

            <InvoiceController>
                <div>
                    <p>status</p>
                    <div className={`status ${statusState}`}>
                        <div className="dot" />
                        <p>{statusState}</p>
                    </div>
                </div>

                <div>
                    {statusState === "Pending" && (
                        <button id="paid" onClick={handlePaid}>
                            Mark as Paid
                        </button>
                    )}
                    <button id="edit" onClick={() => setEditInvoice(true)}>
                        Edit
                    </button>
                    <button id="delete" onClick={handleDeleteInvoice}>
                        Delete
                    </button>
                </div>
            </InvoiceController>

            <InvoiceInformatios>
                <InformationsBillFrom>
                    <div>
                        <p>
                            <span>#</span>
                            {data.invoiceId}
                        </p>
                        <p>{data.description}</p>
                    </div>

                    <div>
                        <p>{data.senderAddress.street}</p>
                        <p>{data.senderAddress.city}</p>
                        <p>{data.senderAddress.postCode}</p>
                        <p>{data.senderAddress.country}</p>
                    </div>
                </InformationsBillFrom>
                <InformationsBillTo>
                    <div className="dates">
                        <p>Invoice Date</p>
                        <h3>{data.invoiceDate}</h3>
                        <p>Payment Due</p>
                        <h3>{data.paymentDue}</h3>
                    </div>

                    <div>
                        <p>BillTo</p>
                        <h3>{data.clientName}</h3>
                        <p>{data.clientAddress.street}</p>
                        <p>{data.clientAddress.city}</p>
                        <p>{data.clientAddress.postCode}</p>
                        <p>{data.clientAddress.country}</p>
                    </div>

                    <div>
                        <p>Sent To</p>
                        <h3>{data.clientEmail}</h3>
                    </div>
                </InformationsBillTo>
                <InvoiceItem>
                    <div className="itemInformations">
                        <div>
                            <p>Item Name</p>
                            <p>
                                <b>{data.items.name}</b>
                            </p>
                        </div>

                        <div>
                            <p>QTY.</p>
                            <p>
                                <b>{data.items.quantity}</b>
                            </p>
                        </div>

                        <div>
                            <p>Price</p>
                            <p>
                                <b>{data.items.price}</b>
                            </p>
                        </div>

                        <div>
                            <p>Total</p>
                            <p>
                                <b>
                                    $
                                    {Number(data.items.price) *
                                        Number(data.items.quantity)}
                                </b>
                            </p>
                        </div>
                    </div>

                    <div className="AmountDue">
                        <p>Amount Due</p>
                        <h2>${data.total}</h2>
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
