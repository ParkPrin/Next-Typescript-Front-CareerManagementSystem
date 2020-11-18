import PageLayout  from '../layouts/PageLayout'
import React  from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {createStyles, withStyles, WithStyles} from "@material-ui/core/styles";
import {Theme} from "@material-ui/core/styles/createMuiTheme";
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

class IndexPage extends React.Component<IndexPageProps, {}> {

    render() {
        const {classes} = this.props;

        return (

        <PageLayout title={process.env.NEXT_PROJECT_NAME}>
            <div>
                <header style={{marginTop:"20%"}}>

                </header>
                <main>
                    <Container maxWidth="lg">
                        <h2 className="text-center">당신의 커리어를 관리해 보세요</h2>
                        <div className={this.props.classes.root}>
                        </div>
                        <div className={classes.gridRoot}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Image
                                        src="/jumbotron1.jpeg"
                                        alt="Picture of the author"
                                        width={850}
                                        height={326}
                                    />
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </main>
                <footer>

                </footer>
            </div>
            <CssBaseline />

        </PageLayout>
        )
    }
}

export default withStyles(useStyles)(IndexPage)