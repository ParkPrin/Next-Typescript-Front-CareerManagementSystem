import {PageMenuItem} from "../menuitem";

export type InitExecuteValiable = {
    isSever : boolean
    menuList : PageMenuItem[]
    title : string | undefined
    redirectUrl : string
    isLogin : boolean
    isDevice : boolean
}