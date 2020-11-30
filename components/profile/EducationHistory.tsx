import React  from 'react'
import {createStyles, withStyles, WithStyles} from "@material-ui/core/styles";
import {Theme} from "@material-ui/core/styles/createMuiTheme";
import initExecute from "../../utils/InitExecuteMethod";
import {InitExecuteValiable} from "../../interfaces/initExecuteValiable";
import {NextPageContext} from "next";
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

export interface EducationHistoryState {
    isHighSchoolModal : boolean
    highSchoolType : string
    isCollegeModal : boolean
    collegeGraduatedType : string
    iscollegeMajorModal : boolean
    collegePerfectScore : string
    autoFocusId : string
    collegeScore : string
}

const useStyles = (theme: Theme) =>
    createStyles({
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
        },
        addressModal: {
            position: 'absolute',
            width: 600,
            height: 280,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[1],
            padding: theme.spacing(2, 4, 3),
        }
    });

export interface EducationHistoryPageProps extends WithStyles<typeof useStyles>{
    initExecuteValiable: InitExecuteValiable
}

class EducationHistory extends React.Component<EducationHistoryPageProps, EducationHistoryState> {
    state = {
        isHighSchoolModal : false,
        highSchoolType : "0",
        isCollegeModal : false,
        collegeGraduatedType : "0",
        iscollegeMajorModal : false,
        collegePerfectScore : "0.00",
        autoFocusId : "",
        collegeScore : ""
    }

    validationGrades = (event: React.ChangeEvent<HTMLInputElement>) => {
        //cellPhoneType, localPhone
        const targetElementName = event.target.name;
        let targetValue1: string = event.target.value;
        let saveValue1 = this.state.[targetElementName];
        let addChat = targetValue1.substring(targetValue1.length - 1, targetValue1.length);
        if (isNaN(Number(addChat)) && addChat !== ".") return;
        if (targetValue1.length === 2 && saveValue1 > targetValue1) targetValue1 = targetValue1.substring(0, 1);
        else if (targetValue1.length === 2 && saveValue1 < targetValue1) {
            const addChat = targetValue1.substring(1, 2);
            targetValue1 = targetValue1.substring(0, 1) + "." + addChat
        } else if (targetValue1.length > 4) return
        else if (targetValue1.length === 1 && targetValue1 > saveValue1) targetValue1 = targetValue1 + ".";
        this.setState({
            [event.target.name]: targetValue1,
            autoFocusId : targetElementName
        })
    };

