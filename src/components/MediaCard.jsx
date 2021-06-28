import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    maxWidth: 300,
    minHeight: 300,
    maxHeight: 300,
    marginLeft: '20px',
    marginTop: '20px',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000000',
    textDecoration: 'none',
  },
  pos: {
    marginBottom: 12,
  }, 
  img: {
    minHeight: '150px',
    minWidth: '150px',
    maxHeight: '225px',
    maxWidth: '225px', 
    objectFit: 'fill',
  }
});

const MediaCard = ({serviceName, serviceImgPath, serviceURL, local}) => {
  const classes=useStyles();
let imageComponent;
let textComponent;
console.log(local);
  if(local){
    imageComponent = (<Link to={serviceURL}>
      <img className={classes.img} src={serviceImgPath} alt={`${serviceName} Icon`} />
      </Link>);
    textComponent = (<Typography className={classes.title} component={Link} to={serviceURL} gutterBottom>
      {serviceName}
    </Typography>)
  } else {
    imageComponent = (<a href={serviceURL}>
        <img className={classes.img} src={serviceImgPath} alt={`${serviceName} Icon`} />
        </a>);
    textComponent = (<Typography className={classes.title} gutterBottom>
      <a href={serviceURL}>
      {serviceName}
      </a>
    </Typography>);
  }

  return (
    <Card className={classes.root} >
      <CardContent style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      {textComponent}
      </CardContent>
      <CardActions style={{  alignItems: 'center',
  justifyContent: 'center'}}>
      {imageComponent}
      </CardActions>
    </Card>
  )
}
export default MediaCard;