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
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

export interface BasicPersonalInformationState {
    ko_value : string
    localType : string
    localPhone : string
    presetPhoneNumber : string
    cellPhone : string
    autoFocusId : string
    isModalOpen: boolean
    isMilitary : string
    militaryType : string
    militaryTier : string
    veteransType : string
    veteransTarget : string
    veteransNum : string
    obstacleType : string
    obstacleTier : string
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
            height: 300,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[1],
            padding: theme.spacing(2, 4, 3),
        }
    });

export interface BasicPersonalInformationPageProps extends WithStyles<typeof useStyles>{
    initExecuteValiable: InitExecuteValiable
}

class BasicPersonalInformation extends React.Component<BasicPersonalInformationPageProps, BasicPersonalInformationState> {
    state = {
        ko_value : "",
        localType: '02',
        localPhone : "",
        presetPhoneNumber : "010",
        cellPhone : "",
        autoFocusId : "",
        isModalOpen : false,
        isMilitary : "0",
        militaryType : "0",
        militaryTier : "0",
        veteransType : "0",
        veteransTarget : "0",
        veteransNum : "",
        obstacleType : "0",
        obstacleTier : "0"

    }

    changePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
        //cellPhoneType, localPhone
        const targetElementName = event.target.name;
        let setLength:number = 3;
        if (targetElementName === "localPhone"){
            setLength= 3;
        } else if (targetElementName === "cellPhone") {
            setLength =4;
        }

