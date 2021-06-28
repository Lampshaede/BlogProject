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
    url: 'https://discord.gg/8y5fE4wm4M',
    local: false,
  },
  {
    name: 'Instagram',
    path: 'https://cdn.discordapp.com/attachments/303544651200331776/858907320061919272/Instagram_Glyph_Gradient_RGB.png',
    url: 'https://www.instagram.com/lampshaede/',
    local: false,
  },
]
  return (
    <Container className={classes.center}>
      <Typography variant="h2" >
        Contact
      </Typography>
      <Typography variant="h6" >
        Hi! If you want to contact feel free to send me a message on Instagram or Join my Discord server!
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