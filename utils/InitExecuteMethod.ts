import {InitExecuteValiable} from "../interfaces/initExecuteValiable";
import {IncomingMessage} from "http";
export default async function initExecute(req: IncomingMessage | undefined) {
    let initApiList:InitExecuteValiable = {
        isSever : true,
        title : process.env.NEXT_PROJECT_NAME_KR,
        redirectUrl : "",
        isLogin : false,
        isDevice: false
    };
    const isMobileView = (req? req.headers['user-agent'] :navigator.userAgent)?.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
    initApiList.isDevice = isMobileView ? true : false;
    console.log(req?.headers);
    return initApiList;
}
