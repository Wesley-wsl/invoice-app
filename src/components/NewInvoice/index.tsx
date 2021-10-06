import React, { useState } from "react";

import {
    Button,
    Container,
    Group,
    InputLarger,
    ItemList,
    Select,
} from "./styles";
import { NewInvoiceProps } from "../../@types/InvoiceTypes";
import IconDelete from "../../assets/icon-delete.svg";
import api from "../../services/api";
import { FormEvent } from "hoist-non-react-statics/node_modules/@types/react";

const NewInvoice: React.FC<NewInvoiceProps> = ({ newInvoice }) => {
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
    const [paymentTerms, setPaymentTerms] = useState("Net-1-Day");
    const [projectDescription, setProjectDescription] = useState("");
    // const [itemName] = useState("");
    // const [Qty] = useState("");
    // const [price] = useState("");
    // const [total] = useState("");


    async function handleSubmit(e: FormEvent) {
        e.preventDefault()

        await api.post('/invoices', {
            invoiceId: 'M019SK',
            createdAt: Date.now(),
            paymentDue: '???',
            description: projectDescription,
            clientName,
            clientEmail,
            status: 'Pending',
            senderAdress: {
                street: streetAdressFrom,
                city: cityFrom,
                postCode: postCodeFrom,
                country: countryFrom
            },
            clientAdress: {
                street: streetAdressTo,
                city: cityTo,
                postCode: postCodeTo,
                country: countryTo
            }
        })
    }

    return (
        <Container newInvoice={newInvoice}>
            <div id="back" />
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
                                onClick={() => console.log(streetAdressFrom)}
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
                                    onClick={() => console.log(cityFrom)}
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
                                    onClick={() => console.log(postCodeFrom)}
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
                                    onClick={() => console.log(countryFrom)}
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
                                onClick={() => console.log(clientName)}
                            />
                        </div>
                        <div>
                            <label htmlFor="clientEmail">Client's Email</label>
                            <InputLarger
                                type="email"
                                name="clientEmail"
                                id="clientEmail"
                                onChange={(e) => setClientEmail(e.target.value)}
                                onClick={() => console.log(clientEmail)}
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
                                onClick={() => console.log(streetAdressTo)}
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
                                    onClick={() => console.log(cityTo)}
                                />
                            </div>
                            <div>
                                <label htmlFor="postCodeTo">Post Code</label>
                                <input
                                    type="number"
                                    name="postCodeTo"
                                    id="postCodeTo"
                                    onChange={(e) =>
                                        setPostCodeTo(e.target.value)
                                    }
                                    onClick={() => console.log(postCodeTo)}
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
                                    onClick={() => console.log(countryTo)}
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
                                onClick={() => console.log(invoiceDate)}
                            />
                        </div>
                        <div>
                            <label htmlFor="paymentTerms">Payment Terms</label>
                            <Select
                                name="paymentTerms"
                                id="paymentTerms"
                                onChange={(e) =>
                                    setPaymentTerms(e.target.value)
                                }
                                onClick={() => console.log(paymentTerms)}
                            >
                                <option value="Net-1-Day">Net 1 Day</option>
                                <option value="Net-7-Days">Net 7 Days</option>
                                <option value="Net-14-Days">Net 14 Days</option>
                                <option value="Net-30-Days">Net 30 Days</option>
                            </Select>
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
                                onClick={() => console.log(projectDescription)}
                            />
                        </div>
                    </div>

                    <ItemList>
                        <p>Item List</p>

                        <div className="container-item">
                            <div>
                                <label htmlFor="itemName">Item Name</label>
                                <input
                                    type="text"
                                    name="itemName"
                                    id="itemName"
                                />
                            </div>
                            <div>
                                <label htmlFor="Qty">Qty.</label>
                                <input
                                    type="number"
                                    name="Qty"
                                    id="Qty"
                                    className="input-small"
                                />
                            </div>

                            <div>
                                <label htmlFor="price">Price</label>
                                <input
                                    type="number"
                                    name="price"
                                    id="price"
                                    className="input-small"
                                />
                            </div>

                            <div>
                                <label htmlFor="total">Total</label>
                                <input
                                    type="number"
                                    name="total"
                                    readOnly
                                    id="total"
                                    className="input-small"
                                />
                            </div>

                            <IconDelete />
                        </div>

                        <div>
                            <button>Add New Item</button>
                        </div>
                    </ItemList>

                    <div className="Send">
                        <Button>Save as Draft</Button>
                        <Button>Save and Send</Button>
                    </div>
                </form>
            </div>
        </Container>
    );
};

export default NewInvoice;