    render() {
        const {classes, initExecuteValiable} = this.props;

        return (

            <div>
                {initExecuteValiable.isDevice ?
                    <div>

                    </div>
                    :

                    <div>
                        <div className="w3-container" style={{marginTop: "30px"}}>
                            <h3>고등학교</h3>
                            <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <th style={{verticalAlign: "middle", width: "66px"}}>학교명</th>
                                        <td style={{paddingTop: "0px"}}>
                                            <RadioGroup row aria-label="highSchoolisDomestic" name="highSchoolIsDomestic" id="highSchoolIsDomestic" defaultValue="D">
                                                <FormControlLabel value="D" control={<Radio color="primary" />} label="국내" labelPlacement="start" style={{paddingTop: "8px"}} />
                                                <FormControlLabel value="1" control={<Radio color="primary" />} label="국외" labelPlacement="start" style={{paddingTop: "8px"}} />
                                                <TextField id="high_school_name" name="high_school_name"  error={false} helperText="" label="학교명" disabled={true} style={{marginLeft: "20px",  }}
                                                           onClick={() =>  {this.setState({isHighSchoolModal : true})}}
                                                />
                                                <Button variant="contained" color="primary" size="small" name="high_school_search" id="high_school_search"
                                                        onClick={() =>  {this.setState({isHighSchoolModal : true})}}
                                                        style={{marginTop: "15px", marginLeft: "10px"}} >
                                                    검색
                                                </Button>
                                            </RadioGroup>
                                            <Modal
                                                open={this.state.isHighSchoolModal}
                                                onClose={() => {this.setState({isHighSchoolModal : false})}}
                                                aria-labelledby="simple-modal-title"
                                                aria-describedby="simple-modal-description"
                                            >
                                                <div style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)', paddingLeft: "0px", paddingRight: "0px"}} className={classes.addressModal}>
                                                    <div style={{borderBottom: "solid", borderBottomWidth: "thin"}}>
                                                        <Typography variant="h6" gutterBottom style={{paddingLeft: "20px", color: "#2e86de", fontWeight: "bold"}}>
                                                            고등학교명 검색
                                                        </Typography>
                                                    </div>
                                                    <div style={{paddingLeft: "20px", paddingRight: "20px"}}>
                                                        <header style={{marginTop: "20px"}}>

                                                        </header>
                                                        <main>
                                                            <div style={{margin: "15px" }}>
                                                                <div style={{ backgroundColor: "#f5f6fa"}}>
                                                                    <TextField style={{marginLeft: "20px",  marginBottom: "5px"}} id="address_select" label="고등학교검색" error={false} helperText="찾으시는 학교명이 없는 경우, 기타로 등록하세요" />
                                                                    <Button variant="contained" color="primary"   style={{marginTop: "15px", marginLeft: "10px"}} >
                                                                        검색
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </main>
                                                        <footer>

                                                        </footer>
                                                    </div>
                                                </div>

                                            </Modal>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th style={{verticalAlign: "middle"}}>계열</th>
                                        <td>
                                            <FormControl style={{marginTop: "8px", marginRight: "10px"}}>
                                                <Select
                                                    id="highSchoolType"
                                                    name="highSchoolType"
                                                    value={this.state.highSchoolType}
                                                    onChange={input => {this.setState({[input.target.name] : [input.target.value]})}}
                                                >
                                                    <MenuItem value={"0"}>선택</MenuItem>
                                                    <MenuItem value={"1"}>인문계</MenuItem>
                                                    <MenuItem value={"2"}>실업계</MenuItem>
                                                    <MenuItem value={"3"}>상업계</MenuItem>
                                                    <MenuItem value={"4"}>공업계</MenuItem>
                                                    <MenuItem value={"5"}>예체능</MenuItem>
                                                    <MenuItem value={"6"}>기타</MenuItem>

                                                </Select>

                                            </FormControl>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th style={{verticalAlign: "middle"}}>기간</th>
                                        <td>
                                            <TextField
                                                style={{paddingTop: "5px"}}
                                                id="highSchoolStartDate"
                                                name="highSchoolStartDate"
                                                type="date"
                                                helperText="입학일"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                            <span> _ </span>
                                            <TextField
                                                style={{paddingTop: "5px", paddingLeft: "5px"}}
                                                id="highSchoolEndDate"
                                                name="highSchoolEndDate"
                                                type="date"
                                                helperText="졸업일"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="w3-container" style={{marginTop: "30px"}}>
                            <h3>전문대학</h3>
                            <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                                <thead></thead>
                                <tbody>
                                <tr>
                                    <th style={{verticalAlign: "middle", width: "80px"}}>학교명</th>
                                    <td style={{paddingTop: "0px"}}>
                                        <RadioGroup row aria-label="CollegeIsDomestic" name="CollegeIsDomestic" id="CollegeIsDomestic" defaultValue="D">
                                            <FormControlLabel value="D" control={<Radio color="primary" />} label="국내" labelPlacement="start" style={{paddingTop: "8px"}} />
                                            <FormControlLabel value="1" control={<Radio color="primary" />} label="국외" labelPlacement="start" style={{paddingTop: "8px"}} />
                                            <TextField id="college_name" name="college_name"  error={false} helperText="" label="학교명" disabled={true} style={{marginLeft: "20px",  }}
                                                       onClick={() =>  {this.setState({isCollegeModal : true})}}
                                            />
                                            <Button variant="contained" color="primary" size="small" name="college_search" id="college_search"
                                                    onClick={() =>  {this.setState({isCollegeModal : true})}}
                                                    style={{marginTop: "15px", marginLeft: "10px"}} >
                                                검색
                                            </Button>
                                        </RadioGroup>
                                        <Modal
                                            open={this.state.isCollegeModal}
                                            onClose={() => {this.setState({isCollegeModal : false})}}
                                            aria-labelledby="simple-modal-title"
                                            aria-describedby="simple-modal-description"
                                        >
                                            <div style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)', paddingLeft: "0px", paddingRight: "0px"}} className={classes.addressModal}>
                                                <div style={{borderBottom: "solid", borderBottomWidth: "thin"}}>
                                                    <Typography variant="h6" gutterBottom style={{paddingLeft: "20px", color: "#2e86de", fontWeight: "bold"}}>
                                                        전문대학명 검색
                                                    </Typography>
                                                </div>
                                                <div style={{paddingLeft: "20px", paddingRight: "20px"}}>
                                                    <header style={{marginTop: "20px"}}>

                                                    </header>
                                                    <main>
                                                        <div style={{margin: "15px" }}>
                                                            <div style={{ backgroundColor: "#f5f6fa"}}>
                                                                <TextField style={{marginLeft: "20px",  marginBottom: "5px"}} name="college_select" id="college_select" label="전문대학검색" error={false} helperText="찾으시는 학교명이 없는 경우, 기타로 등록하세요" />
                                                                <Button variant="contained" color="primary"   style={{marginTop: "15px", marginLeft: "10px"}} >
                                                                    검색
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </main>
                                                    <footer>

                                                    </footer>
                                                </div>
                                            </div>

                                        </Modal>
                                    </td>
                                </tr>
                                    <tr>
                                        <th style={{verticalAlign: "middle"}}>졸업구분</th>
                                        <td>
                                            <FormControl style={{marginTop: "8px", marginRight: "10px"}}>
                                                <Select
                                                    id="collegeGraduatedType"
                                                    name="collegeGraduatedType"
                                                    value={this.state.collegeGraduatedType}
                                                    onChange={input => {this.setState({[input.target.name] : [input.target.value]})}}
                                                >
                                                    <MenuItem value={"0"}>선택</MenuItem>
                                                    <MenuItem value={"1"}>졸업</MenuItem>
                                                    <MenuItem value={"2"}>중퇴</MenuItem>
                                                    <MenuItem value={"3"}>수료</MenuItem>
                                                    <MenuItem value={"4"}>휴학중</MenuItem>
                                                    <MenuItem value={"5"}>재학중</MenuItem>
                                                    <MenuItem value={"6"}>졸업예정</MenuItem>

                                                </Select>

                                            </FormControl>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th style={{verticalAlign:"middle"}}>전공명</th>
                                        <td style={{paddingTop: "0px"}}>
                                            <TextField id="college_major" name="college_major"  error={false} helperText="" label="전공명" disabled={true} style={{marginLeft: "20px",  }}
                                                       onClick={() =>  {this.setState({iscollegeMajorModal : true})}}
                                            />
                                            <Button variant="contained" color="primary" size="small" name="college_major_search" id="college_major_search"
                                                    onClick={() =>  {this.setState({iscollegeMajorModal : true})}}
                                                    style={{marginTop: "15px", marginLeft: "10px"}} >
                                                검색
                                            </Button>
                                            <Modal
                                                open={this.state.iscollegeMajorModal}
                                                onClose={() => {this.setState({iscollegeMajorModal : false})}}
                                                aria-labelledby="simple-modal-title"
                                                aria-describedby="simple-modal-description"
                                            >
                                                <div style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)', paddingLeft: "0px", paddingRight: "0px"}} className={classes.addressModal}>
                                                    <div style={{borderBottom: "solid", borderBottomWidth: "thin"}}>
                                                        <Typography variant="h6" gutterBottom style={{paddingLeft: "20px", color: "#2e86de", fontWeight: "bold"}}>
                                                            전공명
                                                        </Typography>
                                                    </div>
                                                    <div style={{paddingLeft: "20px", paddingRight: "20px"}}>
                                                        <header style={{marginTop: "20px"}}>

