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
        value: 0,
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
                                                            <th rowSpan={3} style={{verticalAlign : "middle", width: "200px" }}>성명*</th>
                                                            <td style={{paddingLeft : "15px"}}>한글*</td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{paddingLeft : "15px"}}>영어*</td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{paddingLeft : "15px"}}>한문</td>
                                                        </tr>
                                                        <tr>
                                                            <th>성별*</th>
                                                            <td style={{paddingLeft : "15px"}}></td>
                                                        </tr>
                                                        <tr>
                                                            <th>생년월일*</th>
                                                            <td style={{paddingLeft : "15px"}}></td>
                                                        </tr>
                                                        <tr>
                                                            <th>자택번호*</th>
                                                            <td style={{paddingLeft : "15px"}}></td>
                                                        </tr>
                                                        <tr>
                                                            <th>휴대폰 번호</th>
                                                            <td style={{paddingLeft : "15px"}}></td>
                                                        </tr>
                                                        <tr>
                                                            <th>이메일</th>
                                                            <td style={{paddingLeft : "15px"}}></td>
                                                        </tr>
                                                        <tr>
                                                            <th rowSpan={2} style={{verticalAlign : "middle"}}>주소*</th>
                                                            <td style={{paddingLeft : "15px"}}></td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{paddingLeft : "15px"}}></td>
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
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <th>복무기간</th>
                                                            <td colSpan={3}></td>
                                                        </tr>
                                                        <tr>
                                                            <th>총기간</th>
                                                            <td colSpan={3}></td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </TabPanel>
                                            <TabPanel value={this.state.value} index={2}>
                                                Item Three
                                            </TabPanel>
                                        </div>
                                    </Container>
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
                                                            <th rowSpan={3} style={{verticalAlign : "middle", width: "200px" }}>성명*</th>
                                                            <td style={{paddingLeft : "15px"}}>한글*</td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{paddingLeft : "15px"}}>영어*</td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{paddingLeft : "15px"}}>한문</td>
                                                        </tr>
                                                        <tr>
                                                            <th>성별*</th>
                                                            <td style={{paddingLeft : "15px"}}></td>
                                                        </tr>
                                                        <tr>
                                                            <th>생년월일*</th>
                                                            <td style={{paddingLeft : "15px"}}></td>
                                                        </tr>
                                                        <tr>
                                                            <th>자택번호*</th>
                                                            <td style={{paddingLeft : "15px"}}></td>
                                                        </tr>
                                                        <tr>
                                                            <th>휴대폰 번호</th>
                                                            <td style={{paddingLeft : "15px"}}></td>
                                                        </tr>
                                                        <tr>
                                                            <th>이메일</th>
                                                            <td style={{paddingLeft : "15px"}}></td>
                                                        </tr>
                                                        <tr>
                                                            <th rowSpan={2} style={{verticalAlign : "middle"}}>주소*</th>
                                                            <td style={{paddingLeft : "15px"}}></td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{paddingLeft : "15px"}}></td>
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
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <th>복무기간</th>
                                                            <td colSpan={3}></td>
                                                        </tr>
                                                        <tr>
                                                            <th>총기간</th>
                                                            <td colSpan={3}></td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </TabPanel>
                                            <TabPanel value={this.state.value} index={2}>
                                                Item Three
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