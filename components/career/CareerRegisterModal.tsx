import React, {FormEvent, useEffect} from "react";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FileUpload from "./FileUpload";
import { ImageListType } from "react-images-uploading"
import {Response} from "../../interfaces/response";
import axios from "axios";
import {ResumeItem} from "../../interfaces/resume";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        careerRegisterModal: {
            position: 'absolute',
            width: 600,
            height: 750,
            backgroundColor: theme.palette.background.paper,

            boxShadow: theme.shadows[1],
            padding: theme.spacing(2, 4, 3),
        }
    }),
);

interface CareerRegisterModalProps {
    isCareerRegisterModalOpen : boolean
    closeIsCareerRegisterModalOpen() : void
    resumeObj : ResumeItem | null
}

export default function CareerRegisterModal(props:CareerRegisterModalProps){

    useEffect(() => {
       if (props){
           console.log(props)
           //setResumeName(props.resumeObj.resumeName);
           //setResumeSummary(props.resumeObj.resumeSummary);
           //setResumeYears(props.resumeObj.career);
           //setResumeSalary(props.resumeObj.resumeSalary);
       }
    });
    const classes = useStyles();
    const [resumeName, setResumeName] = React.useState<string>("");
    const [imageList, setImageList] = React.useState<ImageListType>([]);
    const [resumeSummary, setResumeSummary] = React.useState<string>("");
    const [areaFocus, setAreaFocus] = React.useState<boolean>(false);
    const [resumeYears, setResumeYears] = React.useState<string>("");
    const [resumeSalary, setResumeSalary] = React.useState<string>("");
    const handleSubmit = async (form: FormEvent<HTMLFormElement>) => {
        form.preventDefault();
        validationCheck();
        console.log(resumeName);
        console.log(imageList[0].dataURL);
        console.log(imageList[0].file.name);
        console.log(imageList[0].file.type);
        console.log(imageList);
        console.log(resumeSummary);
        console.log(resumeYears);
        console.log(resumeSalary);
        const data:Response = await callApiData("/api/resume/register");
        if (data.state === 200){
            variableSetClear();
            props.closeIsCareerRegisterModalOpen();
        } else {
            alert("로그인 실패 - 원인 : "+ data.responseValue);

        }
    }

    const variableSetClear = () => {
        setResumeName("");
        setImageList([]);
        setResumeSummary("");
        setAreaFocus(false);
        setResumeYears("");
        setResumeSalary("");
    }

    const callApiData:(url: string) => Promise<any> = async (url:string) => {
        const resp = await axios.post(url, {
            userId : window.localStorage.getItem("userId"),
            imageName : imageList[0].file.name,
            imageType : imageList[0].file.type,
            data : imageList[0].dataURL,
            resumeName : resumeName,
            resumeSummary : resumeSummary,
            career : resumeYears,
            resumeSalary : resumeSalary
        });
        return resp.data;
    }

    const validationCheck = () => {
        if (resumeName === "") alert("이력서 제목을 입력하세요.")
        if (resumeSummary === "") alert("이력서 요약을 입력하세요.")
        if (resumeYears === "") alert("경력을 입력하세요.")
        if (resumeSalary === "") alert("연봉을 입력하세요.")
    }

    return (
        <div>
            <Modal
                open={props.isCareerRegisterModalOpen}
                onClose={() => {props.closeIsCareerRegisterModalOpen()}}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)', paddingLeft: "0px", paddingRight: "0px"}} className={classes.careerRegisterModal}>
                    <div style={{borderBottom: "solid", borderBottomWidth: "thin"}}>
                        <Typography variant="h6" gutterBottom style={{paddingLeft: "20px", color: "#2e86de", fontWeight: "bold"}}>
                            이력서 등록
                        </Typography>
                    </div>
                    <div style={{paddingLeft: "20px", paddingRight: "20px"}}>
                        <header style={{marginTop: "20px"}}>

                        </header>
                        <main>
                            <div style={{margin: "15px" }}>
                                <div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="w3-container" style={{margin: "8px"}} onClick={input => {
                                            if (input.target.id !== "resumeSummary"){setAreaFocus(false)}}
                                        }>
                                            <table className="w3-table w3-bordered">
                                                <thead></thead>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <TextField style={{marginLeft: "20px",  marginBottom: "5px", width: "90%"}} id="resumeName" name="resumeName" value={resumeName} onChange={input => {setResumeName(input.target.value)}} label="이력서 제목" error={false} />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <FileUpload setImageList={imageList => setImageList(imageList)}/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        {!areaFocus && <p style={{marginLeft : "15px", fontSize : "15px", color: "#757575"}}>이력상세</p> }
                                                        {areaFocus && <p style={{marginLeft : "15px", fontSize : "7px"}}>이력상세</p> }
                                                        <textarea onFocus={() => setAreaFocus(true)} id="resumeSummary" name="resumeSummary" value={resumeSummary} onChange={input => {setResumeSummary(input.target.value)}} style={{width: "95%", height: "150px"}} />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <TextField style={{marginLeft: "20px",  marginBottom: "5px"}} id="resumeYears" name="resumeYears" label="경력년수" value={resumeYears} onChange={input => {setResumeYears(input.target.value)}} error={false} />
                                                        <TextField style={{marginLeft: "20px",  marginBottom: "5px"}} id="resumeSalary" name="resumeSalary" label="연봉정보" value={resumeSalary} onChange={input => {setResumeSalary(input.target.value)}} error={false} />
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <div style={{marginLeft: "70%", marginTop: "15px"}}>
                                                <Button type={"submit"} variant="contained" color="secondary" size="small" name="foreignTestSave" id="foreignTestSave" style={{marginRight: "5px"}}>
                                                    등록
                                                </Button>

                                                <Button onClick={() => {props.closeIsCareerRegisterModalOpen()}} variant="contained"  size="small" name="foreignTestCancle" id="foreignTestCancle">
                                                    취소
                                                </Button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </main>
                        <footer>

                        </footer>
                    </div>
                </div>

            </Modal>
        </div>
    )
}