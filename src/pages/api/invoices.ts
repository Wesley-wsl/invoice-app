import dbConnect from "../../utils/dbConnect";
import InvoicesData from "../../models/InvoicesData";

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case "GET":
            try {
                const invoices = await InvoicesData.find({});
                res.status(200).json({ success: true, data: invoices });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case "POST":
            try {
                const { email, invoiceId, createdAt, status } = req.body;

                const createInvoices = await InvoicesData.create({
                    email,
                    invoiceId,
                    createdAt,
                    status,
                });

                res.status(200).json({ success: true, data: createInvoices });
            } catch (error) {
                res.status(400).json({ success: false, error });
            }

        default:
            res.status(400).json({ success: false });
            break;
    }
}
