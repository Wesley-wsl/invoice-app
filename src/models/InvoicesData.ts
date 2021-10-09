import mongoose from 'mongoose';


const InvoiceDataSchema = new mongoose.Schema({
    invoiceId: { type: String, required: true },
    invoiceDate: { type: String, required: true },
    paymentDue: { type: String },
    description: { type: String },
    clientName: { type: String, required: true},
    clientEmail: { type: String },
    status: { type: String, required: true },
    senderAddress: {
      street: {type: String, required: true},
      city: {type: String, required: true},
      postCode: {type: String, required: true},
      country: {type: String, required: true},
    },
    clientAddress: {
      street: {type: String, required: true},
      city: {type: String, required: true},
      postCode: {type: String, required: true},
      country: {type: String, required: true},
    },
    items: { name: String, quantity: String, price: String },
    total: Number
})


export default mongoose.models.InvoicesData || mongoose.model('InvoicesData', InvoiceDataSchema)