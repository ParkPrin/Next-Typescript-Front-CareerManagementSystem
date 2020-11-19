import React, { ReactNode } from 'react'
import { MenuList } from '../interfaces/menulist'
import {sampleUserData} from '../utils/menu-sample-data'

import Head from 'next/head'
import { createStyles, WithStyles, withStyles} from '@material-ui/core/styles';
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import FolderSharedIcon from '@material-ui/icons/FolderShared';

const drawerWidth = 240;

const useStyles = (theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
          },
          appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          },
          appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
          },
          menuButton: {
            marginRight: theme.spacing(2),
          },
          hide: {
            display: 'none',
          },
          drawer: {
            width: drawerWidth,
            flexShrink: 0,
          },
          drawerPaper: {
            width: drawerWidth,
            backgroundColor: "F7F7F7",
          },
          drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
          },
          content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: -drawerWidth,
          },
          contentShift: {
            transition: theme.transitions.create('margin', {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
          },
    });

export interface LayoutProps extends WithStyles<typeof useStyles> {
    children?: ReactNode
    title?: string
    theme?: string
}

export interface LayoutState {
    open : boolean
}


class PageMaue extends React.Component<LayoutProps, {}> {

    state:LayoutState = {
        open:false
    }

    setOpen(input:boolean){
        this.setState({
            open: input
        })
    }

    handleDrawerOpen = () => {
        this.setOpen(true);
    };

    handleDrawerClose = () => {
        this.setOpen(false);
    };


    render() {
        const ListItemLink = (props:any) => {
            return <ListItem button component="a" {...props} />;
        }
        const {classes, children, title} = this.props;
        const menuLists: MenuList[] = sampleUserData;

        return (
        <div className={classes.root} style={{backgroundColor:"#FFFFFF"}}>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </Head>

            <CssBaseline />
            <AppBar
              position="fixed"
              className={clsx(classes.appBar, {
                [classes.appBarShift]: this.state.open,
              })}
            >
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={this.handleDrawerOpen}
                  edge="start"
                  className={clsx(classes.menuButton, this.state.open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    {process.env.NEXT_PROJECT_NAME_KR}
                </Typography>
              </Toolbar>
            </AppBar>
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={this.state.open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={this.handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              <Divider />
              <List>
                {menuLists.map((item, index) => (
                  <ListItemLink
                      key={index}
                      href={item.url}
                  >
                    <ListItemIcon>
                        {item.iconName === "Home" ? <HomeIcon /> :
                            item.iconName === "Profile"?  <AccountBoxIcon /> :
                                item.iconName === "Share" ? <FolderSharedIcon /> : <InboxIcon />}

                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItemLink>
                ))}
              </List>
            </Drawer>
            <div style={{width: "1200px"}} >
                {children}
            </div>
          </div>

        )
    }
}


export default withStyles(useStyles)(PageMaue)