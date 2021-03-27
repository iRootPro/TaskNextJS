import {NextApiRequest, NextApiResponse} from "next";
import db from './../db.json'

export default function Articles(req: NextApiRequest, res: NextApiResponse) {
    const article = db.filter(article => article.id === req.query.id)[0]
    res.json(article)
}
