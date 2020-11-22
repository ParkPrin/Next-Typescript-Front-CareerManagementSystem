import PageLayout  from '../../layouts/PageLayout'
import React  from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {createStyles, withStyles, WithStyles} from "@material-ui/core/styles";
import {Theme} from "@material-ui/core/styles/createMuiTheme";
import Typography from '@material-ui/core/Typography';
import Image from 'next/image'
import Grid from '@material-ui/core/Grid';

const useStyles = (theme: Theme) =>
    createStyles({
        root: {
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

export interface IndexPageProps extends WithStyles<typeof useStyles> {}

class Index extends React.Component<IndexPageProps, {}> {

    render() {
        const {classes} = this.props;

        return (

        <PageLayout title={process.env.NEXT_PROJECT_NAME}>
            <div>
                <header style={{marginTop:"20%"}}>

                </header>
                <div className={this.props.classes.root}>
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