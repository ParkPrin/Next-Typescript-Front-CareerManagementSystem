import PageLayout  from '../../layouts/PageLayout'
import React  from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import {createStyles, withStyles, WithStyles} from "@material-ui/core/styles";
import {Theme} from "@material-ui/core/styles/createMuiTheme";
import initExecute from "../../utils/InitExecuteMethod";
import {InitExecuteValiable} from "../../interfaces/initExecuteValiable";
import {NextPageContext} from "next";
import Container from "@material-ui/core/Container";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';


export interface WrtieState {
    ko_value : string
    value : number
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

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

const useStyles = (theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            '& > *': {
                margin: theme.spacing(3),
                width: theme.spacing(20),
                height: theme.spacing(20),
            },
        },
        cardRoot: {
            maxWidth: 310,
        },
        IndexRoot: {
            ...theme.typography.button,
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(1),
        },
        gridRoot: {
            flexGrow: 1,
        },
        gridPaper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },

        tabsRoot: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
        },
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

export interface IndexPageProps extends WithStyles<typeof useStyles>{
    initExecuteValiable: InitExecuteValiable
}

class Index extends React.Component<IndexPageProps, WrtieState> {
    state = {
        ko_value : "",
        value: 0,
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



    changeLocalPhone = (event: React.ChangeEvent<HTMLInputElement>) => {
        let targetValue1 = event.target.value;
        let saveValue1 = this.state.localPhone;
        let addChat = targetValue1.substring(targetValue1.length-1, targetValue1.length);
        if (saveValue1.length < targetValue1.length) if (isNaN(addChat)) return
        if (targetValue1.length === 3 && saveValue1.length < targetValue1.length) {
            targetValue1 = targetValue1 + "-";
        } else if (targetValue1.length === 4 && saveValue1.length > targetValue1.length){
            targetValue1 = targetValue1.substring(0, 3)
        } else if (targetValue1.length >= 9){
            return;
        } else if (saveValue1.length === 3 && targetValue1.length === 4) {
            targetValue1 = saveValue1 + "-" + addChat;
        }
        this.setState({
            localPhone: targetValue1,
            autoFocusId : "localPhone"
        })
    };

    changeCellPhone = (event: React.ChangeEvent<HTMLInputElement>) => {
        let targetValue = event.target.value;
        let saveValue = this.state.cellPhone;
        let addChat = targetValue.substring(targetValue.length-1, targetValue.length);
        if (saveValue.length < targetValue.length) if (isNaN(addChat)) return
        if (targetValue.length ===4 && saveValue.length < targetValue.length) {
            targetValue = targetValue + "-";
        } else if (targetValue.length === 5 && saveValue.length > targetValue.length){
            targetValue = targetValue.substring(0, 4)
        } else if (targetValue.length >= 10){
            return;
        } else if (saveValue.length === 4 && targetValue.length === 5) {
            targetValue = saveValue + "-" + addChat;
        }
        this.setState({
            cellPhone : targetValue,
            autoFocusId : "cellPhone"
        })
    }



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

        const modalOpen = () => {
            this.setState({
                isModalOpen : true
            })
        }

        const modalClose = () => {
            this.setState({
                isModalOpen : false
            })
        }

        const changeValue = (event: React.ChangeEvent<{}>, newValue: number) => {
            console.log(event.target);
            this.setState({
                value : newValue
            })
        };


        const changeSelectValue = (event: React.ChangeEvent<{ value: unknown }>) => {
            this.setState({
                [event.target.name] : event.target.value as string
            })
        };


        /*
        isMilitary : "0",
        militaryType : "0",
        militaryTier : "0",
         */

        const TabPanel = (props: TabPanelProps) => {
            const { children, value, index, ...other } = props;

            return (
                <div
                    role="tabpanel"
                    hidden={value !== index}
                    id={`simple-tabpanel-${index}`}
                    aria-labelledby={`simple-tab-${index}`}
                    {...other}
                >
                    {value === index && (
                        <Box p={3}>
                            <Typography>{children}</Typography>
                        </Box>
                    )}
                </div>
            );
        }

        function a11yProps (index: any) {
            return {
                id: `simple-tab-${index}`,
                'aria-controls': `simple-tabpanel-${index}`,
            };
        }

        return (

            <PageLayout title={initExecuteValiable.title} initExecuteValiable={initExecuteValiable}>
                <div>
                    <header style={{marginTop:"10%"}}>

                    </header>
                    <div className={this.props.classes.IndexRoot}>
                        <main>
                            {initExecuteValiable.isDevice ?
                                <div>

                                </div>
                                :
                                <div>
                                    <Container style={{border:"1px solid #ecf0f1", borderWidth:"1px", borderRadius:"25px"}} >
                                        <div className={classes.tabsRoot}>
                                            <AppBar position="static">
                                                <Tabs value={this.state.value} onChange={changeValue} aria-label="simple tabs example">
                                                    <Tab label="기본인적사항" {...a11yProps(0)} />
                                                    <Tab label="학력사항" {...a11yProps(1)} />
                                                    <Tab label="어학/자격/활동내역" {...a11yProps(2)} />
                                                    <Tab label="경력사항" {...a11yProps(3)} />
                                                    <Tab label="자기소개서" {...a11yProps(4)} />
                                                </Tabs>
                                            </AppBar>
                                            <TabPanel value={this.state.value} index={0}>

                                                <div className="w3-container">
                                                    <h3>인적사항</h3>
                                                    <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
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
                                                                        defaultValue="YYYY-MM-dd"
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
                                                                        onChange={changeSelectValue}
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
                                                                    onChange={this.changeLocalPhone}

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
                                                                        id="localType"
                                                                        name="localType"
                                                                        value={this.state.presetPhoneNumber}
                                                                        onChange={changeSelectValue}
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
                                                                    onChange={this.changeCellPhone}
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
                                                                <Button variant="contained" color="primary" size="small" onClick={modalOpen} style={{marginTop: "15px", marginLeft: "10px"}} >
                                                                    검색
                                                                </Button>
                                                                <Modal
                                                                    open={this.state.isModalOpen}
                                                                    onClose={modalClose}
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
                                                    </table>
                                                </div>

                                                <div className="w3-container" style={{marginTop: "30px"}}>
                                                    <h3>병역사항</h3>
                                                    <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                                                        <tr>
                                                            <th style={{verticalAlign : "middle"}} >군필여부</th>
                                                            <td style={{paddingLeft : "15px"}}>
                                                                <FormControl style={{marginTop: "16px", marginRight: "10px"}}>
                                                                    <Select
                                                                        id="isMilitary"
                                                                        name="isMilitary"
                                                                        value={this.state.isMilitary}
                                                                        onChange={changeSelectValue}
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
                                                                        onChange={changeSelectValue}
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
                                                                        onChange={changeSelectValue}
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
                                                                    defaultValue="YYYY-MM-dd"
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
                                                                    defaultValue="YYYY-MM-dd"
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
                                                    </table>
                                                </div>

                                                <div className="w3-container" style={{marginTop: "30px"}}>
                                                    <h3>보훈사항</h3>
                                                    <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                                                        <tr>
                                                            <th style={{verticalAlign : "middle"}}>보훈유형</th>
                                                            <td style={{paddingLeft : "15px"}}>
                                                                <FormControl style={{marginTop: "16px", marginRight: "10px"}}>
                                                                    <Select
                                                                        id="veteransType"
                                                                        name="veteransType"
                                                                        value={this.state.veteransType}
                                                                        onChange={changeSelectValue}
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
                                                                        onChange={changeSelectValue}
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
                                                    </table>
                                                </div>

                                                <div className="w3-container" style={{marginTop: "30px"}}>
                                                    <h3>장애사항</h3>
                                                    <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                                                        <tr>
                                                            <th style={{verticalAlign : "middle"}}>장애유형</th>
                                                            <td style={{paddingLeft : "15px"}}>
                                                                <FormControl style={{marginTop: "16px", marginRight: "10px"}}>
                                                                    <Select
                                                                        id="obstacleType"
                                                                        name="obstacleType"
                                                                        value={this.state.obstacleType}
                                                                        onChange={changeSelectValue}
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
                                                                        onChange={changeSelectValue}
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
                                                                    defaultValue="YYYY-MM-dd"
                                                                    disabled={this.state.obstacleType === "0"}
                                                                    className={classes.textField}
                                                                    InputLabelProps={{
                                                                        shrink: true,
                                                                    }}
                                                                />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>

                                            </TabPanel>
                                            <TabPanel value={this.state.value} index={1}>
                                                <div className="w3-container" style={{marginTop: "30px"}}>
                                                    <h3>고등학교</h3>
                                                    <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                                                        <tr>
                                                            <th>학교명</th>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <th>계열</th>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <th>기간</th>
                                                            <td></td>
                                                        </tr>
                                                    </table>
                                                </div>

                                                <div className="w3-container" style={{marginTop: "30px"}}>
                                                    <h3>전문대학</h3>
                                                    <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                                                        <tr>
                                                            <th>학교명</th>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <th>졸업구분</th>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <th>전공명</th>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <th>학점</th>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <th>기간</th>
                                                            <td></td>
                                                        </tr>
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
                                                    </table>

                                                    <div className="w3-container" style={{margin: "8px"}}>
                                                        <h6>등록</h6>
                                                        <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
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
                                                    </table>

                                                    <div className="w3-container" style={{margin: "8px"}}>
                                                        <h6>등록</h6>
                                                        <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
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
                                                        </table>
                                                        <div style={{margin: "15px"}}>
                                                            <Typography variant="body2" gutterBottom>
                                                                *학점의 만점이 10점을 초과하는 경우, 10점 만점 기준으로 환산하여 입력해 주시기 바랍니다.
                                                            </Typography>
                                                        </div>

                                                    </div>
                                                </div>
                                            </TabPanel>
                                            <TabPanel value={this.state.value} index={2}>
                                                <div className="w3-container" style={{marginTop: "30px"}}>
                                                    <h3>어학</h3>
                                                    <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                                                        <tr>
                                                            <th>외국어종류</th>
                                                            <th>시험종류</th>
                                                            <th>시험점수</th>
                                                            <th>시험등급</th>
                                                            <th>취득일자</th>
                                                            <th>비고</th>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={5} style={{textAlign: "center", paddingTop: "12px"}}>

                                                                <Typography variant="body2" gutterBottom>
                                                                    복수 등록이 가능합니다 아래 입력란을 이용하여 추가해주세요
                                                                </Typography>
                                                            </td>
                                                        </tr>
                                                    </table>

                                                    <div className="w3-container" style={{margin: "8px"}}>
                                                        <h6>등록</h6>
                                                        <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                                                            <tr>
                                                                <th>외국어종류</th>
                                                                <td></td>
                                                                <th>시험종류</th>
                                                                <td></td>
                                                            </tr>
                                                            <tr>
                                                                <th>시험점수</th>
                                                                <td></td>
                                                                <th>시험등급</th>
                                                                <td></td>
                                                            </tr>
                                                            <tr>
                                                                <th>취득일자</th>
                                                                <td colSpan={3}></td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className="w3-container" style={{marginTop: "30px"}}>
                                                    <h3>자격사항</h3>
                                                    <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                                                        <tr>
                                                            <th>자격증종류</th>
                                                            <th>등급</th>
                                                            <th>면허번호</th>
                                                            <th>인증기관</th>
                                                            <th>취득일자</th>
                                                            <th>비고</th>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={6} style={{textAlign: "center", paddingTop: "12px"}}>
                                                                <Typography variant="body2" gutterBottom>
                                                                    복수 등록이 가능합니다 아래 입력란을 이용하여 추가해주세요
                                                                </Typography>
                                                            </td>
                                                        </tr>
                                                    </table>

                                                    <div className="w3-container" style={{margin: "8px"}}>
                                                        <h6>등록</h6>
                                                        <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                                                            <tr>
                                                                <th>자격증종류</th>
                                                                <td></td>
                                                                <th>등급</th>
                                                                <td></td>
                                                            </tr>
                                                            <tr>
                                                                <th>면허번호</th>
                                                                <td></td>
                                                                <th>인증기관</th>
                                                                <td></td>
                                                            </tr>
                                                            <tr>
                                                                <th>취득일자</th>
                                                                <td colSpan={3}></td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>

                                                <div className="w3-container" style={{marginTop: "30px"}}>
                                                    <h3>수상경력</h3>
                                                    <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                                                        <tr>
                                                            <th>명칭</th>
                                                            <th>기관(단체)명</th>
                                                            <th>일자</th>
                                                            <th>내용</th>
                                                            <th>비고</th>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={5} style={{textAlign: "center", paddingTop: "12px"}}>
                                                                <Typography variant="body2" gutterBottom>
                                                                    복수 등록이 가능합니다 아래 입력란을 이용하여 추가해주세요
                                                                </Typography>
                                                            </td>
                                                        </tr>
                                                    </table>

                                                    <div className="w3-container" style={{margin: "8px"}}>
                                                        <h6>등록</h6>
                                                        <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                                                            <tr>
                                                                <th>명칭</th>
                                                                <td></td>
                                                                <th>기관(단체)명</th>
                                                                <td></td>
                                                            </tr>
                                                            <tr>
                                                                <th>내용</th>
                                                                <td colSpan={3}></td>
                                                            </tr>
                                                            <tr>
                                                                <th>일자</th>
                                                                <td colSpan={3}></td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>

                                                <div className="w3-container" style={{marginTop: "30px"}}>
                                                    <h3>활동내역</h3>
                                                    <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                                                        <tr>
                                                            <th>활동명</th>
                                                            <th>기관(단체)명</th>
                                                            <th>기간</th>
                                                            <th>내용</th>
                                                            <th>비고</th>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={5} style={{textAlign: "center", paddingTop: "12px"}}>
                                                                <Typography variant="body2" gutterBottom>
                                                                    복수 등록이 가능합니다 아래 입력란을 이용하여 추가해주세요
                                                                </Typography>
                                                            </td>
                                                        </tr>
                                                    </table>

                                                    <div className="w3-container" style={{margin: "8px"}}>
                                                        <h6>등록</h6>
                                                        <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                                                            <tr>
                                                                <th>활동명</th>
                                                                <td></td>
                                                                <th>기관(단체)명</th>
                                                                <td></td>
                                                            </tr>
                                                            <tr>
                                                                <th>기간</th>
                                                                <td colSpan={3}></td>
                                                            </tr>
                                                            <tr>
                                                                <th>내용</th>
                                                                <td colSpan={3}></td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                            <TabPanel value={this.state.value} index={3}>
                                                <div className="w3-container" style={{marginTop: "30px"}}>
                                                    <h3>경력</h3>
                                                    <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                                                        <tr>
                                                            <th>회사명</th>
                                                            <th>담당업무</th>
                                                            <th>근무기간</th>
                                                            <th>최종직위</th>
                                                            <th>부서명</th>
                                                            <th>퇴직사유</th>
                                                            <th>비고</th>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={7} style={{textAlign: "center", paddingTop: "12px"}}>
                                                                <Typography variant="body2" gutterBottom>
                                                                    복수 등록이 가능합니다 아래 입력란을 이용하여 추가해주세요
                                                                </Typography>
                                                            </td>
                                                        </tr>
                                                    </table>

                                                    <div className="w3-container" style={{margin: "8px"}}>
                                                        <h6>등록</h6>
                                                        <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                                                            <tr>
                                                                <th>회사명</th>
                                                                <td></td>
                                                                <th>부서명</th>
                                                                <td></td>
                                                            </tr>
                                                            <tr>
                                                                <th>근무기간</th>
                                                                <td colSpan={3}></td>
                                                            </tr>
                                                            <tr>
                                                                <th>최종직위</th>
                                                                <td colSpan={3}></td>
                                                            </tr>
                                                            <tr>
                                                                <th>담당업무</th>
                                                                <td></td>
                                                                <th>퇴직사유</th>
                                                                <td></td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div style={{margin: "15px", marginTop: "50px"}}>
                                                        <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                                                            <tr>
                                                                <th>프로젝트명</th>
                                                                <th>시작일</th>
                                                                <th>종료일</th>
                                                                <th>비고</th>
                                                            </tr>
                                                            <tr>
                                                                <td colSpan={4} style={{textAlign: "center", paddingTop: "12px"}}>
                                                                    <Typography variant="body2" gutterBottom>
                                                                        복수 등록이 가능합니다 아래 입력란을 이용하여 추가해주세요
                                                                    </Typography>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <div className="w3-container" style={{margin: "8px"}}>
                                                            <h6>프로젝트 추가</h6>
                                                            <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                                                                <tr>
                                                                    <th>프로젝트 명</th>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <th>기간</th>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <th>수상내역</th>
                                                                    <td></td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>

                                            </TabPanel>
                                            <TabPanel value={this.state.value} index={4}>
                                                <div className="w3-container" style={{marginTop: "30px"}}>
                                                    <h4>이력서 요약 키워드</h4>

                                                </div>

                                                <div className="w3-container" style={{marginTop: "30px"}}>
                                                    <h4>자기소개</h4>

                                                </div>

                                                <div className="w3-container" style={{marginTop: "30px"}}>
                                                    <h4>본익의 직무 전문성 및 역량을 보여줄 수 있는 대표적인 프로젝트를 골라 본인의 역할과 기여 중심으로 서술해주세요.</h4>

                                                </div>

                                                <div className="w3-container" style={{marginTop: "30px"}}>
                                                    <h4>희망직위, 연봉수준</h4>

                                                </div>

                                                <div className="w3-container" style={{marginTop: "30px"}}>
                                                    <h4>성장과정</h4>

                                                </div>

                                            </TabPanel>
                                        </div>
                                    </Container>
                                </div>
                            }

                        </main>
                    </div>
                </div>
                <CssBaseline />
            </PageLayout>
        )
    }
}

export default withStyles(useStyles)(Index)