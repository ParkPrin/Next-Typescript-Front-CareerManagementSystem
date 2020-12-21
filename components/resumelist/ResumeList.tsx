import React from 'react';
import List from "@material-ui/core/List";
import useSWR from "swr";
import {PageMenuItem} from "../../interfaces/menuitem";
import axios from "axios";
import {Response} from "../../interfaces/response";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Card from "@material-ui/core/Card";
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import FolderSharedIcon from "@material-ui/icons/FolderShared";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ListItemText from "@material-ui/core/ListItemText";
const useStyles = makeStyles(() =>
    createStyles({
        cardRoot: {
            maxWidth: 310,
        },
    }),
);


const options = [
    '수정',
    '공유',
    '삭제',
    '복사'
];

const ITEM_HEIGHT = 48;
export default function ResumeList() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const callApiData = async (url:string) => {
        const resp = await axios.get(url);
        console.log("---------aaaaaaa-------------")
        console.log(resp.data)
        return resp.data;
    }
    const userId:string | null = window.localStorage.getItem("userId");
    console.log(userId);
    const url : string = '/api/resume/list?userId='+ userId;
    const defalutEesponse = useSWR(url, callApiData);
    let response:Response = defalutEesponse === undefined ? undefined : defalutEesponse.data;
    const data:any[] = response === undefined ? [] : response.responseValue;


    return(
        <div>
            <List>
                {data != []  && data != undefined &&
                <div>
                    {data.map((item:any, index:number) => (
                        <div>
                            <Card className={classes.cardRoot} >
                                <CardActionArea>
                                    <CardHeader
                                        title={item.resumeName}
                                        subheader={item.dateCreated}
                                    />
                                    <img src={item.image.data} alt="" width="100" />
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            경력 5년차
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            연봉: 5000
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>

                                <CardActions>
                                    <div>
                                        <IconButton
                                            aria-label="more"
                                            aria-controls="long-menu"
                                            aria-haspopup="true"
                                            onClick={handleClick}
                                            style={{float:"right", position:"relative"}}
                                        >
                                            <MoreVertIcon />
                                        </IconButton>
                                        <Menu
                                            id="long-menu"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                            PaperProps={{
                                                style: {
                                                    maxHeight: ITEM_HEIGHT * 4.5,
                                                    width: '20ch',
                                                },
                                            }}
                                        >
                                            {options.map((option) => (
                                                <MenuItem key={option} onClick={handleClose}>
                                                    {option}
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    </div>
                                </CardActions>
                            </Card>
                        </div>
                    ))}
                </div>

                }
            </List>
        </div>
    )
}