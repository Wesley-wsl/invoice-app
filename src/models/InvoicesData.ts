import mongoose from 'mongoose';


const InvoicesDataSchema = new mongoose.Schema({
    billFrom: {
        streetAdress: {type: String, required: true},
        city: {type: String, required: true},
        postCode: {type: Number, required: true},
        country: {type: String, required: true}
    },
    billTo: {
        clientName: {type: String, required: true},
        clientEmail: {type: String, required: true},
        streetAdress: {type: String, required: true},
        city: {type: String, required: true},
        postCode: {type: Number, required: true},
        country: {type: String, required: true},
        invoiceDate: {type: Number, required: true},
        paymentTerms: {type: String, required: true},
        projectDescription: {type: String, required: true}
    },
    itemName: {type: String, required: true},
    quantity: {type: Number, required: true},
    price: {type: Number, required: true},
    total: {type: Number, required: true},
})

export default mongoose.model('InvoicesData', InvoicesDataSchema)