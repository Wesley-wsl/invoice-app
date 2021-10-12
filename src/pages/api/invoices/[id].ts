import InvoicesData from "../../../models/InvoicesData";
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    const { method } = req;

    switch (method) {
        case "GET":
            try {
                const {id} = req.query

                const targetInvoice = await InvoicesData.findOne({invoiceId: id})

                return res.status(200).json({
                    data: targetInvoice
                });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        default:
            res.status(400).json({ success: false });
            break;
    }
}
