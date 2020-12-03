import PageMaue  from '../components/layout/PageMaue'
import React, {ReactNode} from 'react'
import Head from "next/head";
import {InitExecuteValiable} from "../interfaces/initExecuteValiable";
import CircularProgress from '@material-ui/core/CircularProgress';

export interface LayoutProps {
    children?: ReactNode
    title?: string
    initExecuteValiable: InitExecuteValiable
}

interface PageLayoutState {
    progress : number
}

class PageLayout extends React.Component<LayoutProps, PageLayoutState> {

    state = {
        progress : 0
    }

    gradualProgress() {
        let oldProgress:number = 0;
        setInterval(() => {
            while (oldProgress < 100){
                oldProgress = oldProgress + 10;
                this.setState({
                    progress: oldProgress
                })
            }
        }, 1000);

    }

    componentDidMount() {
        this.gradualProgress()
    }

    render() {


        const {title, children, initExecuteValiable} = this.props

        return (
            <div>{
                this.state.progress < 100 ? <div style={{
                        width: '100%'
                    }}>
                        <div>
                            <Head>
                                <title>{title}</title>
                                <meta charSet="utf-8" />
                                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                            </Head>
                            <header>
                                <section style={{marginLeft: "38%", marginTop: "17%"}}>
                                    <h1>페이지 로딩중</h1>
                                    <CircularProgress style={{marginLeft: "45px", marginTop: "20px"}} />
                                </section>
                            </header>
                        </div>
                    </div>
                    : <div>
                        <Head>
                            <title>{title}</title>
                            <meta charSet="utf-8" />
                            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                        </Head>
                        <header>


                        </header>
                        <main>
                            <PageMaue title={title} initExecuteValiable={initExecuteValiable}>
                                {children}
                            </PageMaue>
                        </main>
                        <footer>
                            this platform make by coder Parkprin - version 1.0.0
                        </footer>
                    </div>
            }

            </div>
        )
    }
}

export default PageLayout;