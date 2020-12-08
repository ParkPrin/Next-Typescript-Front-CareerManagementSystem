import { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios";




const handler = (_req: NextApiRequest, _res: NextApiResponse) => {
    if (_req.method === 'GET'){

        try {
            axios.get("http://localhost:8080/menu/api/v1/null").then(res =>
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