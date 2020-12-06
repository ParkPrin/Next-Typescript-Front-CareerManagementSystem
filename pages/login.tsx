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

    componentDidMount() {
        const isLogin = window.localStorage.getItem("isLogin");
        if (isLogin) window.location.replace("/");
    }

    render() {
        const {initExecuteValiable} = this.props;


        const handleSubmit = async (form: FormEvent<HTMLFormElement>) => {
            form.preventDefault();
            const userId: string = form.target[0].value;
            const password: string = form.target[1].value;
            const userAndPersonDTO:UserAndPerson = { userId :userId, password: password}
            const loginResult:Response = await fetch("/api/user/login/v1", {
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
                window.localStorage.setItem("isLogin", true);
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
                        <header style={{marginTop:"20%"}}>

                        </header>
                        <div className={this.props.classes.IndexRoot}>
                            <main style={{width: "500px", marginLeft: "27%", marginBottom: "20px", border:"1px solid #ecf0f1", borderWidth:"1px", borderRadius:"25px"}}>
                                <div className="w3-row" style={{margin: "30px"}}>
                                    <div>
                                        <form onSubmit={handleSubmit}>
                                            <div className="w3-col s8" >
                                                <h1>Login</h1>
                                                <section style={{marginTop: "10%"}}>
                                                    <div>
                                                        <TextField id="userId" label="아이디" error={false} helperText="" />
                                                    </div>
                                                    <div>
                                                        <TextField id="password" type="password" label="비밀번호" error={false} helperText="" />
                                                    </div>
                                                </section>
                                            </div>
                                            <div className="w3-col s4" >
                                                <section>
                                                    <Button variant="contained" color="primary" href={"./join"} style={{marginTop: "30px", width: "150px"}}>회원가입</Button>
                                                    <Button type={"submit"} variant="contained" color="primary" style={{marginTop: "10px", width: "150px"}}>로그인</Button>
                                                    <Button variant="contained" color="primary" style={{marginTop: "10px", width: "150px"}}>Google 로그인</Button>
                                                    <Button variant="contained" color="primary" style={{marginTop: "10px", width: "150px"}}>Facebook 로그인</Button>
                                                    <Button variant="contained" color="primary" style={{marginTop: "10px", width: "150px"}}>Naver 로그인</Button>
                                                </section>
                                            </div>
                                        </form>
                                    </div>


                                </div>
                                <div style={{marginTop: "15%", marginBottom: "15px"}}>
                                    <Typography variant="body2" gutterBottom style={{ marginLeft: "30%", display: "inline"}}>
                                        아이디 찾기
                                    </Typography>
                                    <Typography variant="body2" gutterBottom style={{ marginLeft: "10px", display: "inline"}}>
                                        비밀번호 찾기
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