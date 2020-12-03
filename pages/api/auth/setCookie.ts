import {NextApiRequest, NextApiResponse} from "next";

interface AuthData {
    Authorization : string
}

const handler = (_req: NextApiRequest, _res: NextApiResponse) => {
    // 1. 쿠키가 존재하는 지 여부를 체크한다.
    // 2. 쿠키가 없으면 로그인 페이지로 리다이렉트한다
    // 3. 쿠기가 있으면 인증 성공 메시지를 리턴한다.
    const AuthorizationData:AuthData = {Authorization : "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqYXZhaW51c2UiLCJleHAiOjE2MDUyNTc1NjgsImlhdCI6MTYwNTIzOTU2OH0.ra--UhcBcv5CZnTyxuy71W75djSXIaAj2202Yv-XtJZ2nUH4qdzGkk3-QxSBccEJCGz7vUC7wdd2iyE8I0juCQ"}
    _res.setPreviewData(AuthorizationData, {
        maxAge: 60 * 60
    })
    _res.status(200).json(AuthorizationData)



}

export default handler