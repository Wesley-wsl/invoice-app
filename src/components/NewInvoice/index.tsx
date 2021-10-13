import React, { useState, useEffect } from "react";

import { Button, Container, Group, InputLarger, ItemList } from "./styles";
import { NewInvoiceProps } from "../../@types/InvoiceTypes";
import api from "../../services/api";
import { FormEvent } from "hoist-non-react-statics/node_modules/@types/react";
import { useRouter } from "next/dist/client/router";

const NewInvoice: React.FC<NewInvoiceProps> = ({
    newInvoice,
    setNewInvoice,
    getInvoices,
    setData,
    dataInvoice
}) => {
    const [streetAdressFrom, setStreetAdressFrom] = useState("");
    const [cityFrom, setCityFrom] = useState("");
    const [postCodeFrom, setPostCodeFrom] = useState("");
    const [countryFrom, setCountryFrom] = useState("");
    const [clientName, setClientName] = useState("");
    const [clientEmail, setClientEmail] = useState("");
    const [streetAdressTo, setStreetAdressTo] = useState("");
    const [cityTo, setCityTo] = useState("");
    const [postCodeTo, setPostCodeTo] = useState("");
    const [countryTo, setCountryTo] = useState("");
    const [invoiceDate, setInvoiceDate] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [paymentDue, setPaymentDue] = useState("");
    const [itemName, setItemName] = useState("");
    const [Qty, setQty] = useState("");
    const [price, setPrice] = useState("");
    const router = useRouter();
    const { id } = router.query;

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        if (dataInvoice === undefined) {
            await api.post("/invoices/", {
                invoiceId: getInvoiceId(),
                invoiceDate,
                paymentDue,
                description: projectDescription,
                clientName,
                clientEmail,
                status: "Pending",
                senderAddress: {
                    street: streetAdressFrom,
                    city: cityFrom,
                    postCode: postCodeFrom,
                    country: countryFrom,
                },
                clientAddress: {
                    street: streetAdressTo,
                    city: cityTo,
                    postCode: postCodeTo,
                    country: countryTo,
                },
                items: {
                    name: itemName,
                    quantity: Qty,
                    price,
                    total: Number(Qty) * Number(price),
                },
                total: Number(Qty) * Number(price),
            });

            getInvoices();
        } else {
            await api.put(`/invoices/${id}`, {
                invoiceId: dataInvoice.invoiceId,
                invoiceDate,
                paymentDue,
                description: projectDescription,
                clientName,
                clientEmail,
                status: "Pending",
                senderAddress: {
                    street: streetAdressFrom,
                    city: cityFrom,
                    postCode: postCodeFrom,
                    country: countryFrom,
                },
                clientAddress: {
                    street: streetAdressTo,
                    city: cityTo,
                    postCode: postCodeTo,
                    country: countryTo,
                },
                items: {
                    name: itemName,
                    quantity: Qty,
                    price,
                    total: Number(Qty) * Number(price),
                },
                total: Number(Qty) * Number(price),
            });

            setData({
                invoiceId: dataInvoice.invoiceId,
                invoiceDate,
                paymentDue,
                description: projectDescription,
                clientName,
                clientEmail,
                status: "Pending",
                senderAddress: {
                    street: streetAdressFrom,
                    city: cityFrom,
                    postCode: postCodeFrom,
                    country: countryFrom,
                },
                clientAddress: {
                    street: streetAdressTo,
                    city: cityTo,
                    postCode: postCodeTo,
                    country: countryTo,
                },
                items: {
                    name: itemName,
                    quantity: Qty,
                    price,
                    total: Number(Qty) * Number(price),
                },
                total: Number(Qty) * Number(price),
            })
        }

        setNewInvoice(false);
    }

    useEffect(() => {
        if (dataInvoice !== undefined) {
            setStreetAdressFrom(dataInvoice.senderAddress.street);
            setCityFrom(dataInvoice.senderAddress.city);
            setPostCodeFrom(dataInvoice.senderAddress.postCode);
            setCountryFrom(dataInvoice.senderAddress.country);
            setClientName(dataInvoice.clientName);
            setClientEmail(dataInvoice.clientEmail);
            setStreetAdressTo(dataInvoice.clientAddress.street);
            setCityTo(dataInvoice.clientAddress.city);
            setPostCodeTo(dataInvoice.clientAddress.postCode);
            setCountryTo(dataInvoice.clientAddress.country);
            setInvoiceDate(dataInvoice.invoiceDate);
            setProjectDescription(dataInvoice.description);
            setPaymentDue(dataInvoice.paymentDue);
            setItemName(dataInvoice.items.name);
            setQty(dataInvoice.items.quantity);
            setPrice(dataInvoice.items.price);
        }
    }, [dataInvoice]);

    function getInvoiceId() {
        let newString = "";
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for (let i = 0; i < 6; i++) {
            newString += characters.charAt(
                Math.floor(Math.random() * characters.length)
            );
        }
        return newString;
    }

    return (
        <Container newInvoice={newInvoice}>
            <div>
                <h2>New Invoice</h2>
                <p>Bill From</p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <label htmlFor="streetAdressFrom">
                                Street Adress
                            </label>
                            <InputLarger
                                type="text"
                                name="streetAdressFrom"
                                id="streetAdressFrom"
                                onChange={(e) =>
                                    setStreetAdressFrom(e.target.value)
                                }
                                value={streetAdressFrom}
                                required
                            />
                        </div>
                        <Group>
                            <div>
                                <label htmlFor="cityFrom">City</label>
                                <input
                                    type="text"
                                    name="cityFrom"
                                    id="cityFrom"
                                    onChange={(e) =>
                                        setCityFrom(e.target.value)
                                    }
                                    value={cityFrom}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="postCodeFrom">Post Code</label>
                                <input
                                    type="text"
                                    name="postCodeFrom"
                                    id="postCodeFrom"
                                    onChange={(e) =>
                                        setPostCodeFrom(e.target.value)
                                    }
                                    value={postCodeFrom}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="countryFrom">Country</label>
                                <input
                                    type="text"
                                    name="countryFrom"
                                    id="countryFrom"
                                    onChange={(e) =>
                                        setCountryFrom(e.target.value)
                                    }
                                    value={countryFrom}
                                    required
                                />
                            </div>
                        </Group>
                    </div>

                    <div className="bill-to">
                        <p>Bill To</p>
                        <div>
                            <label htmlFor="clientName">Client's Name</label>
                            <InputLarger
                                type="text"
                                name="clientName"
                                id="clientName"
                                onChange={(e) => setClientName(e.target.value)}
                                value={clientName}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="clientEmail">Client's Email</label>
                            <InputLarger
                                type="email"
                                name="clientEmail"
                                id="clientEmail"
                                onChange={(e) => setClientEmail(e.target.value)}
                                value={clientEmail}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="streetAdressTo">
                                Street Adress
                            </label>
                            <InputLarger
                                type="text"
                                name="streetAdressTo"
                                id="streetAdressTo"
                                onChange={(e) =>
                                    setStreetAdressTo(e.target.value)
                                }
                                value={streetAdressTo}
                                required
                            />
                        </div>
                        <Group>
                            <div>
                                <label htmlFor="cityTo">City</label>
                                <input
                                    type="text"
                                    name="cityTo"
                                    id="cityTo"
                                    onChange={(e) => setCityTo(e.target.value)}
                                    value={cityTo}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="postCodeTo">Post Code</label>
                                <input
                                    type="string"
                                    name="postCodeTo"
                                    id="postCodeTo"
                                    onChange={(e) =>
                                        setPostCodeTo(e.target.value)
                                    }
                                    value={postCodeTo}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="countryTo">Country</label>
                                <input
                                    type="text"
                                    name="countryTo"
                                    id="countryTo"
                                    onChange={(e) =>
                                        setCountryTo(e.target.value)
                                    }
                                    value={countryTo}
                                    required
                                />
                            </div>
                        </Group>

                        <div>
                            <label htmlFor="invoiceDate">Invoice Date</label>
                            <InputLarger
                                type="date"
                                name="invoiceDate"
                                id="invoiceDate"
                                onChange={(e) => setInvoiceDate(e.target.value)}
                                value={invoiceDate}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="paymentDue">Payment Due</label>
                            <InputLarger
                                type="date"
                                name="paymentDue"
                                id="paymentDue"
                                onChange={(e) => setPaymentDue(e.target.value)}
                                value={paymentDue}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="projectDescription">
                                Project Description
                            </label>
                            <InputLarger
                                type="text"
                                name="projectDescription"
                                id="projectDescription"
                                onChange={(e) =>
                                    setProjectDescription(e.target.value)
                                }
                                value={projectDescription}
                                required
                            />
                        </div>
                    </div>

                    <ItemList>
                        <div>
                            <label htmlFor="itemName">Item Name</label>
                            <input
                                type="text"
                                name="itemName"
                                id="itemName"
                                required
                                onChange={(e) => setItemName(e.target.value)}
                                value={itemName}
                            />
                        </div>
                        <div>
                            <label htmlFor="Qty">Qty.</label>
                            <input
                                type="number"
                                name="Qty"
                                id="Qty"
                                className="input-small"
                                required
                                onChange={(e) => setQty(e.target.value)}
                                value={Qty}
                            />
                        </div>

                        <div>
                            <label htmlFor="price">Price</label>
                            <input
                                type="number"
                                name="price"
                                id="price"
                                className="input-small"
                                required
                                onChange={(e) => setPrice(e.target.value)}
                                value={price}
                            />
                        </div>
                    </ItemList>

                    <div className="Send">
                        <Button>Save and Send</Button>
                    </div>
                </form>
            </div>
        </Container>
    );
};

export default NewInvoice;
