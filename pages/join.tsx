import PageLayout  from '../layouts/PageLayout'
import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import initExecute from "../utils/InitExecuteMethod";
import {InitExecuteValiable} from "../interfaces/initExecuteValiable";
import { NextPageContext } from 'next'
import JoinPc from "../components/join/JoinPc";
import JoinMobile from "../components/join/JoinMobile";


export interface JoinPageProps{
    initExecuteValiable: InitExecuteValiable
}

interface JoinPageState {
    initView : boolean
}

class JoinPage extends React.Component<JoinPageProps, JoinPageState> {
    state = {
        initView : false
    }


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
        <div>
            { this.state.initView ?
                <PageLayout title={initExecuteValiable.title} initExecuteValiable={initExecuteValiable}>
                    {
                        initExecuteValiable.isDevice ?
                            <div>
                                <JoinMobile></JoinMobile>
                            </div>
                            : <div>
                                <header style={{marginTop:"15%"}}>

                                </header>
                                <JoinPc></JoinPc>
                            </div>
                    }

                    <CssBaseline />
                </PageLayout>
                :
                <div></div>
            }

        </div>

        )
    }
}

export default JoinPage;