                                                        </header>
                                                        <main>
                                                            <div style={{margin: "15px" }}>
                                                                <div style={{ backgroundColor: "#f5f6fa"}}>
                                                                    <TextField style={{marginLeft: "20px",  marginBottom: "5px"}} name="college_major" id="college_major" label="전공명" error={false} helperText="" />
                                                                    <Button variant="contained" color="primary"   style={{marginTop: "15px", marginLeft: "10px"}} >
                                                                        검색
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </main>
                                                        <footer>

                                                        </footer>
                                                    </div>
                                                </div>

                                            </Modal>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th style={{verticalAlign: "middle"}}>학점</th>
                                        <td>
                                            <TextField
                                                id = "collegePerfectScore"
                                                name="collegePerfectScore"
                                                value={this.state.collegePerfectScore}
                                                onChange={this.validationGrades}
                                                autoFocus={this.state.autoFocusId === "collegePerfectScore"}
                                                style={{ width: "40px"}}
                                            />
                                            <Typography variant="h6" gutterBottom style={{display: "inline",
                                                marginLeft: "2px", marginRight: "4px" }}>
                                                /
                                            </Typography>
                                            <TextField
                                                id = "collegeScore"
                                                name="collegeScore"
                                                value={this.state.collegeScore}
                                                onChange={this.validationGrades}

