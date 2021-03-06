import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {navigate} from '@reach/router';

const useStyles = makeStyles((theme) => ({
root: {
    flexGrow: 1,
},
menuButton: {
    marginRight: theme.spacing(2),
},
title: {
    flexGrow: 1,
},
}));

const Header = () => {
const classes = useStyles();

return (
    <div className={classes.root}>
    <AppBar position="static">
        <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
        </IconButton>
        <Typography style={{cursor: "pointer"}} onClick={e => navigate("/")} variant="h6" className={classes.title}>
            Authors
        </Typography>
        <Button color="inherit" onClick={e => navigate("/new")} >New</Button>
        </Toolbar>
    </AppBar>
    </div>
);
}

export default Header
