import dbConnect from "../../../utils/dbConnect";
import InvoicesData from "../../../models/InvoicesData";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case "GET":
            try {
                const { status } = req.query;

                if (status == "Pending") {
                    const invoicesPending = await InvoicesData.find({
                        status: "Pending",
                    });
                    return res.status(200).json({
                        success: true,
                        data: invoicesPending,
                    });
                }

                if (status == "Paid") {
                    const invoicesPaid = await InvoicesData.find({
                        status: "Paid",
                    });
                    return res.status(200).json({
                        success: true,
                        data: invoicesPaid,
                    });
                }

                const invoices = await InvoicesData.find({});
                return res.status(200).json({
                    success: true,
                    data: invoices,
                });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case "POST":
            try {
                const {
                    invoiceId,
                    invoiceDate,
                    status,
                    paymentDue,
                    description,
                    paymentTerms,
                    clientName,
                    clientEmail,
                    senderAddress,
                    clientAddress,
                    items,
                    total,
                } = req.body;

                const createInvoices = await InvoicesData.create({
                    invoiceId,
                    invoiceDate,
                    status,
                    paymentDue,
                    description,
                    paymentTerms,
                    clientName,
                    clientEmail,
                    senderAddress,
                    clientAddress,
                    items,
                    total,
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
