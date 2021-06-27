import Container from '@material-ui/core/Container';
import MediaCard from './MediaCard';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
const HomePage = () => {

  const useStyles = makeStyles({
    container: {
      display: 'flex',
      alignItems: 'center', 
      justifyContent: 'space-around',
    },
    center: {
      textAlign: 'center',
    },
  });
  const classes = useStyles();

  const blogPosts = [{
    name: 'Discord',
    path: 'https://cdn.discordapp.com/attachments/303544651200331776/858715171147743232/Discord-Logo-Color.png',
    url: 'https://discordapp.com',
    local: false,
  },
]
  return (
    <Container className={classes.center}>
      <Typography variant="h2" >
        Contact
      </Typography>
  <Container className={classes.container}>
    {blogPosts.map((post) => {
      return (<MediaCard serviceName={post.name} serviceImgPath={post.path} serviceURL={post.url} key={post.name} local={post.local}/>)
    })}
  </Container>
  </Container>
    );
}

export default HomePage;