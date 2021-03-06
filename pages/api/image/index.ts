import { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios";
const handler = (_req: NextApiRequest, _res: NextApiResponse) => {
    if (_req.method === 'POST'){

            console.log(_req.body);

        try {
            axios.post("http://localhost:8080/image/api/v1/resume", _req.body).then(res =>
            {
                return res.data
            }).then(res =>
            {
                return _res.status(200).json(res);
            })
        } catch (err) {
            _res.status(500).json({ statusCode: 500, message: err.message })
        }

        return _res.status(200).json(_req.body);
    } else {
        _res.status(200).json("invalid access")
    }

}

export default handler