import PageLayout  from '../layouts/PageLayout'
import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import initExecute from "../utils/InitExecuteMethod";
import {InitExecuteValiable} from "../interfaces/initExecuteValiable";
import { NextPageContext } from 'next'
import JoinPc from "../components/join/JoinPc";
import JoinMobile from "../components/join/JoinMobile";


export interface IndexPageProps{
    initExecuteValiable: InitExecuteValiable
}

class IndexPage extends React.Component<IndexPageProps, {}> {
    static async getInitialProps({ req }: NextPageContext) {
        const initExecuteValiable = await initExecute(req);
        return {initExecuteValiable}
    }

    render() {
        const {initExecuteValiable} = this.props;


        return (

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
        )
    }
}

export default IndexPage;