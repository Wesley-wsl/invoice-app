import mongoose from 'mongoose';


const InvoiceDataSchema = new mongoose.Schema({
    invoiceId: { type: String, required: true },
    createdAt: { type: Date, required: true },
    paymentDue: { type: String },
    description: { type: String },
    paymentTerms: { type: Number },
    clientName: { type: String, required: true},
    clientEmail: { type: String },
    status: { type: String, required: true },
    senderAddress: {
      street: String,
      city: String,
      postCode: String,
      country: String,
    },
    clientAddress: {
      street: String,
      city: String,
      postCode: String,
      country: String,
    },
    items: [{ name: String, quantity: Number, price: Number, total: Number }],
    total: Number,
})


export default mongoose.models.InvoicesData || mongoose.model('InvoicesData', InvoiceDataSchema)