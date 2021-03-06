import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import Drawer from './Drawer';
import { Link } from 'react-router-dom';
import LampLogo from "./LampLogo";


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
})); // This seems overkill for what I'm using it for but it seems useful and I might use it later

const Navbar = (props) => {
  const classes = useStyles();
  // function copied almost verbatim from example, I have no idea how or why it works
  function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.

    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  return (
    <HideOnScroll {...props}>
      <AppBar position="sticky">
        <ToolBar>
        <IconButton edge="start" component={Link} to='/' className={classes.menuButton} color="inherit" aria-label="menu">
            <LampLogo />
          </IconButton>
          <Typography variant="h6" className={classes.title}><Link to='/' style={{color: '#ffffff',  textDecoration: "none"}}>Luke's Amazing Website</Link></Typography>
          <IconButton component={Drawer} edge="end" color="inherit" aria-label="menu">
          </IconButton>
        </ToolBar>
      </AppBar>
    </HideOnScroll>
  );
};
export default Navbar;
