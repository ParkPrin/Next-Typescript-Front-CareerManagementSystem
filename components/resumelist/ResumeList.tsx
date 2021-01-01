import React, {useEffect} from 'react';
import List from "@material-ui/core/List";
import useSWR from "swr";
import axios from "axios";
import { useRouter } from 'next/router'
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
import CareerRegisterModal from "../career/CareerRegisterModal";
const useStyles = makeStyles(() =>
    createStyles({
        cardRoot: {
            maxWidth: 510,
        },
    }),
);
interface optionObject {
    optionKey : string
    optionLabel : string
}

const ITEM_HEIGHT = 48;
export default function ResumeList() {
    const router = useRouter()
    let defalutResponse:any = null

    const classes = useStyles();
    const options: optionObject[] = [
        {optionKey: "modified", optionLabel: "수정"},
        {optionKey: "share", optionLabel: "공유"},
        {optionKey: "delete", optionLabel: "삭제"},
        {optionKey: "copy", optionLabel: "복사"}
    ];
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    const [resumeObj, setResumeObj] = React.useState<ResumeItem | null>(null);
    const [isCareerRegisterModalOpen, setIsCareerRegisterModalOpen] = React.useState<boolean>(false);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const optionExecute = async (event: React.MouseEvent<HTMLElement>) => {
        switch (event.target.accessKey){
            case "modified":
                if (resumeObj !== null){
                    setIsCareerRegisterModalOpen(true);
                }


                return;
            case "share":
                return;
            case "delete":

                if (resumeObj !== null){
                    const result = confirm("'" +resumeObj.resumeName + "' 이력을 삭제 하시겠습니까? ");
                    if (!result) return;
                    deleteApiData('/api/resume/delete?resumeId='+ resumeObj.id)
                }

                return;
            case "copy":
                return;
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const redirectList = async () => {
        const userId:string | null = window.localStorage.getItem("userId");
        const url : string = '/api/resume/list?userId='+ userId;
        getApiData(url);
    }

    const getApiData = async (url:string) => {
        const resp = await axios.get(url);
        return resp.data;
    }

    const goToResume = () => {
        router.push("/career/write")
    }

    const deleteApiData = async (url:string) => {
        const resp = await axios.delete(url);
        return resp.data;
    }

    const detailApiData = async (url:string) => {
        const resp = await axios.get(url);
        return resp.data;
    }

    const ResumeSummary = (props:any) => {
        const inputTextArrays:string[] = props.children.split("\n");
        return (<div>
            {inputTextArrays.map((inputText:string, index:number) => (
                <Typography key={index} variant="body2" color="textSecondary" component="div">
                    <p >{inputText}</p>
                </Typography>
            ))}
        </div>)
    }


    const userId:string | null = window.localStorage.getItem("userId");
    const url : string = '/api/resume/list?userId='+ userId;
    const { data } = useSWR(url, getApiData);
    console.log(data)
    let response:Response = data === undefined ? undefined : data.data;
    let resultData:ResumeItem[] = response === undefined ? [] : response.responseValue;


    useEffect(() => {
        console.log("----test-----")

    }, [defalutResponse]);
    return(
        <div>
            <CareerRegisterModal isCareerRegisterModalOpen={isCareerRegisterModalOpen}
                                 closeIsCareerRegisterModalOpen={() => {setIsCareerRegisterModalOpen(false)}}
                                 resumeObj={resumeObj}  />
            <List style={{width : "100%"}}>
                {resultData != []  && resultData != undefined &&
                <div style={{display:"-webkit-box"}}>
                    {resultData.map((item:ResumeItem, index:number) => (
                            <Card className={classes.cardRoot} key={index} style={{margin : "20px"}} >
                                <CardActionArea onClick={goToResume}>
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
                                        <ResumeSummary >
                                            {item.resumeSummary}
                                        </ResumeSummary>
                                    </CardContent>
                                </CardActionArea>

                                <CardActions>
                                    <div>
                                        <IconButton
                                            aria-label="more"
                                            aria-controls="long-menu"
                                            aria-haspopup="true"
                                            onClick={(event)=> {
                                                setResumeObj(item);
                                                handleClick(event);
                                            }}
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
                                                <MenuItem accessKey={option.optionKey} key={option.optionKey} onClick={optionExecute}>
                                                    {option.optionLabel}
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