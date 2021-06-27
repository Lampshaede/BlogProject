import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import { Link } from 'react-router-dom';

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
  img: {
    maxWidth: '100%',
    height: 'auto',
  }
});

const MediaCard = ({serviceName, serviceImgPath, serviceURL, local}) => {
  const classes=useStyles();
let imageComponent;
console.log(local);
  if(local){
    imageComponent = (<Link to={serviceURL}>
      <img className={classes.img} src={serviceImgPath} alt={`${serviceName} Icon`} />
      </Link>);
  } else {
    imageComponent = (<a href={serviceURL}>
        <img className={classes.img} src={serviceImgPath} alt={`${serviceName} Icon`} />
        </a>);
  }

  return (
    <Card className={classes.root} >
      <CardContent style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Typography className={classes.title} component={Link} href={serviceURL}  gutterBottom>
          {serviceName}
        </Typography>
      </CardContent>
      <CardActions style={{  alignItems: 'center',
  justifyContent: 'center'}}>
      {imageComponent}
      </CardActions>
    </Card>
  )
}
export default MediaCard;