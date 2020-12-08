import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import React, {FormEvent, useState, useEffect} from "react";
import {Response} from "../../interfaces/response";
import { useRouter } from 'next/router'
import axios from "axios";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        loginRoot: {
            ...theme.typography.button,
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(1),
        },
    }),
);

export default function LoginPc() {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const classes = useStyles();
    const router = useRouter();

    useEffect(() => {
        const isLogin = window.localStorage.getItem("isLogin");
        if (isLogin) router.push("/");
    })


    const callApiData:(url: string) => Promise<any> = async (url:string) => {
        const resp = await axios.post(url, {
            userId : userId,
            password : password
        });
        return resp.data;
    }

    const validation:() => string  = () => {
        if (userId.trim() === "") return "아이디를 입력하세요";
        else if (password.trim() === "") return "비밀번호를 입력하세요";
        else return ""
    }

    const handleSubmit = async (form: FormEvent<HTMLFormElement>) => {
        form.preventDefault();
        if(validation() !== ""){
            alert(validation())
            return;
        }
        const data:Response = await callApiData("/api/user/login");
        if (data.state === 200){
            window.localStorage.setItem("isLogin", "true");
            router.push("/");
        } else {
            alert("로그인 실패 - 원인 : "+ data.responseValue);

        }
    }

    return (
        <div>
            <div className={classes.loginRoot}>
                <main style={{width: "500px", marginLeft: "27%", marginBottom: "20px", border:"1px solid #ecf0f1", borderWidth:"1px", borderRadius:"25px"}}>
                    <div className="w3-row" style={{margin: "30px"}}>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <div className="w3-col s8" >
                                    <h1>Login</h1>
                                    <section style={{marginTop: "10%"}}>
                                        <div>
                                            <TextField id="userId" label="아이디" error={false} onChange={(e) => setUserId(e.target.value) } helperText="" />
                                        </div>
                                        <div>
                                            <TextField id="password" type="password" label="비밀번호" onChange={(e) => setPassword(e.target.value) } error={false} helperText="" />
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
    )
}