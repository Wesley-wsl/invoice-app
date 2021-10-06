export interface InvoiceCardProps {
    data: {
        email: string,
        total: Number,
        invoiceId: string,
        status: string,
        paymentDue: string
    }
}

export interface NewInvoice {
    newInvoice: Boolean
}