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
      flexFlow: 'row wrap',
    },
    center: {
      textAlign: 'center',
    },
  });
  const classes = useStyles();

  const blogPosts = [{
    name: 'Password Management',
    path: 'https://cdn.discordapp.com/attachments/303544651200331776/858723371495194654/screen-lock-portrait_118698.png',
    url: '/blog-post-2',
    local: true,
  },
  {
    name: 'Web Development Overview',
    path: 'https://cdn.discordapp.com/attachments/303544651200331776/858724186817560576/img_565446.png',
    url: '/blog-post-1',
    local: true,
  },
  {
    name: 'Objects Example Walkthrough',
    path: 'https://cdn.discordapp.com/attachments/303544651200331776/858724186817560576/img_565446.png',
    url: '/blog-post-3',
    local: true,
  },
  {
    name: 'About Me',
    path: 'https://cdn.discordapp.com/attachments/303544651200331776/858750651177631764/assignment_ind1.png',
    url: '/about',
    local: true,
  },
  {
    name: 'Discord Demo',
    path: 'https://cdn.discordapp.com/attachments/303544651200331776/858752106822631424/format_color_fill1.png',
    url: '/discord',
    local: true,
  },
  {
    name: 'Contact',
    path: 'https://cdn.discordapp.com/attachments/303544651200331776/858750647909089290/contact_page1.png',
    url: '/contact',
    local: true,
  },
]
  return (
    <Container className={classes.center}>
      <Typography variant="h2" >
        Home
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