import {NextApiRequest, NextApiResponse} from "next";
import db from './../db.json'

export default function Articles(req: NextApiRequest, res: NextApiResponse) {
    res.json(db)
}
