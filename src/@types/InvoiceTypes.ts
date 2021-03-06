export interface InvoiceCardProps {
    data: {
        clientName: string;
        total: Number;
        invoiceId: string;
        status: string;
        paymentDue: string;
    };
}

export interface NewInvoiceProps {
    newInvoice: Boolean;
    setNewInvoice?: Function;
    setData?: Function;
    getInvoices?: Function;
    setStatusState?: Function;
    dataInvoice?: {
        senderAddress: {
            street: string;
            city: string;
            postCode: string;
            country: string;
        };
        clientAddress: {
            street: string;
            city: string;
            postCode: string;
            country: string;
        };
        items: {
            name: string;
            quantity: string;
            price: string;
        };
        invoiceId: string;
        invoiceDate: string;
        status: string;
        paymentDue: string;
        description: string;
        clientName: string;
        clientEmail: string;
        total: Number;
    };
}

export interface InvoiceData {
    data: {
        senderAddress: {
            street: string;
            city: string;
            postCode: string;
            country: string;
        };
        clientAddress: {
            street: string;
            city: string;
            postCode: string;
            country: string;
        };
        items: {
            name: string;
            quantity: string;
            price: string;
        };
        invoiceId: string;
        invoiceDate: string;
        status: string;
        paymentDue: string;
        description: string;
        clientName: string;
        clientEmail: string;
        total: Number;
    };
}

export interface HeaderProps {
    setLightMode: Function,
    lightMode: Boolean
}

export interface ThemeProps {
    primary: string,
    secondary: string,
    color: string,
    buttonNewInvoice: string
}