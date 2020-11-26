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

export interface WrtieState {
    value : number
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
    });

export interface IndexPageProps extends WithStyles<typeof useStyles>{
    initExecuteValiable: InitExecuteValiable
}

class Index extends React.Component<IndexPageProps, {}> {
    state:WrtieState = {
        value: 4,
    }

    setValue(input:number){
        this.setState({
            value : input
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

        const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
            console.log(event)
            this.setValue(newValue);
        };
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
                                                <Tabs value={this.state.value} onChange={handleChange} aria-label="simple tabs example">
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
                                                            <td style={{paddingLeft : "15px"}}>한글*</td>
                                                            <td rowSpan={3} style={{width: "120px", height: "150px"}}>
                                                                <div style={{marginTop: "50px", marginLeft: "30px"}}><button>사진업로드</button></div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{paddingLeft : "15px"}}>영어*</td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{paddingLeft : "15px"}}>한문</td>
                                                        </tr>
                                                        <tr>
                                                            <th>성별*</th>
                                                            <td colSpan={2} style={{paddingLeft : "15px"}}></td>
                                                        </tr>
                                                        <tr>
                                                            <th>생년월일*</th>
                                                            <td colSpan={2} style={{paddingLeft : "15px"}}></td>
                                                        </tr>
                                                        <tr>
                                                            <th>자택번호*</th>
                                                            <td colSpan={2} style={{paddingLeft : "15px"}}></td>
                                                        </tr>
                                                        <tr>
                                                            <th>휴대폰 번호</th>
                                                            <td colSpan={2} style={{paddingLeft : "15px"}}></td>
                                                        </tr>
                                                        <tr>
                                                            <th>이메일</th>
                                                            <td colSpan={2} style={{paddingLeft : "15px"}}></td>
                                                        </tr>
                                                        <tr>
                                                            <th rowSpan={2} style={{verticalAlign : "middle"}}>주소*</th>
                                                            <td colSpan={2} style={{paddingLeft : "15px"}}></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} style={{paddingLeft : "15px"}}></td>
                                                        </tr>
                                                    </table>
                                                </div>

                                                <div className="w3-container" style={{marginTop: "30px"}}>
                                                    <h3>병역사항</h3>
                                                    <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                                                        <tr>
                                                            <th>군필여부</th>
                                                            <td style={{paddingLeft : "15px"}}></td>
                                                            <th>군별코드</th>
                                                            <td style={{paddingLeft : "15px"}}></td>
                                                            <th>계급</th>
                                                            <td style={{paddingLeft : "15px"}}></td>
                                                        </tr>
                                                        <tr>
                                                            <th>복무기간</th>
                                                            <td colSpan={5} style={{paddingLeft : "15px"}}></td>
                                                        </tr>
                                                        <tr>
                                                            <th>총기간</th>
                                                            <td colSpan={5} style={{paddingLeft : "15px"}}></td>
                                                        </tr>
                                                    </table>
                                                </div>

                                                <div className="w3-container" style={{marginTop: "30px"}}>
                                                    <h3>병역사항</h3>
                                                    <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                                                        <tr>
                                                            <th>보훈유형</th>
                                                            <td style={{paddingLeft : "15px"}}></td>
                                                            <th>보훈대상자와의관계</th>
                                                            <td style={{paddingLeft : "15px"}}></td>
                                                            <th>보훈등록번호</th>
                                                            <td style={{paddingLeft : "15px"}}></td>
                                                        </tr>
                                                    </table>
                                                </div>

                                                <div className="w3-container" style={{marginTop: "30px"}}>
                                                    <h3>장애사항</h3>
                                                    <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                                                        <tr>
                                                            <th>장애유형</th>
                                                            <td style={{paddingLeft : "15px"}}></td>
                                                            <th>장애등급</th>
                                                            <td style={{paddingLeft : "15px"}}></td>
                                                        </tr>
                                                        <tr>
                                                            <th>인정일</th>
                                                            <td colSpan={3} style={{paddingLeft : "15px"}}></td>
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