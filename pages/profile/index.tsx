import PageLayout  from '../../layouts/PageLayout'
import React  from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import {createStyles, withStyles, WithStyles} from "@material-ui/core/styles";
import {Theme} from "@material-ui/core/styles/createMuiTheme";
import initExecute from "../../utils/InitExecuteMethod";
import {InitExecuteValiable} from "../../interfaces/initExecuteValiable";
import {NextPageContext} from "next";


const useStyles = (theme: Theme) =>
    createStyles({
        profileRoot: {
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


export interface IndexPageProps extends WithStyles<typeof useStyles>{
    initExecuteValiable: InitExecuteValiable
}

class Index extends React.Component<IndexPageProps, {}> {

    static async getInitialProps({ req }: NextPageContext) {
        const initExecuteValiable = await initExecute(req);
        return {initExecuteValiable}
    }

    render() {

        const {initExecuteValiable} = this.props;
        //if (initExecuteValiable.redirectUrl !== "/")
        return (
        <PageLayout title={initExecuteValiable.title} initExecuteValiable={initExecuteValiable}>
            <div>
                <header style={{marginTop:"20%"}}>

                </header>
                <div className={this.props.classes.profileRoot}>
                    <main>
                        <h1>안녕</h1>
                    </main>
                </div>
            </div>
            <CssBaseline />
        </PageLayout>
        )
    }
}

export default withStyles(useStyles)(Index)