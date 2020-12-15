import PageLayout  from '../../layouts/PageLayout'
import React  from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import {createStyles, withStyles, WithStyles} from "@material-ui/core/styles";
import {Theme} from "@material-ui/core/styles/createMuiTheme";
import initExecute from "../../utils/InitExecuteMethod";
import {InitExecuteValiable} from "../../interfaces/initExecuteValiable";
import {NextPageContext} from "next";
import Container from "@material-ui/core/Container";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import CareerRegisterModal from "../../components/career/CareerRegisterModal";

const options = [
    '수정',
    '공유',
    '삭제',
    '복사'
];

const ITEM_HEIGHT = 48;

export interface ProfileState {
    anchorEl : HTMLElement | null
    profileEl : string
    isView : boolean
    progress : number
    isCareerRegisterModalOpen : boolean
}

const useStyles = (theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            '& > *': {
                margin: theme.spacing(3),
                width: theme.spacing(20),
                height: theme.spacing(20),
            },
        },
        cardRoot: {
            maxWidth: 310,
        },
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
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        progressRoot: {
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
        },
    });

export interface ProfileProps extends WithStyles<typeof useStyles>{
    initExecuteValiable: InitExecuteValiable
}

class Index extends React.Component<ProfileProps, ProfileState> {

    state:ProfileState = {
        anchorEl: null,
        profileEl: "",
        isView : false,
        progress: 0,
        isCareerRegisterModalOpen : false
    }

    setAnchorEl(input:HTMLElement | null){
        this.setState({
            anchorEl : input
        })
    }

    setProfileEL(input:string){
        this.setState({
            profileEl : input
        })
    }

    setIsCareerRegisterModalOpen(isCareerRegisterModalOpen:boolean){
        this.setState({
            isCareerRegisterModalOpen : isCareerRegisterModalOpen
        })
    }

    closeIsCareerRegisterModalOpen = () => {
        this.setIsCareerRegisterModalOpen(false);
    }

    handleClick = (event: React.MouseEvent<HTMLElement>) => {
        this.setAnchorEl(event.currentTarget);
    };

    handleClose = () => {
        this.setAnchorEl(null);
    };

    changeProfileSort = (event: React.ChangeEvent<{ value: unknown }>) => {
        this.setProfileEL(event.target.value as string);
    };

