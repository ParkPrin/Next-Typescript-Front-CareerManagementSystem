import {InitExecuteValiable} from "../interfaces/initExecuteValiable";
import {IncomingMessage} from "http";
import {PageMenuItem} from "../interfaces/menuitem";


export default async function initExecute(req: IncomingMessage | undefined) {
    let initApiList:InitExecuteValiable = {
        isSever : true,
        menuList : [],
        title : process.env.NEXT_PROJECT_NAME_KR,
        redirectUrl : "",
        isLogin : true
    };
    const res = await fetch('http://localhost:3000/api/menu');
    initApiList.menuList = await res.json();
    const pageMenuItems:PageMenuItem[] = getMenuSelect(req, initApiList);
    initApiList = setRedirectUrl(setTitle(initApiList, pageMenuItems), pageMenuItems);
    return initApiList;
}

function getMenuSelect (req: IncomingMessage | undefined, initApiList:InitExecuteValiable) : PageMenuItem[] {
    const domainUrl = req?.url;
    if (domainUrl === "login") {
        let pageItem:PageMenuItem[] = [{
            id: 999, name: '로그인', iconName: '', url: '/login', isAdmin: false, isLogin: false
        }]
        return pageItem;
    } else {
        const menuList = initApiList.menuList;
        const selectMenu = menuList.filter((item) => (
            item.url === domainUrl && item.name != "메인"
        ));
        return selectMenu;
    }


}

function setTitle (initApiList:InitExecuteValiable, pageMenuItem:PageMenuItem[]) : InitExecuteValiable {
    if (pageMenuItem.length > 0){
        initApiList.title = pageMenuItem[0].name
    }
    return initApiList;
}

function setRedirectUrl (initApiList:InitExecuteValiable, pageMenuItem:PageMenuItem[]) : InitExecuteValiable {
    if (pageMenuItem.length > 0){
        const isLogin = pageMenuItem[0].isLogin
        if (isLogin){
            initApiList.redirectUrl = "/login"
        }
    }
    return initApiList;
}
