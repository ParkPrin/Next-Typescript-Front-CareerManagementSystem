import { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios";

const handler = (_req: NextApiRequest, _res: NextApiResponse) => {
    const resumeId: string | string[]  = _req.query.resumeId ? _req.query.resumeId: "null";
    if (_req.method === 'DELETE' && resumeId  !== "null"){

        try {
            axios.delete("http://localhost:8080/resume/api/v1/" + resumeId.toString()).then(res =>
            {
                return res.data
            }).then(res =>
            {
                return _res.status(200).json(res);
            })

        } catch (err) {
            _res.status(500).json({ statusCode: 500, message: err.message })
        }
    } else {
        _res.status(200).json("invalid access")
    }
}

export default handler