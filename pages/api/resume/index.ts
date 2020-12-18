import { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios";
import {ResumeItem} from "../../../interfaces/resume";

const handler = (_req: NextApiRequest, _res: NextApiResponse) => {
    if (_req.method === 'POST'){

        const resumeItem:ResumeItem =
            {
                id  : 0,
                userId : _req.body.userId,
                resumeName : _req.body.resumeName,
                imageId: 0,
                imageName : _req.body.imageName,
                imageType : _req.body.imageType,
                data : _req.body.data,
                imageFile : _req.body.imageFile,
                resumeSummary : _req.body.resumeSummary,
                career : _req.body.career,
                resumeSalary : _req.body.resumeSalary,
            }

        try {
            axios.post("http://localhost:8080/resume/api/v1/", resumeItem).then(res =>
            {
                console.log("//////////////")
                console.log(res.data)
                console.log("//////////////")
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