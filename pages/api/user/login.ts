import { NextApiRequest, NextApiResponse } from 'next'
import {UserAndPerson} from "../../../interfaces/userAndPerson";
import axios from "axios";
const handler = (_req: NextApiRequest, _res: NextApiResponse) => {
    if (_req.method === 'POST'){

        const userAndPersonDTO:UserAndPerson =
            {
                userId : _req.body.userId,
                password : _req.body.password
            }
        try {
            axios.post("http://localhost:8080/user/api/login/v1", userAndPersonDTO).then(res =>
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