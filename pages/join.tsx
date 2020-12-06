import PageLayout  from '../layouts/PageLayout'
import React, {FormEvent} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import {createStyles, withStyles, WithStyles} from "@material-ui/core/styles";
import {Theme} from "@material-ui/core/styles/createMuiTheme";
import Typography from '@material-ui/core/Typography';
import initExecute from "../utils/InitExecuteMethod";
import {InitExecuteValiable} from "../interfaces/initExecuteValiable";
import { NextPageContext } from 'next'
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import {UserAndPerson} from "../interfaces/userAndPerson";
import {Response} from "../interfaces/response";

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
        const handleSubmit = async (form: FormEvent<HTMLFormElement>) => {
            form.preventDefault();
            const nickname: string = form.target[0].value;
            const userId: string = form.target[1].value;
            const password: string = form.target[2].value;
            const rePassword: string = form.target[3].value;
            const email: string = form.target[4].value;


            if (password !== rePassword) {
                alert("비밀번호 불일치, 다시 확인해주세요")
            }
            const userAndPersonDTO:UserAndPerson = { userId :userId, password: password, nickName: nickname, email: email}
            const loginResult:Response = await fetch("/api/user/join/v1", {
                method: 'POST',
                cache: 'default',
                headers: {
                    'ConTent-Type': 'application/json'
                },
                credentials: 'omit',
                body: JSON.stringify(userAndPersonDTO)
            })
                .then(res => {
                    return res.json()
                })
                .then(res => {
                    return res;
                });
            if (loginResult.state === 200){
                alert("회원가입 성공")
                window.location.replace("/");
            } else {
                alert("로그인 실패 - 원인 : "+ loginResult.responseValue);

            }
        }
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
                                <form onSubmit={handleSubmit} style={{marginLeft: "30%", marginRight: "30%", marginTop: "10%"}}>
                                    <h1>회원가입</h1>
                                    <div style={{marginBottom: "5px"}}>
                                        <TextField id="nickName" name="nickName" label="닉네임" error={false} helperText="" />
                                    </div>
                                    <div style={{marginBottom: "5px"}}>
                                        <TextField id="userId" name="userId" label="아이디" error={false} helperText="" />
                                    </div>
                                    <div style={{marginBottom: "5px"}}>
                                        <TextField id="password" name="password" type="password" label="비밀번호" error={false} helperText="" />
                                    </div>
                                    <div style={{marginBottom: "5px"}}>
                                        <TextField id="rePassword" name="rePassword" label="비밀번호 재입력" error={false} helperText="" />
                                    </div>
                                    <div style={{marginBottom: "5px"}}>
                                        <TextField id="email" name="email" label="이메일" error={false} helperText="" />
                                    </div>
                                    <Button type={"submit"} variant="contained" color="primary" style={{marginTop: "30px", width: "170px"}}>회원가입</Button>
                                </form>

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