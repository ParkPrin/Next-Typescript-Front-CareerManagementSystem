import PageMaue  from '../components/PageMaue'
import React, {ReactNode} from 'react'
import Head from "next/head";
import {InitExecuteValiable} from "../interfaces/initExecuteValiable";

export interface LayoutProps {
    children?: ReactNode
    title?: string
    initExecuteValiable: InitExecuteValiable
}

class PageLayout extends React.Component<LayoutProps> {


    render() {
        const {title, children, initExecuteValiable} = this.props

        return (
            <div>
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
        )
    }
}

export default PageLayout;