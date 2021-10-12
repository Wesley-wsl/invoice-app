import Header from "../components/Header";
import InvoiceCard from "../components/InvoiceCard";
import IconArrowDown from "../assets/icon-arrow-down.svg";
import { BackgroundForModal, Container, InvoicesBar } from "../styles/Home";
import NewInvoice from "../components/NewInvoice";
import api from "../services/api";
import React, { useState, useEffect } from "react";
import { Key } from "hoist-non-react-statics/node_modules/@types/react";

export default function Home({ invoices }) {
    const [newInvoice, setNewInvoice] = useState(false);
    const [invoicesData, setInvoicesData] = useState(invoices.data);
    const [showFilters, setShowFilters] = useState(false);
    const [pending, setPending] = useState(false);
    const [paid, setPaid] = useState(false);

    async function getInvoices() {
        if ((!paid && !pending) || (paid && pending)) {
            const response = await api.get(
                "http://localhost:3000/api/invoices"
            );
            setInvoicesData([...response.data["data"]]);
        }

        if (paid && !pending) {
            const response = await api.get(
                "http://localhost:3000/api/invoices?status=Paid"
            );
            setInvoicesData([...response.data["data"]]);
        }

        if (pending && !paid) {
            const response = await api.get(
                "http://localhost:3000/api/invoices?status=Pending"
            );
            setInvoicesData([...response.data["data"]]);
        }
    }

    useEffect(() => {
        getInvoices();
    }, [pending, paid]);

    return (
        <Container>
            <InvoicesBar>
                <div className="introducion">
                    <h1>Invoices</h1>
                    <p>There are x total invoices</p>
                </div>

                <div className="actions">
                    <div
                        onClick={() => setShowFilters(!showFilters)}
                        id="filter"
                    >
                        <p>
                            Filter by status{" "}
                            <span>
                                <IconArrowDown />
                            </span>{" "}
                        </p>
                    </div>
                    {showFilters && (
                        <>
                            <div id="containerFilter">
                                <div>
                                    <input
                                        type="checkbox"
                                        id="Paid"
                                        checked={paid}
                                        onChange={() => setPaid(!paid)}
                                    />
                                    <label>Paid</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="Pending"
                                        checked={pending}
                                        onChange={() => setPending(!pending)}
                                    />
                                    <label>Pending</label>
                                </div>
                            </div>
                        </>
                    )}

                    <button onClick={() => setNewInvoice(true)}>
                        {" "}
                        <span>
                            <svg
                                width="11"
                                height="11"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
                                    fill="#7C5DFA"
                                    fillRule="nonzero"
                                ></path>
                            </svg>
                        </span>{" "}
                        New Invoice
                    </button>
                </div>
            </InvoicesBar>

            {newInvoice && (
                <>
                    <BackgroundForModal onClick={() => setNewInvoice(false)} />
                    <NewInvoice
                        newInvoice={newInvoice}
                        setNewInvoice={setNewInvoice}
                        getInvoices={getInvoices}
                    />
                </>
            )}

            {invoicesData &&
                invoicesData.map(
                    (
                        data: {
                            clientName: string;
                            total: Number;
                            invoiceId: string;
                            status: string;
                            paymentDue: string;
                        },
                        index: Key
                    ) => <InvoiceCard data={data} key={index} />
                )}
        </Container>
    );
}

export async function getServerSideProps() {
    const invoices = await api.get("http://localhost:3000/api/invoices");

    return {
        props: {
            invoices: invoices.data,
        },
    };
}
