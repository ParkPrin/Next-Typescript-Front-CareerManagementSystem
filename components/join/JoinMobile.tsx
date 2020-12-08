import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import React, {FormEvent} from "react";
import {UserAndPerson} from "../../interfaces/userAndPerson";
import {Response} from "../../interfaces/response";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        JoinRoot: {
            ...theme.typography.button,
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(1),
        },
    }),
);

export default function JoinMobile() {
    const classes = useStyles();

    const validationCheck = (input:string, inputType:string) => {
        if (input.trim() === ""){
            alert(inputType + "을(를) 입력하지 않았습니다. 다시 입력하세요")
            return true;
        } else return false;
    }

    const handleSubmit = async (form: FormEvent<HTMLFormElement>) => {
        form.preventDefault();
        const nickname: string = form.target[0].value;
        const userId: string = form.target[1].value;
        const password: string = form.target[2].value;
        const rePassword: string = form.target[3].value;
        const email: string = form.target[4].value;

        if (validationCheck(nickname, "닉네임")) return;
        if (validationCheck(userId, "유저아이디")) return;
        if (validationCheck(password, "비밀번호")) return;
        if (validationCheck(rePassword, "비밀번호 재입력")) return;
        if (validationCheck(email, "이메일")) return;

        if (password !== rePassword) {
            alert("비밀번호 불일치, 다시 확인해주세요")
            return;
        }
        const userAndPersonDTO:UserAndPerson = { userId :userId, password: password, nickName: nickname, email: email}

        const loginResult:Response = await fetch("/api/user/join", {
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
                console.log(res);
                return res;
            });
        if (loginResult.state === 200){
            alert("회원가입 성공")
            window.location.replace("/");
        } else {
            alert("로그인 실패 - 원인 : "+ loginResult.responseValue);

        }
    }

    return(
        <div>
            <div className={classes.JoinRoot}>
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
                            <TextField id="rePassword" name="rePassword" type="password" label="비밀번호 재입력" error={false} helperText="" />
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
    )
}