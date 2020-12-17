import React from "react";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FileUpload from "./FileUpload";
import { ImageListType } from "react-images-uploading"
import ImageSearchIcon from '@material-ui/icons/ImageSearch';

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
}

export default function CareerRegisterModal(props:CareerRegisterModalProps){
    const classes = useStyles();
    const [imageList, setImageList] = React.useState<ImageListType>([]);
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
                                    <form>
                                        <div className="w3-container" style={{margin: "8px"}}>
                                            <table className="w3-table w3-bordered">
                                                <thead></thead>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <TextField style={{marginLeft: "20px",  marginBottom: "5px", width: "90%"}} id="resumeName" name="resumeName" label="이력서 제목" error={false} />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <FileUpload setImageList={imageList => setImageList(imageList)}/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h6 style={{marginLeft : "20px"}}>이력상세</h6>
                                                        <textarea id="resumeSummary" name="resumeSummary" style={{width: "95%", height: "150px"}} />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <TextField style={{marginLeft: "20px",  marginBottom: "5px"}} id="resumeYears" name="resumeYears" label="경력년수" error={false} />
                                                        <TextField style={{marginLeft: "20px",  marginBottom: "5px"}} id="resumeSalary" name="resumeSalary" label="연봉정보" error={false} />
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <div style={{marginLeft: "70%", marginTop: "15px"}}>
                                                <Button variant="contained" color="secondary" size="small" name="foreignTestSave" id="foreignTestSave" style={{marginRight: "5px"}}>
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