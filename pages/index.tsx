import PageLayout  from '../layouts/PageLayout'
import React  from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {createStyles, withStyles, WithStyles} from "@material-ui/core/styles";
import {Theme} from "@material-ui/core/styles/createMuiTheme";
import Typography from '@material-ui/core/Typography';
import Image from 'next/image'
import Grid from '@material-ui/core/Grid';
import initExecute from "../utils/InitExecuteMethod";
import {InitExecuteValiable} from "../interfaces/initExecuteValiable";
import { NextPageContext } from 'next'

const useStyles = (theme: Theme) =>
    createStyles({
        IndexRoot: {
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
        titleFont : {
            fontFamily:"Raleway"
        }
    });

export interface IndexPageProps extends WithStyles<typeof useStyles> {
    initExecuteValiable: InitExecuteValiable
}

class IndexPage extends React.Component<IndexPageProps, {}> {
    static async getInitialProps({ req }: NextPageContext) {
        const initExecuteValiable = await initExecute(req);
        return {initExecuteValiable}
    }

    render() {
        const {classes, initExecuteValiable} = this.props;

        return (

        <PageLayout title={initExecuteValiable.title} initExecuteValiable={initExecuteValiable}>
            <div>
                <header style={{marginTop:"20%"}}>

                </header>
                <div className={this.props.classes.IndexRoot}>
                    <main>
                        {initExecuteValiable.isDevice ?
                            <div>
                                <Container maxWidth="lg">
                                    <Typography variant="h3" gutterBottom>
                                        당신의 이력 관리를 시작하세요
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        이직 시기마다 새롭게 이직서류를 작성하는 번거로움을 겪고 계신가요? 이력 관리 플랫폼을 통해서 이력관리의 효율성을 높이세요.
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        한번 작성한 이력은 공유도 가능하며, 필요에 따라 피드백을 받을 수 있어서 더 나은 이력관리가 가능해집니다.
                                    </Typography>

                                    <Image
                                        src="/main/jumbotron1.jpeg"
                                        alt="Picture of the author"
                                        width={850}
                                        height={326}
                                    />
                                </Container>

                                <Container maxWidth="lg" style={{marginTop: "30%"}}>

                                    <div className={classes.gridRoot}>
                                        <Typography variant="h5" gutterBottom style={{marginBottom: "20px"}}>
                                            Step1. 편리한 이력 작성
                                        </Typography>
                                        <Image
                                            src="/main/typing.jpg"
                                            alt="Picture of the author"
                                            width={500}
                                            height={500}
                                            layout="responsive"
                                        />
                                        <div style={{marginBottom:"20px"}}>
                                            <Typography variant="h6" gutterBottom>
                                                기본 정보 작성
                                            </Typography>
                                            <Typography variant="body1" gutterBottom>
                                                이름, 학력, 자격증과 같은 기본 단위의 정보를 작성할 수 있습니
                                            </Typography>
                                        </div>
                                        <div style={{marginBottom:"20px"}}>
                                            <Typography variant="h6" gutterBottom>
                                                유연한 자기소개 작성
                                            </Typography>
                                            <Typography variant="body1" gutterBottom>
                                                유연한 질문사항을 변경을 통하여 자신의 전문성을 부각시킬 수 있습니다
                                            </Typography>
                                        </div>
                                        <div style={{marginBottom:"30px"}}>
                                            <Typography variant="h6" gutterBottom>
                                                선택적 개인정보 보호
                                            </Typography>
                                            <Typography variant="body1" gutterBottom>
                                                각 영역별 개인정보 공개여부를 지정하여 개인정보의 노출을 제어할 수 있습니다
                                            </Typography>
                                        </div>
                                    </div>
                                </Container>
                                <Container maxWidth="sm" style={{marginTop: "30%"}}>

                                    <Typography variant="h5" gutterBottom style={{marginBottom: "20px"}}>
                                        Step2. 이력 관리 및 공유
                                    </Typography>
                                    <Image
                                        src="/main/career_share.jpg"
                                        alt="Picture of the author"
                                        width={500}
                                        height={500}
                                        layout="responsive"
                                    />
                                    <div className={classes.gridRoot}>
                                        <div style={{marginBottom:"20px"}}>
                                            <Typography variant="h6" gutterBottom>
                                                저장된 이력에 대한 관리
                                            </Typography>
                                            <Typography variant="body1" gutterBottom>
                                                저장된 이력을 최대 5개까지 이력을 분리하여 관리할 수 있습니다.
                                            </Typography>
                                        </div>
                                        <div style={{marginBottom:"20px"}}>
                                            <Typography variant="h6" gutterBottom>
                                                준비된 이력에 대한 공유
                                            </Typography>
                                            <Typography variant="body1" gutterBottom>
                                                가다듬은 이력을 지원하고자 하는 회사 관계자에게 링크를 공유하세요
                                            </Typography>
                                        </div>

                                    </div>
                                </Container>
                                <Container maxWidth="sm" style={{marginTop: "30%"}}>
                                    <Typography variant="h5" gutterBottom style={{marginBottom: "20px"}}>
                                        Step3. 피드백과 랭킹시스템
                                    </Typography>
                                    <Image
                                        src="/main/feedback_rank.jpg"
                                        alt="Picture of the author"
                                        width={700}
                                        height={500}
                                        layout="responsive"
                                    />
                                    <div className={classes.gridRoot}>
                                        <div style={{marginBottom:"20px"}}>
                                            <Typography variant="h6" gutterBottom>
                                                이력 공개 여부를 통한 피드백
                                            </Typography>
                                            <Typography variant="body1" gutterBottom>
                                                이력서 공유 화면에서 피드백을 받을 수 있습니다
                                            </Typography>
                                        </div>
                                        <div style={{marginBottom:"20px"}}>
                                            <Typography variant="h6" gutterBottom>
                                                이력 평가에 의한 랭킹 시스템
                                            </Typography>
                                            <Typography variant="body1" gutterBottom>
                                                받은 별점과 신뢰도로 랭킹이 책정됩니다.
                                            </Typography>
                                        </div>


                                    </div>
                                </Container>
                            </div>
                            :
                            <div>
                                <Container maxWidth="lg">
                                    <Typography variant="h2" gutterBottom className={classes.titleFont}>
                                        당신의 이력 관리를 시작하세요
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        이직 시기마다 새롭게 이직서류를 작성하는 번거로움을 겪고 계신가요? 이력 관리 플랫폼을 통해서 이력관리의 효율성을 높이세요.
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        한번 작성한 이력은 공유도 가능하며, 필요에 따라 피드백을 받을 수 있어서 더 나은 이력관리가 가능해집니다.
                                    </Typography>

                                    <div className={classes.gridRoot}>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12}>
                                                <Image
                                                    src="/main/jumbotron1.jpeg"
                                                    alt="Picture of the author"
                                                    width={850}
                                                    height={326}
                                                />
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Container>

                                <Container maxWidth="lg" style={{marginTop: "30%"}}>
                                    <Typography variant="h2" gutterBottom style={{marginBottom: "20px"}}>
                                        Step1. 편리한 이력 작성
                                    </Typography>
                                    <div className={classes.gridRoot}>
                                        <Grid container spacing={3}>
                                            <Grid item xs>
                                                <Image
                                                    src="/main/typing.jpg"
                                                    alt="Picture of the author"
                                                    width={500}
                                                    height={500}
                                                    layout="responsive"
                                                />
                                            </Grid>
                                            <Grid item xs>
                                                <div style={{marginBottom:"30px"}}>
                                                    <Typography variant="h4" gutterBottom>
                                                        기본 정보 작성
                                                    </Typography>
                                                    <Typography variant="body1" gutterBottom>
                                                        이름, 학력, 자격증과 같은 기본 단위의 정보를 작성할 수 있습니
                                                    </Typography>
                                                </div>
                                                <div style={{marginBottom:"30px"}}>
                                                    <Typography variant="h4" gutterBottom>
                                                        유연한 자기소개 작성
                                                    </Typography>
                                                    <Typography variant="body1" gutterBottom>
                                                        유연한 질문사항을 변경을 통하여 자신의 전문성을 부각시킬 수 있습니다
                                                    </Typography>
                                                </div>
                                                <div style={{marginBottom:"30px"}}>
                                                    <Typography variant="h4" gutterBottom>
                                                        선택적 개인정보 보호
                                                    </Typography>
                                                    <Typography variant="body1" gutterBottom>
                                                        각 영역별 개인정보 공개여부를 지정하여 개인정보의 노출을 제어할 수 있습니다
                                                    </Typography>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Container>
                                <Container maxWidth="lg" style={{marginTop: "30%"}}>
                                    <Typography variant="h2" gutterBottom style={{marginBottom: "20px"}}>
                                        Step2. 이력 관리 및 공유
                                    </Typography>
                                    <div className={classes.gridRoot}>
                                        <Grid container spacing={3}>
                                            <Grid item xs>
                                                <div style={{marginBottom:"30px"}}>
                                                    <Typography variant="h4" gutterBottom>
                                                        저장된 이력에 대한 관리
                                                    </Typography>
                                                    <Typography variant="body1" gutterBottom>
                                                        저장된 이력을 최대 5개까지 이력을 분리하여 관리할 수 있습니다.
                                                    </Typography>
                                                </div>
                                                <div style={{marginBottom:"30px"}}>
                                                    <Typography variant="h4" gutterBottom>
                                                        준비된 이력에 대한 공유
                                                    </Typography>
                                                    <Typography variant="body1" gutterBottom>
                                                        가다듬은 이력을 지원하고자 하는 회사 관계자에게 링크를 공유하세요
                                                    </Typography>
                                                </div>
                                            </Grid>
                                            <Grid item xs>
                                                <Image
                                                    src="/main/career_share.jpg"
                                                    alt="Picture of the author"
                                                    width={500}
                                                    height={500}
                                                    layout="responsive"
                                                />
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Container>
                                <Container maxWidth="lg" style={{marginTop: "30%"}}>
                                    <Typography variant="h2" gutterBottom style={{marginBottom: "20px"}}>
                                        Step3. 피드백과 랭킹시스템
                                    </Typography>
                                    <div className={classes.gridRoot}>
                                        <Grid container spacing={3}>
                                            <Grid item xs>
                                                <Image
                                                    src="/main/feedback_rank.jpg"
                                                    alt="Picture of the author"
                                                    width={700}
                                                    height={500}
                                                    layout="responsive"
                                                />
                                            </Grid>
                                            <Grid item xs>
                                                <div style={{marginBottom:"30px"}}>
                                                    <Typography variant="h4" gutterBottom>
                                                        이력 공개 여부를 통한 피드백
                                                    </Typography>
                                                    <Typography variant="body1" gutterBottom>
                                                        이력서 공유 화면에서 피드백을 받을 수 있습니다
                                                    </Typography>
                                                </div>
                                                <div style={{marginBottom:"30px"}}>
                                                    <Typography variant="h4" gutterBottom>
                                                        이력 평가에 의한 랭킹 시스템
                                                    </Typography>
                                                    <Typography variant="body1" gutterBottom>
                                                        받은 별점과 신뢰도로 랭킹이 책정됩니다.
                                                    </Typography>
                                                </div>
                                            </Grid>

                                        </Grid>
                                    </div>
                                </Container>
                            </div>
                        }

                    </main>
                </div>
            </div>
            <CssBaseline />
        </PageLayout>
        )
    }
}

export default withStyles(useStyles)(IndexPage)