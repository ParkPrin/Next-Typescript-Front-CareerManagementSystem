import {InitExecuteValiable} from "../interfaces/initExecuteValiable";
import {IncomingMessage} from "http";


export default async function initExecute(req: IncomingMessage | undefined) {
    let initApiList:InitExecuteValiable = {
        isSever : true,
        menuList : []
    };
    initApiList.isSever = req ? true : false
    const res = await fetch('http://localhost:3000/api/menu');
    initApiList.menuList = await res.json();
    return initApiList;
}
