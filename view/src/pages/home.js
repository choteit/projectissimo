import React, {Component} from 'react';
//import axios from 'axios';

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import withStyles from '@material-ui/core/styles/withStyles';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import NotesIcon from '@material-ui/icons/Notes';
import Avatar from '@material-ui/core/avatar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CircularProgress from '@material-ui/core/CircularProgress';
import JumboCard from '../components/jumbotron';

const drawerWidth = 240;

const styles = (theme) => ({
    root: {
        display: 'flex'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    },
    avatar: {
        height: 110,
        width: 100,
        flexShrink: 0,
        flewGrow: 0,
        marginTop: 20
    },
    uiProgress: {
        position: 'fixed',
        zIndex: '1000',
        height: '31px',
        width: '31px',
        left: '50%',
        top: '35%'
    },
    toolbar: theme.mixins.toolbar
});

class home extends Component {
    state = {
        render: false
    };

    loadAccountPage = (event) => {
        this.setState({render: true});
    };

    loadTodoPage = (event) => {
        this.setState({render: false});
    };

    logoutHandler = (event) => {
        localStorage.removeItem('AuthToken');
        this.props.history.push('/login');
    };

    constructor(props) {
        super(props);

        this.state = {
            firstName: 'Camille',
            lastName: 'Hoteit',
            profilePicture: 'None',
            uiLoading: false,
            imageLoading: false
        };
    }

    render() {
        const {classes} = this.props;
        if (this.state.uiLoading === true) {
            return (
                <div className={classes.root}>
                    {this.sate.uiLoading && <CircularProgress size={150} className={classes.uiProgress}/>}
                </div>
            );
        } else {
            return (
                <div className={classes.root}>
                    {/* <div>
                        <CssBaseline/>
                        <AppBar position="fixed" className={classes.appBar}>
                            <Toolbar>
                                <Typography variant="h6" noWrap>
                                    Projectoo
                                </Typography>
                            </Toolbar>
                        </AppBar>
                    </div> */}
                    <div>
                        <JumboCard/>
                    </div>
                    {/*<Drawer*/}
                    {/*className={classes.drawer}*/}
                    {/*variant="permanent"*/}
                    {/*classes={{*/}
                    {/*paper:classes.drawerPaper*/}
                    {/*}}*/}
                    {/*>*/}
                    {/*<div className={classes.toolbar} />*/}
                    {/*<Divider />*/}
                    {/*<center>*/}
                    {/*<Avatar src={this.state.profilePicture} className={classes.avatar}/>*/}
                    {/*<p>*/}
                    {/*{' '}*/}
                    {/*{this.state.firstName} {this.state.lastName}*/}
                    {/*</p>*/}
                    {/*</center>*/}
                    {/*<Divider/>*/}
                    {/*<List>*/}
                    {/*<ListItem>*/}
                    {/*<ListItemIcon>*/}
                    {/*{' '}*/}
                    {/*<NotesIcon /> {' '}*/}
                    {/*</ListItemIcon>*/}
                    {/*<ListItemText primary={"Todo"}/>*/}
                    {/*</ListItem>*/}
                    {/*<ListItem>*/}
                    {/*<ListItemIcon>*/}
                    {/*{' '}*/}
                    {/*<AccountBoxIcon /> {' '}*/}
                    {/*</ListItemIcon>*/}
                    {/*<ListItemText primary={"Account"}/>*/}
                    {/*</ListItem>*/}
                    {/*<ListItem>*/}
                    {/*<ListItemIcon>*/}
                    {/*{' '}*/}
                    {/*<ExitToAppIcon /> {' '}*/}
                    {/*</ListItemIcon>*/}
                    {/*<ListItemText primary={"Logout"}/>*/}
                    {/*</ListItem>*/}
                    {/*</List>*/}
                    {/*</Drawer>*/}
                </div>

            );
        }
    }


}

export default withStyles(styles)(home);