import React, {useEffect} from 'react';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import FolderSharedIcon from "@material-ui/icons/FolderShared";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import useSWR from "swr";
import {PageMenuItem} from "../../interfaces/menuitem";
import axios from "axios";
export default function Menulist() {
    const ListItemLink = (props:any) => {
        return <ListItem button component="a" {...props} />;
    }

    const callApiData = async (url:string) => {
        const resp = await axios.get(url);
        //console.log("resp: ", resp.data)
        return resp.data;
    }
    let data:PageMenuItem[] = callApiData ?
        useSWR('/api/menu', callApiData).data : [];

    return(
        <div>
            <List>
                {data != []  && data != undefined &&
                <div>
                    {data.map((item:PageMenuItem, index:number) => (
                        <ListItemLink
                            key={index}
                            href={item.url}
                        >
                            <ListItemIcon>
                                {item.iconName === "Home" ? <HomeIcon/> :
                                    item.iconName === "Profile" ? <AccountBoxIcon/> :
                                        item.iconName === "Share" ? <FolderSharedIcon/> : <InboxIcon/>}

                            </ListItemIcon>
                            <ListItemText primary={item.name}/>
                        </ListItemLink>
                    ))}
                </div>
                }
            </List>
        </div>
    )
}