    addExecute = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        event.view.document.location.href="/profile/write"

    }

    static async getInitialProps({ req }: NextPageContext) {
        const initExecuteValiable = await initExecute(req);
        return {initExecuteValiable}
    }


    componentDidMount() {
        const props = this.props;
        if (props.initExecuteValiable.redirectUrl !== ""){
            window.location.replace(this.props.initExecuteValiable.redirectUrl)
        } else {
            this.setState({
                isView : true
            })
        }
    }


    render() {


        const {classes, initExecuteValiable} = this.props;
        return (
            <div>
                {
                    this.state.isView ?
                        <PageLayout title={initExecuteValiable.title} initExecuteValiable={initExecuteValiable}>
                            <div>
                                <header style={{marginTop:"20%"}}>

                                </header>

                                <div className={this.props.classes.IndexRoot}>
                                    <main>
                                        <Container maxWidth="lg" style={{border:"1px solid #ecf0f1", borderWidth:"1px", borderRadius:"25px"}} >
                                            <div className={classes.gridRoot} style={{marginTop:"20px", marginBottom:"30px"}} >
                                                <div style={{marginBottom:"20px"}}>
                                                    <FormControl className={classes.formControl}>
                                                        <InputLabel id="demo-simple-select-label">정렬</InputLabel>
                                                        <Select
                                                            labelId="demo-simple-select-label"
                                                            id="demo-simple-select"
                                                            value={this.state.profileEl}
                                                            onChange={this.changeProfileSort}
                                                        >
                                                            <MenuItem value=""><em>None</em></MenuItem>
                                                            <MenuItem value={10}>최신수정날찌</MenuItem>
                                                            <MenuItem value={20}>수정빈도수</MenuItem>
                                                            <MenuItem value={30}>제목</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                    <IconButton onClick={() => this.setState({isCareerRegisterModalOpen : true})}  style={{float:"right"}} >
                                                        <Fab size="small" color="secondary" aria-label="edit" >
                                                            <AddIcon />
                                                        </Fab>
                                                    </IconButton>
                                                    <CareerRegisterModal isCareerRegisterModalOpen={this.state.isCareerRegisterModalOpen}
                                                                         closeIsCareerRegisterModalOpen={this.closeIsCareerRegisterModalOpen} />
                                                </div>
                                                {initExecuteValiable.isDevice ?
                                                    <div><Card className={classes.cardRoot} >
                                                        <CardActionArea>
                                                            <CardHeader
                                                                title="이력서 제목"
                                                                subheader="2020년 11월 25일"
                                                            />
                                                            <CardMedia
                                                                component="img"
                                                                alt="Contemplative Reptile"
                                                                height="200"
                                                                image="profile/parkprin.jpeg"
                                                                title="Contemplative Reptile"
                                                                style={{position: "relative", zIndex:0}}
                                                            />

                                                            <CardContent>
                                                                <Typography variant="body2" color="textSecondary" component="p">
                                                                    경력 5년차
                                                                </Typography>
                                                                <Typography variant="body2" color="textSecondary" component="p">
                                                                    연봉: 5000
                                                                </Typography>
                                                                <Typography variant="body2" color="textSecondary" component="p">
                                                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                                    across all continents except Antarctica
                                                                </Typography>
                                                            </CardContent>
                                                        </CardActionArea>

                                                        <CardActions>
                                                            <div>
                                                                <IconButton
                                                                    aria-label="more"
                                                                    aria-controls="long-menu"
                                                                    aria-haspopup="true"
                                                                    onClick={this.handleClick}
                                                                    style={{float:"right", position:"relative"}}
                                                                >
                                                                    <MoreVertIcon />
                                                                </IconButton>
                                                                <Menu
                                                                    id="long-menu"
                                                                    anchorEl={this.state.anchorEl}
                                                                    keepMounted
                                                                    open={Boolean(this.state.anchorEl)}
                                                                    onClose={this.handleClose}
                                                                    PaperProps={{
                                                                        style: {
                                                                            maxHeight: ITEM_HEIGHT * 4.5,
                                                                            width: '20ch',
                                                                        },
                                                                    }}
                                                                >
                                                                    {options.map((option) => (
                                                                        <MenuItem key={option} onClick={this.handleClose}>
                                                                            {option}
                                                                        </MenuItem>
                                                                    ))}
                                                                </Menu>
                                                            </div>
                                                        </CardActions>
                                                    </Card>
                                                        <Card className={classes.cardRoot} >
                                                            <CardActionArea>
                                                                <CardHeader
                                                                    title="이력서 제목"
                                                                    subheader="2020년 11월 25일"
                                                                />
                                                                <CardMedia
                                                                    component="img"
                                                                    alt="Contemplative Reptile"
                                                                    height="200"
                                                                    image="profile/parkprin.jpeg"
                                                                    title="Contemplative Reptile"
                                                                    style={{position: "relative", zIndex:0}}
                                                                />

                                                                <CardContent>
                                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                                        경력 5년차
                                                                    </Typography>
                                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                                        연봉: 5000
                                                                    </Typography>
                                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                                        across all continents except Antarctica
                                                                    </Typography>
                                                                </CardContent>
                                                            </CardActionArea>

                                                            <CardActions>
                                                                <div>
                                                                    <IconButton
                                                                        aria-label="more"
                                                                        aria-controls="long-menu"
                                                                        aria-haspopup="true"
                                                                        onClick={this.handleClick}
                                                                        style={{float:"right", position:"relative"}}
                                                                    >
                                                                        <MoreVertIcon />
                                                                    </IconButton>
                                                                    <Menu
                                                                        id="long-menu"
                                                                        anchorEl={this.state.anchorEl}
                                                                        keepMounted
                                                                        open={Boolean(this.state.anchorEl)}
                                                                        onClose={this.handleClose}
                                                                        PaperProps={{
                                                                            style: {
                                                                                maxHeight: ITEM_HEIGHT * 4.5,
                                                                                width: '20ch',
                                                                            },
                                                                        }}
                                                                    >
                                                                        {options.map((option) => (
                                                                            <MenuItem key={option} onClick={this.handleClose}>
                                                                                {option}
                                                                            </MenuItem>
                                                                        ))}
                                                                    </Menu>
                                                                </div>
                                                            </CardActions>
                                                        </Card>
                                                        <Card className={classes.cardRoot} >
                                                            <CardActionArea>
                                                                <CardHeader
                                                                    title="이력서 제목"
                                                                    subheader="2020년 11월 25일"
                                                                />
                                                                <CardMedia
                                                                    component="img"
                                                                    alt="Contemplative Reptile"
                                                                    height="200"
                                                                    image="profile/parkprin.jpeg"
                                                                    title="Contemplative Reptile"
                                                                    style={{position: "relative", zIndex:0}}
                                                                />

                                                                <CardContent>
                                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                                        경력 5년차
                                                                    </Typography>
                                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                                        연봉: 5000
                                                                    </Typography>
                                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                                        across all continents except Antarctica
                                                                    </Typography>
                                                                </CardContent>
                                                            </CardActionArea>

                                                            <CardActions>
                                                                <div>
                                                                    <IconButton
                                                                        aria-label="more"
                                                                        aria-controls="long-menu"
                                                                        aria-haspopup="true"
                                                                        onClick={this.handleClick}
                                                                        style={{float:"right", position:"relative"}}
                                                                    >
                                                                        <MoreVertIcon />
                                                                    </IconButton>
                                                                    <Menu
                                                                        id="long-menu"
                                                                        anchorEl={this.state.anchorEl}
                                                                        keepMounted
                                                                        open={Boolean(this.state.anchorEl)}
                                                                        onClose={this.handleClose}
                                                                        PaperProps={{
                                                                            style: {
                                                                                maxHeight: ITEM_HEIGHT * 4.5,
                                                                                width: '20ch',
                                                                            },
                                                                        }}
                                                                    >
                                                                        {options.map((option) => (
                                                                            <MenuItem key={option} onClick={this.handleClose}>
                                                                                {option}
                                                                            </MenuItem>
                                                                        ))}
                                                                    </Menu>
                                                                </div>
                                                            </CardActions>
                                                        </Card></div>
                                                    :
                                                    <div>
                                                        <Grid container spacing={3} >
                                                            <Grid item xs={4}>
                                                                <Card className={classes.cardRoot} >
                                                                    <CardActionArea>
                                                                        <CardHeader
                                                                            title="이력서 제목"
                                                                            subheader="2020년 11월 25일"
                                                                        />
                                                                        <CardMedia
                                                                            component="img"
                                                                            alt="Contemplative Reptile"
                                                                            height="200"
                                                                            image="profile/parkprin.jpeg"
                                                                            title="Contemplative Reptile"
                                                                            style={{position: "relative", zIndex:0}}
                                                                        />

                                                                        <CardContent>
                                                                            <Typography variant="body2" color="textSecondary" component="p">
                                                                                경력 5년차
                                                                            </Typography>
                                                                            <Typography variant="body2" color="textSecondary" component="p">
                                                                                연봉: 5000
                                                                            </Typography>
                                                                            <Typography variant="body2" color="textSecondary" component="p">
                                                                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                                                across all continents except Antarctica
                                                                            </Typography>
                                                                        </CardContent>
                                                                    </CardActionArea>

                                                                    <CardActions>
                                                                        <div>
                                                                            <IconButton
                                                                                aria-label="more"
                                                                                aria-controls="long-menu"
                                                                                aria-haspopup="true"
                                                                                onClick={this.handleClick}
                                                                                style={{float:"right", position:"relative"}}
                                                                            >
                                                                                <MoreVertIcon />
                                                                            </IconButton>
                                                                            <Menu
                                                                                id="long-menu"
                                                                                anchorEl={this.state.anchorEl}
                                                                                keepMounted
                                                                                open={Boolean(this.state.anchorEl)}
                                                                                onClose={this.handleClose}
                                                                                PaperProps={{
                                                                                    style: {
                                                                                        maxHeight: ITEM_HEIGHT * 4.5,
                                                                                        width: '20ch',
                                                                                    },
                                                                                }}
                                                                            >
                                                                                {options.map((option) => (
                                                                                    <MenuItem key={option} onClick={this.handleClose}>
                                                                                        {option}
                                                                                    </MenuItem>
                                                                                ))}
                                                                            </Menu>
                                                                        </div>
                                                                    </CardActions>
                                                                </Card>
                                                            </Grid>
                                                            <Grid item xs={4}>
                                                                <Card className={classes.cardRoot} >
                                                                    <CardActionArea>
                                                                        <CardHeader
                                                                            title="이력서 제목"
                                                                            subheader="2020년 11월 25일"
                                                                        />
                                                                        <CardMedia
                                                                            component="img"
                                                                            alt="Contemplative Reptile"
                                                                            height="200"
                                                                            image="profile/parkprin.jpeg"
                                                                            title="Contemplative Reptile"
                                                                            style={{position: "relative", zIndex:0}}
                                                                        />

                                                                        <CardContent>
                                                                            <Typography variant="body2" color="textSecondary" component="p">
                                                                                경력 5년차
                                                                            </Typography>
                                                                            <Typography variant="body2" color="textSecondary" component="p">
                                                                                연봉: 5000
                                                                            </Typography>
                                                                            <Typography variant="body2" color="textSecondary" component="p">
                                                                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                                                across all continents except Antarctica
                                                                            </Typography>
                                                                        </CardContent>
                                                                    </CardActionArea>

                                                                    <CardActions>
                                                                        <div>
                                                                            <IconButton
                                                                                aria-label="more"
                                                                                aria-controls="long-menu"
                                                                                aria-haspopup="true"
                                                                                onClick={this.handleClick}
                                                                                style={{float:"right", position:"relative"}}
                                                                            >
                                                                                <MoreVertIcon />
                                                                            </IconButton>
                                                                            <Menu
                                                                                id="long-menu"
                                                                                anchorEl={this.state.anchorEl}
                                                                                keepMounted
                                                                                open={Boolean(this.state.anchorEl)}
                                                                                onClose={this.handleClose}
                                                                                PaperProps={{
                                                                                    style: {
                                                                                        maxHeight: ITEM_HEIGHT * 4.5,
                                                                                        width: '20ch',
                                                                                    },
                                                                                }}
                                                                            >
                                                                                {options.map((option) => (
                                                                                    <MenuItem key={option} onClick={this.handleClose}>
                                                                                        {option}
                                                                                    </MenuItem>
                                                                                ))}
                                                                            </Menu>
                                                                        </div>
                                                                    </CardActions>
                                                                </Card>
                                                            </Grid>
                                                            <Grid item xs={4}>
                                                                <Card className={classes.cardRoot} >
                                                                    <CardActionArea>
                                                                        <CardHeader
                                                                            title="이력서 제목"
                                                                            subheader="2020년 11월 25일"
                                                                        />
                                                                        <CardMedia
                                                                            component="img"
                                                                            alt="Contemplative Reptile"
                                                                            height="200"
                                                                            image="profile/parkprin.jpeg"
                                                                            title="Contemplative Reptile"
                                                                            style={{position: "relative", zIndex:0}}
                                                                        />

                                                                        <CardContent>
                                                                            <Typography variant="body2" color="textSecondary" component="p">
                                                                                경력 5년차
                                                                            </Typography>
                                                                            <Typography variant="body2" color="textSecondary" component="p">
                                                                                연봉: 5000
                                                                            </Typography>
                                                                            <Typography variant="body2" color="textSecondary" component="p">
                                                                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                                                across all continents except Antarctica
                                                                            </Typography>
                                                                        </CardContent>
                                                                    </CardActionArea>

                                                                    <CardActions>
                                                                        <div>
                                                                            <IconButton
                                                                                aria-label="more"
                                                                                aria-controls="long-menu"
                                                                                aria-haspopup="true"
                                                                                onClick={this.handleClick}
                                                                                style={{float:"right", position:"relative"}}
                                                                            >
                                                                                <MoreVertIcon />
                                                                            </IconButton>
                                                                            <Menu
                                                                                id="long-menu"
                                                                                anchorEl={this.state.anchorEl}
                                                                                keepMounted
                                                                                open={Boolean(this.state.anchorEl)}
                                                                                onClose={this.handleClose}
                                                                                PaperProps={{
                                                                                    style: {
                                                                                        maxHeight: ITEM_HEIGHT * 4.5,
                                                                                        width: '20ch',
                                                                                    },
                                                                                }}
                                                                            >
                                                                                {options.map((option) => (
                                                                                    <MenuItem key={option} onClick={this.handleClose}>
                                                                                        {option}
                                                                                    </MenuItem>
                                                                                ))}
                                                                            </Menu>
                                                                        </div>
                                                                    </CardActions>
                                                                </Card>
                                                            </Grid>
                                                        </Grid>
                                                    </div>
                                                }
                                            </div>
                                        </Container>

                                    </main>
                                </div>



                            </div>
                            <CssBaseline />
                        </PageLayout>
                        :
                        <div></div>
                }

            </div>

        )
    }
}

export default withStyles(useStyles)(Index)