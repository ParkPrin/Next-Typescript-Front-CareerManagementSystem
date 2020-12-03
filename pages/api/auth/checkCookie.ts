import {NextApiRequest, NextApiResponse} from "next";

const handler = (_req: NextApiRequest, _res: NextApiResponse) => {
    // 1. 쿠키가 존재하는 지 여부를 체크한다.
    // 2. 쿠키가 없으면 로그인 페이지로 리다이렉트한다
    const secretCookie = _req.previewData
    console.log('secretCookie: ', secretCookie);
    // 3. 쿠기가 있으면 인증 성공 메시지를 리턴한다.

    _res.status(200).json(secretCookie)



}

export default handler