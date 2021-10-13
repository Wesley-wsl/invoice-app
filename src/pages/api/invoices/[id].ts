import InvoicesData from "../../../models/InvoicesData";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { method } = req;

    switch (method) {
        case "GET":
            try {
                const { id } = req.query;

                const targetInvoice = await InvoicesData.findOne({
                    invoiceId: id,
                });

                return res.status(200).json({
                    data: targetInvoice,
                });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        case "DELETE":
            try {
                const { id } = req.query;

                const deleteInvoice = await InvoicesData.deleteOne({
                    invoiceId: id,
                });

                return res.status(200).json({
                    success: true,
                    data: deleteInvoice,
                });
            } catch (error) {
                return res.status(400).json({ success: false, error });
            }

        case "PATCH":
            try {
                const { id } = req.query;

                const updateStatusInvoice = await InvoicesData.updateOne(
                    { invoiceId: id },
                    {
                        status: "Paid",
                    }
                );

                return res.status(200).json({success: true, data: updateStatusInvoice})
            } catch (error) {
                return res.status(400).json({ success: false, error });
            }

            
        case "PUT": 
            try {
                const { id } = req.query;
                const {
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

                const updateInvoice = await InvoicesData.updateOne({
                    invoiceId: id
                }, {
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
                    total
                })

                return res.status(200).json({success: true, data: updateInvoice})
            } catch (error) {

                return res.status(400).json({success:false, error})
            }

        default:
            res.status(400).json({ success: false });
            break;
    }
}