                                                autoFocus={this.state.autoFocusId === "collegeScore"}
                                                style={{width: "40px"}}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th style={{verticalAlign: "middle"}}>기간</th>
                                        <td>
                                            <TextField
                                                style={{paddingTop: "5px"}}
                                                id="collegeStartDate"
                                                name="collegeStartDate"
                                                type="date"
                                                helperText="입학일"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                            <span> _ </span>
                                            <TextField
                                                style={{paddingTop: "5px", paddingLeft: "5px"}}
                                                id="collegeEndDate"
                                                name="collegeEndDate"
                                                type="date"
                                                helperText="졸업일"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div style={{margin: "15px"}}>
                                <Typography variant="body2" gutterBottom>
                                    *학점의 만점이 10점을 초과하는 경우, 10점 만점 기준으로 환산하여 입력해 주시기 바랍니다.
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    *전문대학의 경우 최종학교를 기재해 주세요
                                </Typography>
                            </div>

                        </div>

                        <div className="w3-container" style={{marginTop: "30px"}}>
                            <h3>대학교</h3>
                            <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <th>학교명</th>
                                        <th>기간</th>
                                        <th>전공명</th>
                                        <th>학점</th>
                                        <th>비고</th>
                                    </tr>
                                    <tr>
                                        <td colSpan={5} style={{textAlign: "center", paddingTop: "12px"}}>

                                            <Typography variant="body2" gutterBottom>
                                                복수 등록이 가능합니다 아래 입력란을 이용하여 추가해주세요
                                            </Typography>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="w3-container" style={{margin: "8px"}}>
                                <h6>등록</h6>
                                <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                                    <thead></thead>
                                    <tbody>
                                        <tr>
                                            <th>학교명</th>
                                            <td colSpan={3}></td>
                                        </tr>
                                        <tr>
                                            <th>졸업구분</th>
                                            <td colSpan={3}></td>
                                        </tr>
                                        <tr>
                                            <th>전공명</th>
                                            <td colSpan={3}></td>
                                        </tr>
                                        <tr>
                                            <th>부전공명/복수전공</th>
                                            <td></td>
                                            <th>학점</th>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th>기간</th>
                                            <td colSpan={3}></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div style={{margin: "15px"}}>
                                    <Typography variant="body2" gutterBottom>
                                        *학점의 만점이 10점을 초과하는 경우, 10점 만점 기준으로 환산하여 입력해 주시기 바랍니다.
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        *대학 편입의 경우 입학학교와 졸업학교를 모두 기재해 주세요
                                    </Typography>
                                </div>

                            </div>
                        </div>

                        <div className="w3-container" style={{marginTop: "30px"}}>
                            <h3>대학원</h3>
                            <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <th>학위구분</th>
                                        <th>학교명</th>
                                        <th>기간</th>
                                        <th>전공명</th>
                                        <th>학점</th>
                                        <th>비고</th>
                                    </tr>
                                    <tr>
                                        <td colSpan={6} style={{textAlign: "center", paddingTop: "12px"}}>
                                            <Typography variant="body2" gutterBottom>
                                                복수 등록이 가능합니다 아래 입력란을 이용하여 추가해주세요
                                            </Typography>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="w3-container" style={{margin: "8px"}}>
                                <h6>등록</h6>
                                <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                                    <thead></thead>
                                    <tbody>
                                        <tr>
                                            <th>학위구분</th>
                                            <td colSpan={3}></td>
                                        </tr>
                                        <tr>
                                            <th>학교명</th>
                                            <td colSpan={3}></td>
                                        </tr>
                                        <tr>
                                            <th>졸업구분</th>
                                            <td colSpan={3}></td>
                                        </tr>
                                        <tr>
                                            <th>전공명</th>
                                            <td colSpan={3}></td>
                                        </tr>
                                        <tr>
                                            <th>세부전공명</th>
                                            <td></td>
                                            <th>학점</th>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th>기간</th>
                                            <td colSpan={3}></td>
                                        </tr>
                                        <tr>
                                            <th>논문명</th>
                                            <td></td>
                                            <th>지도교수</th>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th>논문요약</th>
                                            <td colSpan={3}></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div style={{margin: "15px"}}>
                                    <Typography variant="body2" gutterBottom>
                                        *학점의 만점이 10점을 초과하는 경우, 10점 만점 기준으로 환산하여 입력해 주시기 바랍니다.
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default withStyles(useStyles)(EducationHistory)