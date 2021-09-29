import Header from "../components/Header";
import InvoiceCard from "../components/InvoiceCard";
import IconArrowDown from "../assets/icon-arrow-down.svg";
import { Container, InvoicesBar } from "../styles/Home";
import NewInvoice from "../components/NewInvoice";

export default function Home() {
    return (
        <>
            <Header />
            <Container>
                <InvoicesBar>
                    <div className="introducion">
                        <h1>Invoices</h1>
                        <p>There are x total invoices</p>
                    </div>

                    <div className="actions">
                        <div>
                            Filter by status{" "}
                            <span>
                                <IconArrowDown />
                            </span>{" "}
                        </div>
                        <button>
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
                                        fill-rule="nonzero"
                                    ></path>
                                </svg>
                            </span>{" "}
                            New Invoice
                        </button>
                    </div>
                </InvoicesBar>
                <NewInvoice />

                <InvoiceCard />
                <InvoiceCard />
                <InvoiceCard />
                <InvoiceCard />
            </Container>
        </>
    );
}
