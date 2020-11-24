import React, { ReactNode } from 'react'

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

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import NoSsr from '@material-ui/core/NoSsr';
import {InitExecuteValiable} from "../interfaces/initExecuteValiable";
import {PageMenuItem} from "../interfaces/menuitem";

import Avatar from '@material-ui/core/Avatar';

const drawerWidth = 240;

const useStyles = (theme: Theme) =>
    createStyles({
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
          grow: {
              flexGrow: 1,
          },
          sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
          },
          sectionMobile: {
              display: 'flex',
              [theme.breakpoints.up('md')]: {
                  display: 'none',
              },
          },
    });

export interface LayoutProps extends WithStyles<typeof useStyles> {
    children?: ReactNode | undefined
    title?: string
    initExecuteValiable: InitExecuteValiable
}

export interface LayoutState {
    open : boolean,
    anchorEl : HTMLElement | null
    mobileMoreAnchorEl : HTMLElement | null
}


class PageMaue extends React.Component<LayoutProps, {}> {

    state:LayoutState = {
        open:false,
        anchorEl: null,
        mobileMoreAnchorEl: null
    }

    setOpen(input:boolean){
        this.setState({
            open: input
        })
    }

    setAnchorEl(input:HTMLElement | null){
        this.setState({
            anchorEl : input
        })
    }

    setMobileMoreAnchorEl(input:HTMLElement | null){
        this.setState({
            mobileMoreAnchorEl : input
        })
    }

    handleDrawerOpen = () => {
        this.setOpen(true);
    };

    handleDrawerClose = () => {
        this.setOpen(false);
    };
    isMenuOpen = () => {
        return Boolean(this.state.anchorEl) ? true : false;
    }

    isMobileMenuOpen = () => {
        return Boolean(this.state.mobileMoreAnchorEl) ? true : false;
    }

    handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        this.setAnchorEl(event.currentTarget);
    };

    handleMobileMenuClose = () => {
        this.setMobileMoreAnchorEl(null);
    };

    handleMenuClose = () => {
        this.setAnchorEl(null);
        this.handleMobileMenuClose();
    };

    handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        this.setMobileMoreAnchorEl(event.currentTarget);
    };


    render() {
        const mobileMenuId = 'primary-search-account-menu-mobile';
        const menuId = 'primary-search-account-menu';
        const ListItemLink = (props:any) => {
            return <ListItem button component="a" {...props} />;
        }
        const {classes, children, initExecuteValiable} = this.props;
        let menuList:PageMenuItem[] = initExecuteValiable.menuList;
        const from = initExecuteValiable.isSever;
        const isLogin = initExecuteValiable.isLogin;
        const renderMenu = (
            <Menu
                anchorEl={this.state.anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id={menuId}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={this.isMenuOpen()}
                onClose={this.handleMenuClose}
            >
                <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
            </Menu>
        );

        const renderMobileMenu = (
            <Menu
                anchorEl={this.state.mobileMoreAnchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id={mobileMenuId}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={this.isMobileMenuOpen()}
                onClose={this.handleMobileMenuClose}
            >
                <MenuItem>
                    <IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <p>Messages</p>
                </MenuItem>
                <MenuItem>
                    <IconButton aria-label="show 11 new notifications" color="inherit">
                        <Badge badgeContent={11} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <p>Notifications</p>
                </MenuItem>
                <MenuItem onClick={this.handleProfileMenuOpen}>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <Avatar alt="Remy Sharp" src="/profile/parkprin.jpeg" />
                    </IconButton>
                    <p>Profile</p>
                </MenuItem>
            </Menu>
        );

        return (
        <div style={{backgroundColor:"#FFFFFF", display: 'flex'}}>
            <Head>
                <title>{process.env.NEXT_PROJECT_NAME}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </Head>

            <CssBaseline />
            <NoSsr defer={from}>
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
                    {initExecuteValiable.title}
                </Typography>

                  <div className={classes.grow} />
                  {isLogin &&
                  <div>
                      <div className={classes.sectionDesktop}>
                          <IconButton aria-label="show 4 new mails" color="inherit">
                              <Badge badgeContent={4} color="secondary">
                                  <MailIcon />
                              </Badge>
                          </IconButton>
                          <IconButton aria-label="show 17 new notifications" color="inherit">
                              <Badge badgeContent={17} color="secondary">
                                  <NotificationsIcon />
                              </Badge>
                          </IconButton>
                          <IconButton
                              edge="end"
                              aria-label="account of current user"
                              aria-controls={menuId}
                              aria-haspopup="true"
                              onClick={this.handleProfileMenuOpen}
                              color="inherit"
                          >
                              <Avatar alt="Remy Sharp" src="/profile/parkprin.jpeg" />
                          </IconButton>
                      </div>
                      <div className={classes.sectionMobile}>
                          <IconButton
                              aria-label="show more"
                              aria-controls={mobileMenuId}
                              aria-haspopup="true"
                              onClick={this.handleMobileMenuOpen}
                              color="inherit"
                          >
                              <MoreIcon />
                          </IconButton>
                      </div>
                  </div>
                }
              </Toolbar>
            </AppBar>
                {isLogin &&
                    <div>
                        {renderMobileMenu}
                        {renderMenu}
                    </div>
                }
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
                  {menuList != [] &&
                  <div>
                      {menuList.map((item, index) => (
                          <ListItemLink
                              key={index}
                              href={item.url}
                          >
                              <ListItemIcon>
                                  {item.iconName === "Home" ? <HomeIcon/> :
                                      item.iconName === "Profile" ? <AccountBoxIcon/> :
                                          item.iconName === "Share" ? <FolderSharedIcon/> : <InboxIcon/>}

                              </ListItemIcon>
                              <ListItemText primary={item.name}/>
                          </ListItemLink>
                      ))}
                  </div>
                  }
              </List>
            </Drawer>

            <div style={{width: "1200px"}} >
                {children}
            </div>
            </NoSsr>
          </div>

        )
    }
}


export default withStyles(useStyles)(PageMaue)