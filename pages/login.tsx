import PageLayout  from '../layouts/PageLayout'
import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import initExecute from "../utils/InitExecuteMethod";
import {InitExecuteValiable} from "../interfaces/initExecuteValiable";
import { NextPageContext } from 'next'
import LoginPc from "../components/login/LoginPc";

export interface LoginPageProps{
    initExecuteValiable: InitExecuteValiable
}


class LoginPage extends React.Component<LoginPageProps, {}> {
    static async getInitialProps({ req }: NextPageContext) {
        const initExecuteValiable = await initExecute(req);
        return {initExecuteValiable}
    }

    componentDidMount() {
        const isLogin = window.localStorage.getItem("isLogin");
        if (isLogin){
            window.location.href="/"
        } else {
            this.setState({initView:true})
        }
    }

    render() {
        const {initExecuteValiable} = this.props;
        return (

        <PageLayout title={initExecuteValiable.title} initExecuteValiable={initExecuteValiable}>
            {
                initExecuteValiable.isDevice ?
                    <div>

                    </div>
                    : <div>
                        <header style={{marginTop:"20%"}}>
                        </header>
                        <LoginPc></LoginPc>
                    </div>
            }

            <CssBaseline />
        </PageLayout>
        )
    }
}

export default LoginPage