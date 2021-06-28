import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import SubjectIcon from '@material-ui/icons/Subject';
import Collapse from '@material-ui/core/Collapse';
import FormatColorFillRoundedIcon from '@material-ui/icons/FormatColorFillRounded';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import CodeIcon from '@material-ui/icons/Code';
import ScreenLockPortraitIcon from '@material-ui/icons/ScreenLockPortrait';
import CreateIcon from '@material-ui/icons/Create';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});
export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  
  const handleClick = () => {
    setOpen(!open);
  };
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = () => (
    <div
      onKeyDown={toggleDrawer('right', false)}
    >

      
      
      <List>
      <ListItem component={Link} to='/' button key={'Home'}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
            <ListItemText primary={'Home'} />
        </ListItem>
      </List>
      <Divider />
      <List>
      <ListItem component={Link} to='/about' button key={'About Me'}>
        <ListItemIcon>
          <AssignmentIndIcon />
        </ListItemIcon>
            <ListItemText primary={'About Me'} />
        </ListItem>
        <ListItem component={Link} to='/discord' button key={'Discord Demo'}>
        <ListItemIcon>
          <FormatColorFillRoundedIcon />
        </ListItemIcon>
            <ListItemText primary={'Discord Demo'} />
        </ListItem>
        <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Blog Posts" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem component={Link} to='/blog-post-0' button className={classes.nested}>
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText primary="Learning" />
          </ListItem>
          <ListItem component={Link} to='/blog-post-2' button className={classes.nested}>
            <ListItemIcon>
              <ScreenLockPortraitIcon />
            </ListItemIcon>
            <ListItemText primary="Passwords" />
          </ListItem>
          <ListItem component={Link} to='/blog-post-1' button className={classes.nested}>
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText primary="WebDev Brief" />
          </ListItem>
          <ListItem component={Link} to='/blog-post-3' button className={classes.nested}>
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText primary="Objects Demo" />
          </ListItem>
          <ListItem component={Link} to='/blog-post-4' button className={classes.nested}>
            <ListItemIcon>
              <ScreenLockPortraitIcon />
            </ListItemIcon>
            <ListItemText primary={`SSL & TLS`} />
          </ListItem>
          <ListItem component={Link} to='/blog-post-5' button className={classes.nested}>
            <ListItemIcon>
              <SportsEsportsIcon />
            </ListItemIcon>
            <ListItemText primary={`Rifter`} />
          </ListItem>
        </List>
      </Collapse>
      <ListItem component={Link} to='/contact' button key={'Contact'}>
        <ListItemIcon>
          <SubjectIcon />
        </ListItemIcon>
            <ListItemText primary={'Contact'} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {
        <React.Fragment key={'right'}>
          <Button onClick={toggleDrawer('menuDrawer', true)}>{<IconButton edge="end" aria-label="menu">
          <MenuIcon style={{ color: '#ffffff' }}/>
          </IconButton>}</Button>
          <Drawer anchor={'right'} open={state['menuDrawer']} onClose={toggleDrawer('menuDrawer', false)}>
            {list('right')}
          </Drawer>
        </React.Fragment>
      }
    </div>
  );
}