        let targetValue1:string = event.target.value;
        let saveValue1 = this.state.[targetElementName];
        let addChat = targetValue1.substring(targetValue1.length-1, targetValue1.length);
        if (saveValue1.length < targetValue1.length) if (isNaN(Number(addChat))) return
        if (targetValue1.length === setLength && saveValue1.length < targetValue1.length) {
            targetValue1 = targetValue1 + "-";
        } else if (targetValue1.length === setLength+1 && saveValue1.length > targetValue1.length){
            targetValue1 = targetValue1.substring(0, setLength)
        } else if (targetValue1.length >= setLength+6){
            return;
        } else if (saveValue1.length === setLength && targetValue1.length === setLength+1) {
            targetValue1 = saveValue1 + "-" + addChat;
        }
        this.setState({
            [event.target.name]: targetValue1,
            autoFocusId : targetElementName
        })
    };





    static async getInitialProps({ req, res }: NextPageContext) {
        const initExecuteValiable = await initExecute(req);
        if(initExecuteValiable.redirectUrl !== ""){
            res?.writeHead(301, {
                Location: initExecuteValiable.redirectUrl
            });
            res?.end();
        }
        return {initExecuteValiable}
    }

    render() {
        const {classes, initExecuteValiable} = this.props;
        return (

            <div>
                {initExecuteValiable.isDevice ?
                    <div>

                    </div>
                    :
                    <div>
                        <div className="w3-container">
                            <h3>인적사항</h3>
                            <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <th rowSpan={3} style={{verticalAlign : "middle", width: "130px" }}>성명*</th>
                                        <td style={{paddingLeft : "15px"}}> <TextField id="kr_name" label="한글*" error={false} helperText="" /></td>
                                    </tr>
                                    <tr>
                                        <td style={{paddingLeft : "15px"}}><TextField id="en_name" label="영어*" error={false} helperText="" /></td>
                                    </tr>
                                    <tr>
                                        <td style={{paddingLeft : "15px"}}><TextField id="ch_name" label="한문" /></td>
                                    </tr>
                                    <tr>
                                        <th style={{verticalAlign: "middle"}}>성별*</th>
                                        <td style={{paddingLeft : "15px", marginTop: "10px", verticalAlign: "middle"}}>
                                            <RadioGroup row aria-label="gender" name="gender" id="gender" defaultValue="M">
                                                <FormControlLabel value="M" control={<Radio color="primary" />} label="남" labelPlacement="start" />
                                                <FormControlLabel value="F" control={<Radio color="primary" />} label="여" labelPlacement="start" />
                                            </RadioGroup>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th style={{verticalAlign: "middle"}} >생년월일*</th>
                                        <td style={{paddingLeft : "15px", marginTop: "10px", verticalAlign: "middle"}}>
                                            <RadioGroup row aria-label="birthType" name="birthType" id="birthType" defaultValue="S">
                                                <FormControlLabel value="S" control={<Radio color="primary" />} label="양력" labelPlacement="start" />
                                                <FormControlLabel value="L" control={<Radio color="primary" />} label="음력" labelPlacement="start" />
                                                <TextField
                                                    style={{paddingTop: "5px", paddingLeft: "5px"}}
                                                    id="birthDate"
                                                    name="birthDate"
                                                    type="date"
                                                    className={classes.textField}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                />
                                            </RadioGroup>

                                        </td>
                                    </tr>
                                    <tr>
                                        <th style={{verticalAlign: "middle"}}>자택번호*</th>
                                        <td style={{paddingLeft : "15px"}}>
                                            <FormControl style={{marginTop: "16px", marginRight: "10px"}}>
                                                <Select
                                                    id="localType"
                                                    name="localType"
                                                    value={this.state.localType}
                                                    onChange={input => {this.setState({[input.target.name] : [input.target.value]})}}
                                                >
                                                    <MenuItem value={"02"}>서울(02)</MenuItem>
                                                    <MenuItem value={"051"}>부산(051)</MenuItem>
                                                    <MenuItem value={"053"}>대구(053)</MenuItem>
                                                    <MenuItem value={"032"}>인천(032)</MenuItem>
                                                    <MenuItem value={"062"}>광주(062)</MenuItem>
                                                    <MenuItem value={"042"}>대전(042)</MenuItem>
                                                    <MenuItem value={"052"}>울산(052)</MenuItem>
                                                    <MenuItem value={"044"}>세종(044)</MenuItem>
                                                    <MenuItem value={"031"}>경기(031)</MenuItem>
                                                    <MenuItem value={"033"}>강원(033)</MenuItem>
                                                    <MenuItem value={"043"}>충북(043)</MenuItem>
                                                    <MenuItem value={"041"}>충남(041)</MenuItem>
                                                    <MenuItem value={"063"}>전북(063)</MenuItem>
                                                    <MenuItem value={"061"}>전남(061)</MenuItem>
                                                    <MenuItem value={"054"}>경북(054)</MenuItem>
                                                    <MenuItem value={"055"}>경남(055)</MenuItem>
                                                    <MenuItem value={"064"}>제주(064)</MenuItem>
                                                </Select>

                                            </FormControl>
                                            <TextField
                                                name="localPhone"
                                                value={this.state.localPhone}
                                                onChange={this.changePhone}

                                                autoFocus={this.state.autoFocusId === "localPhone"}
                                                style={{marginTop:"15px"}}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>휴대폰 번호</th>
                                        <td style={{paddingLeft : "15px"}}>
                                            <FormControl style={{marginTop: "16px", marginRight: "10px"}}>
                                                <Select
                                                    id="cellPhoneType"
                                                    name="cellPhoneType"
                                                    value={this.state.presetPhoneNumber}
                                                    onChange={input => {this.setState({[input.target.name] : [input.target.value]})}}
                                                >
                                                    <MenuItem value={"010"}>010</MenuItem>
                                                    <MenuItem value={"011"}>011</MenuItem>
                                                    <MenuItem value={"016"}>016</MenuItem>
                                                    <MenuItem value={"017"}>017</MenuItem>
                                                    <MenuItem value={"019"}>019</MenuItem>
                                                </Select>

                                            </FormControl>
                                            <TextField
                                                name="cellPhone"
                                                value={this.state.cellPhone}
                                                onChange={this.changePhone}
                                                id="cellPhone"
                                                autoFocus={this.state.autoFocusId === "cellPhone"}
                                                style={{marginTop:"15px"}}
                                            />

                                        </td>
                                    </tr>
                                    <tr>
                                        <th>이메일</th>
                                        <td style={{paddingLeft : "15px"}}><TextField id="email" name="email" error={false} helperText="" /></td>
                                    </tr>
                                    <tr>
                                        <th rowSpan={2} style={{verticalAlign : "middle"}}>주소*</th>
                                        <td style={{paddingLeft : "15px"}}>
                                            <TextField id="postnum" name="postnum" label="우편번호" disabled={true} error={false} helperText="" />
                                            <Button variant="contained" color="primary" size="small" style={{marginTop: "15px", marginLeft: "10px"}}
                                                    onClick={() =>  {this.setState({isModalOpen : true})}}
                                            >
                                                검색
                                            </Button>
                                            <Modal
                                                open={this.state.isModalOpen}
                                                onClose={() =>  {this.setState({isModalOpen : false})}}
                                                aria-labelledby="simple-modal-title"
                                                aria-describedby="simple-modal-description"
                                            >
                                                <div style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)', paddingLeft: "0px", paddingRight: "0px"}} className={classes.addressModal}>
                                                    <div style={{borderBottom: "solid", borderBottomWidth: "thin"}}>
                                                        <Typography variant="h6" gutterBottom style={{paddingLeft: "20px", color: "#2e86de", fontWeight: "bold"}}>
                                                            주소 찾기
                                                        </Typography>
                                                    </div>
                                                    <div style={{paddingLeft: "20px", paddingRight: "20px"}}>
                                                        <header style={{marginTop: "20px"}}>
                                                            <Typography variant="body1" gutterBottom style={{fontWeight: "bold"}}>
                                                                도로명주소, 건물명(아파트명), 지번주소(동,읍,면)을 입력하세요.
                                                            </Typography>
                                                            <Typography variant="body2" gutterBottom>
                                                                검색 입력 예: 금하로 816, 논현동, 입장면
                                                            </Typography>
                                                        </header>
                                                        <main>
                                                            <div style={{margin: "15px" }}>
                                                                <div style={{ backgroundColor: "#f5f6fa"}}>
                                                                    <TextField style={{marginLeft: "20px",  marginBottom: "5px"}} id="address_select" label="주소검색" error={false} helperText="도로명 주소가 검색되지 않는 경우 도로명주소안내시스템에서 확인하세요." />
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
                                        <td style={{paddingLeft : "15px"}}>
                                            <TextField id="road_name_address" name="road_name_address" label="도로명 주소" disabled={true} error={false} helperText="" />
                                            <TextField style={{marginLeft: "10px"}} id="detail_address" name="detail_address" label="상세 주소" disabled={true} error={false} helperText="" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="w3-container" style={{marginTop: "30px"}}>
                            <h3>병역사항</h3>
                            <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <th style={{verticalAlign : "middle" , width: "100px"}} >군필여부</th>
                                        <td style={{paddingLeft : "15px"}}>
                                            <FormControl style={{marginTop: "16px", marginRight: "10px"}}>
                                                <Select
                                                    id="isMilitary"
                                                    name="isMilitary"
                                                    value={this.state.isMilitary}
                                                    onChange={input => {this.setState({[input.target.name] : [input.target.value]})}}
                                                >
                                                    <MenuItem value={"0"}>선택</MenuItem>
                                                    <MenuItem value={"1"}>필</MenuItem>
                                                    <MenuItem value={"2"}>미필</MenuItem>
                                                    <MenuItem value={"3"}>특례</MenuItem>
                                                    <MenuItem value={"4"}>면제</MenuItem>
                                                    <MenuItem value={"5"}>의가사</MenuItem>
                                                    <MenuItem value={"6"}>복무중</MenuItem>
                                                    <MenuItem value={"7"}>비대상</MenuItem>
                                                </Select>

                                            </FormControl>
                                        </td>
                                        <th style={{verticalAlign : "middle"}}>군별코드</th>
                                        <td style={{paddingLeft : "15px"}}>
                                            <FormControl style={{marginTop: "16px", marginRight: "10px"}}>
                                                <Select
                                                    id="militaryType"
                                                    name="militaryType"
                                                    value={this.state.militaryType}
                                                    disabled={
                                                        this.state.isMilitary === "0"
                                                        || this.state.isMilitary === "2"
                                                        || this.state.isMilitary === "4"
                                                        || this.state.isMilitary === "7"
                                                    }
                                                    onChange={input => {this.setState({[input.target.name] : [input.target.value]})}}
                                                >
                                                    <MenuItem value={"0"}>선택</MenuItem>
                                                    <MenuItem value={"1"}>육군</MenuItem>
                                                    <MenuItem value={"2"}>해군</MenuItem>
                                                    <MenuItem value={"3"}>공군</MenuItem>
                                                    <MenuItem value={"4"}>해병</MenuItem>
                                                    <MenuItem value={"5"}>전경</MenuItem>
                                                    <MenuItem value={"6"}>방위</MenuItem>
                                                    <MenuItem value={"7"}>직할기관</MenuItem>
                                                    <MenuItem value={"8"}>공익</MenuItem>
                                                    <MenuItem value={"9"}>기타</MenuItem>
                                                    <MenuItem value={"A"}>의무경찰</MenuItem>
                                                </Select>

                                            </FormControl>
                                        </td>
                                        <th style={{verticalAlign : "middle"}}>계급</th>
                                        <td style={{paddingLeft : "15px"}}>
                                            <FormControl style={{marginTop: "16px", marginRight: "10px"}}>
                                                <Select
                                                    id="militaryTier"
                                                    name="militaryTier"
                                                    value={this.state.militaryTier}
                                                    disabled={
                                                        this.state.isMilitary === "0"
                                                        || this.state.isMilitary === "2"
                                                        || this.state.isMilitary === "4"
                                                        || this.state.isMilitary === "7"
                                                    }
                                                    onChange={input => {this.setState({[input.target.name] : [input.target.value]})}}
                                                >
                                                    <MenuItem value={"0"}>선택</MenuItem>
                                                    <MenuItem value={"1"}>훈병</MenuItem>
                                                    <MenuItem value={"2"}>이병</MenuItem>
                                                    <MenuItem value={"3"}>일병</MenuItem>
                                                    <MenuItem value={"4"}>상병</MenuItem>
                                                    <MenuItem value={"5"}>병장</MenuItem>
                                                    <MenuItem value={"6"}>하사</MenuItem>
                                                    <MenuItem value={"7"}>중사</MenuItem>
                                                    <MenuItem value={"8"}>상사</MenuItem>
                                                    <MenuItem value={"9"}>원사</MenuItem>
                                                    <MenuItem value={"10"}>준위</MenuItem>
                                                    <MenuItem value={"11"}>소위</MenuItem>
                                                    <MenuItem value={"12"}>중위</MenuItem>
                                                    <MenuItem value={"13"}>대위</MenuItem>
                                                    <MenuItem value={"14"}>소령</MenuItem>
                                                    <MenuItem value={"15"}>중령</MenuItem>
                                                    <MenuItem value={"16"}>대령</MenuItem>
                                                    <MenuItem value={"17"}>준장</MenuItem>
                                                    <MenuItem value={"18"}>소장</MenuItem>
                                                    <MenuItem value={"19"}>중장</MenuItem>
                                                    <MenuItem value={"20"}>대장</MenuItem>
                                                    <MenuItem value={"A1"}>이경</MenuItem>
                                                    <MenuItem value={"A2"}>일경</MenuItem>
                                                    <MenuItem value={"A3"}>상경</MenuItem>
                                                    <MenuItem value={"A4"}>수경</MenuItem>
                                                    <MenuItem value={"A5"}>경장</MenuItem>
                                                    <MenuItem value={"A6"}>경사</MenuItem>
                                                    <MenuItem value={"A7"}>경위</MenuItem>
                                                    <MenuItem value={"A8"}>경감</MenuItem>
                                                    <MenuItem value={"A9"}>경정</MenuItem>
                                                    <MenuItem value={"A10"}>총경</MenuItem>
                                                </Select>

                                            </FormControl>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th style={{verticalAlign : "middle"}}>복무기간</th>
                                        <td colSpan={5} style={{paddingLeft : "15px"}}>
                                            <TextField
                                                style={{paddingTop: "5px"}}
                                                id="militaryStartDate"
                                                name="militaryStartDate"
                                                type="date"
                                                helperText="복무시작일"
                                                disabled={
                                                    this.state.isMilitary === "0"
                                                    || this.state.isMilitary === "2"
                                                    || this.state.isMilitary === "4"
                                                    || this.state.isMilitary === "7"
                                                }
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                            <span> _ </span>
                                            <TextField
                                                style={{paddingTop: "5px", paddingLeft: "5px"}}
                                                id="militaryEndDate"
                                                name="militaryEndDate"
                                                type="date"
                                                helperText="복무종료일"
                                                disabled={
                                                    this.state.isMilitary === "0"
                                                    || this.state.isMilitary === "2"
                                                    || this.state.isMilitary === "4"
                                                    || this.state.isMilitary === "7"
                                                }
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th style={{verticalAlign : "middle"}}>총기간</th>
                                        <td colSpan={5} style={{paddingLeft : "15px"}}> <TextField id="militaryPeriod" disabled={true} value="00년 00개월" /> </td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>

                        <div className="w3-container" style={{marginTop: "30px"}}>
                            <h3>보훈사항</h3>
                            <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <th style={{verticalAlign : "middle", width: "100px"}}>보훈유형</th>
                                        <td style={{paddingLeft : "15px"}}>
                                            <FormControl style={{marginTop: "16px", marginRight: "10px"}}>
                                                <Select
                                                    id="veteransType"
                                                    name="veteransType"
                                                    value={this.state.veteransType}
                                                    onChange={input => {this.setState({[input.target.name] : [input.target.value]})}}
                                                >
                                                    <MenuItem value={"0"}>비대상</MenuItem>
                                                    <MenuItem value={"1"}>순국선열</MenuItem>
                                                    <MenuItem value={"2"}>애국지사</MenuItem>
                                                    <MenuItem value={"3"}>전몰군경</MenuItem>
                                                    <MenuItem value={"4"}>전산군경</MenuItem>
                                                    <MenuItem value={"5"}>순직군경</MenuItem>
                                                    <MenuItem value={"6"}>공상군경</MenuItem>
                                                    <MenuItem value={"7"}>무공수훈자</MenuItem>
                                                    <MenuItem value={"8"}>보국수훈자</MenuItem>
                                                    <MenuItem value={"9"}>6·25 참전 재일학도 의용군인</MenuItem>
                                                    <MenuItem value={"10"}>4·19 혁명 사망자</MenuItem>
                                                    <MenuItem value={"11"}>4·19 혁명 부상자</MenuItem>
                                                    <MenuItem value={"12"}>4·19 혁명 공로자</MenuItem>
                                                    <MenuItem value={"13"}>순직공무원</MenuItem>
                                                    <MenuItem value={"14"}>공상공무원</MenuItem>
                                                    <MenuItem value={"15"}>국가사회발전 특별공로 순직/상이/공로자</MenuItem>
                                                </Select>

                                            </FormControl>
                                        </td>
                                        <th style={{verticalAlign : "middle"}}>보훈대상자와의관계</th>
                                        <td style={{paddingLeft : "15px"}}>
                                            <FormControl style={{marginTop: "16px", marginRight: "10px"}}>
                                                <Select
                                                    id="veteransTarget"
                                                    name="veteransTarget"
                                                    value={this.state.veteransTarget}
                                                    disabled={this.state.veteransType === "0"}
                                                    onChange={input => {this.setState({[input.target.name] : [input.target.value]})}}
                                                >
                                                    <MenuItem value={"0"}>선택</MenuItem>
                                                    <MenuItem value={"1"}>본인</MenuItem>
                                                    <MenuItem value={"2"}>조부</MenuItem>
                                                    <MenuItem value={"3"}>조모</MenuItem>
                                                    <MenuItem value={"4"}>부</MenuItem>
                                                    <MenuItem value={"5"}>모</MenuItem>
                                                    <MenuItem value={"6"}>배우자</MenuItem>
                                                    <MenuItem value={"7"}>아들</MenuItem>
                                                    <MenuItem value={"8"}>딸</MenuItem>
                                                    <MenuItem value={"9"}>형제(배우자)</MenuItem>
                                                    <MenuItem value={"10"}>외조부</MenuItem>
                                                    <MenuItem value={"11"}>외조모</MenuItem>
                                                    <MenuItem value={"12"}>시부</MenuItem>
                                                    <MenuItem value={"13"}>시모</MenuItem>
                                                    <MenuItem value={"14"}>빙부(장인)</MenuItem>
                                                    <MenuItem value={"15"}>빙모(장모)</MenuItem>
                                                </Select>

                                            </FormControl>
                                        </td>
                                        <th style={{verticalAlign : "middle"}}>보훈등록번호</th>
                                        <td style={{paddingLeft : "15px"}}>
                                            <TextField id="veteransNum" disabled={this.state.veteransType === "0"} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="w3-container" style={{marginTop: "30px"}}>
                            <h3>장애사항</h3>
                            <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <th style={{verticalAlign : "middle" , width: "100px"}}>장애유형</th>
                                        <td style={{paddingLeft : "15px"}}>
                                            <FormControl style={{marginTop: "16px", marginRight: "10px"}}>
                                                <Select
                                                    id="obstacleType"
                                                    name="obstacleType"
                                                    value={this.state.obstacleType}
                                                    onChange={input => {this.setState({[input.target.name] : [input.target.value]})}}
                                                >
                                                    <MenuItem value={"0"}>비대상</MenuItem>
                                                    <MenuItem value={"1"}>지체장애</MenuItem>
                                                    <MenuItem value={"2"}>청각언어장애</MenuItem>
                                                    <MenuItem value={"3"}>시각장애</MenuItem>
                                                    <MenuItem value={"4"}>정신장애</MenuItem>
                                                    <MenuItem value={"5"}>기타</MenuItem>
                                                    <MenuItem value={"6"}>뇌병변장애</MenuItem>
                                                    <MenuItem value={"7"}>언어장애</MenuItem>
                                                    <MenuItem value={"8"}>안면장애</MenuItem>
                                                    <MenuItem value={"9"}>신장장애</MenuItem>
                                                    <MenuItem value={"10"}>심장장애</MenuItem>
                                                    <MenuItem value={"11"}>간장애</MenuItem>
                                                    <MenuItem value={"12"}>호흡기장애</MenuItem>
                                                    <MenuItem value={"13"}>장루·요루장애</MenuItem>
                                                    <MenuItem value={"14"}>간질장애</MenuItem>
                                                    <MenuItem value={"15"}>지적장애</MenuItem>
                                                    <MenuItem value={"16"}>자폐성장애</MenuItem>
                                                </Select>

                                            </FormControl>
                                        </td>
                                        <th style={{verticalAlign : "middle"}}>장애등급</th>
                                        <td style={{paddingLeft : "15px"}}>
                                            <FormControl style={{marginTop: "16px", marginRight: "10px"}}>
                                                <Select
                                                    id="obstacleTier"
                                                    name="obstacleTier"
                                                    value={this.state.obstacleTier}
                                                    disabled={this.state.obstacleType === "0"}
                                                    onChange={input => {this.setState({[input.target.name] : [input.target.value]})}}
                                                >
                                                    <MenuItem value={"0"}>선택</MenuItem>
                                                    <MenuItem value={"1"}>1급</MenuItem>
                                                    <MenuItem value={"2"}>2급</MenuItem>
                                                    <MenuItem value={"3"}>3급</MenuItem>
                                                    <MenuItem value={"4"}>4급</MenuItem>
                                                    <MenuItem value={"5"}>5급</MenuItem>
                                                    <MenuItem value={"6"}>6급</MenuItem>
                                                    <MenuItem value={"7"}>7급</MenuItem>
                                                </Select>

                                            </FormControl>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th style={{verticalAlign : "middle"}} >인정일</th>
                                        <td colSpan={3} style={{paddingLeft : "15px"}}>
                                            <TextField
                                                style={{paddingTop: "5px", paddingLeft: "5px"}}
                                                id="obstacleApproveDay"
                                                name="obstacleApproveDay"
                                                type="date"
                                                disabled={this.state.obstacleType === "0"}
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
                    </div>
                }
            </div>
        )
    }
}

export default withStyles(useStyles)(BasicPersonalInformation)