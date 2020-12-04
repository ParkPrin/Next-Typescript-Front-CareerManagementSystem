import { NextApiRequest, NextApiResponse } from 'next'
import {UserAndPerson} from "../../../interfaces/userAndPerson";
const handler = (_req: NextApiRequest, _res: NextApiResponse) => {
    if (_req.method === 'POST'){

        const userAndPersonDTO:UserAndPerson =
            {
                userId : _req.body.userId,
                password : _req.body.password
            }
        try {
            fetch("http://localhost:8080/user/api/login/v1", {
                method: 'POST',
                cache: 'default',
                headers: {
                    'ConTent-Type' : 'application/json'
                },
                credentials: 'omit',
                body : JSON.stringify(userAndPersonDTO)
            })
                .then(res => {
                    return res.json()
                })
                .then(res => {
                    _res.status(200).json(res)
                })
        } catch (err) {
            _res.status(500).json({ statusCode: 500, message: err.message })
        }
    } else {
        _res.status(200).json("invalid access")
    }

}

export default handler