import PageLayout  from '../layouts/PageLayout'
import React  from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import {createStyles, withStyles, WithStyles} from "@material-ui/core/styles";
import {Theme} from "@material-ui/core/styles/createMuiTheme";
import Typography from '@material-ui/core/Typography';
import initExecute from "../utils/InitExecuteMethod";
import {InitExecuteValiable} from "../interfaces/initExecuteValiable";
import { NextPageContext } from 'next'
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

const useStyles = (theme: Theme) =>
    createStyles({
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
    });

export interface IndexPageProps extends WithStyles<typeof useStyles> {
    initExecuteValiable: InitExecuteValiable
}

class IndexPage extends React.Component<IndexPageProps, {}> {
    static async getInitialProps({ req }: NextPageContext) {
        const initExecuteValiable = await initExecute(req);
        return {initExecuteValiable}
    }

    render() {
        const {classes, initExecuteValiable} = this.props;

        return (

        <PageLayout title={initExecuteValiable.title} initExecuteValiable={initExecuteValiable}>
            {
                initExecuteValiable.isDevice ?
                    <div>

                    </div>
                    : <div>
                        <header style={{marginTop:"15%"}}>

                        </header>
                        <div className={this.props.classes.IndexRoot}>
                            <main style={{width: "470px", marginTop: "4% auto", marginLeft: "27%", marginBottom: "20px", border:"1px solid #ecf0f1", borderWidth:"1px", borderRadius:"25px"}}>
                                <div style={{marginLeft: "30%", marginRight: "30%", marginTop: "10%"}}>
                                    <h1>회원가입</h1>
                                    <div style={{marginBottom: "5px"}}>
                                        <TextField id="loginId" label="닉네임" error={false} helperText="" />
                                    </div>
                                    <div style={{marginBottom: "5px"}}>
                                        <TextField id="loginId" label="아이디" error={false} helperText="" />
                                    </div>
                                    <div style={{marginBottom: "5px"}}>
                                        <TextField id="loginId" label="비밀번호" error={false} helperText="" />
                                    </div>
                                    <div style={{marginBottom: "5px"}}>
                                        <TextField id="loginId" label="비밀번호 재입력" error={false} helperText="" />
                                    </div>
                                    <div style={{marginBottom: "5px"}}>
                                        <TextField id="loginId" label="이메일" error={false} helperText="" />
                                    </div>
                                    <Button variant="contained" color="primary" style={{marginTop: "30px", width: "170px"}}>회원가입</Button>
                                </div>

                                <div style={{marginTop: "15%", marginBottom: "15px"}}>
                                    <Typography variant="body2" gutterBottom style={{ marginLeft: "28%", display: "inline"}}>
                                        아이디 찾기
                                    </Typography>
                                    <Typography variant="body2" gutterBottom style={{ marginLeft: "10px", display: "inline"}}>
                                        비밀번호 찾기
                                    </Typography>
                                    <Typography variant="body2" component="a" gutterBottom style={{ marginLeft: "10px", display: "inline"}} href={"./login"}>
                                        로그인
                                    </Typography>
                                </div>
                            </main>
                        </div>
                    </div>
            }

            <CssBaseline />
        </PageLayout>
        )
    }
}

export default withStyles(useStyles)(IndexPage)