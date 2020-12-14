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
import BasicPersonalInformation from "../../components/career/BasicPersonalInformation";
import EducationHistory from "../../components/career/EducationHistory";
import LanguageAndCertificatePc from "../../components/career/LanguageAndCertificatePc";


export interface WrtieState {
    value: number
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
        value: 0,
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

        const changeValue = (event: React.ChangeEvent<{}>, newValue: number) => {
            console.log(event)
            this.setState({
                value : newValue
            })
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
                            <div>{children}</div>
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
                                                <BasicPersonalInformation initExecuteValiable={initExecuteValiable}/>
                                            </TabPanel>
                                            <TabPanel value={this.state.value} index={1}>
                                                <EducationHistory initExecuteValiable={initExecuteValiable}/>
                                            </TabPanel>
                                            <TabPanel value={this.state.value} index={2}>
                                                <LanguageAndCertificatePc />
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