import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link, Typography } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 300,
    minHeight: 275,
    maxHeight: 300,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    
  },
  pos: {
    marginBottom: 12,
  },  
});

const MediaCard = ({serviceName, serviceImgPath, serviceURL}) => {
  const classes=useStyles();

  return (
    <Card className={classes.root} >
      <CardContent style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Typography className={classes.title} component={Link} href={serviceURL}  gutterBottom>
          {serviceName}
        </Typography>
      </CardContent>
      <CardActions style={{  alignItems: 'center',
  justifyContent: 'center'}}>
    <a href={serviceURL}>
      <img src={serviceImgPath} alt={`${serviceName} Icon`} />
      </a>
      </CardActions>
    </Card>
  )
}
export default MediaCard;