import React from 'react';
import List from "@material-ui/core/List";
import useSWR from "swr";
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
import {ResumeItem} from "../../interfaces/resume";
const useStyles = makeStyles(() =>
    createStyles({
        cardRoot: {
            maxWidth: 510,
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
        return resp.data;
    }
    const userId:string | null = window.localStorage.getItem("userId");
    console.log(userId);
    const url : string = '/api/resume/list?userId='+ userId;
    const defalutEesponse = useSWR(url, callApiData);
    let response:Response = defalutEesponse === undefined ? undefined : defalutEesponse.data;
    const data:ResumeItem[] = response === undefined ? [] : response.responseValue;


    return(
        <div>
            <List style={{width : "100%"}}>
                {data != []  && data != undefined &&
                <div style={{display:"-webkit-box"}}>
                    {data.map((item:ResumeItem, index:number) => (
                            <Card className={classes.cardRoot} key={index} style={{margin : "20px"}} >
                                <CardActionArea>
                                    <CardHeader
                                        title={item.resumeName}
                                        subheader={""}
                                    />
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="200px"
                                        image={item.data}
                                        title="Contemplative Reptile"
                                        style={{position: "relative", zIndex:0}}
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {item.career}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {item.resumeSalary}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {item.resumeSummary}
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

                    ))}
                </div>

                }
            </List>
        </div>
    )
}