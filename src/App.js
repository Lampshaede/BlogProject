import './App.css';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Discord from './components/Discord';
import WebDevOverview from './components/WebDevOverview';
import PasswordManagement from './components/PasswordManagement';
import MediaCard from './components/MediaCard';
import AboutMe from './components/AboutMe';

function App() {
  const blogPosts = [{
    name: 'Password Management',
    path: 'https://cdn.discordapp.com/attachments/303544651200331776/858723371495194654/screen-lock-portrait_118698.png',
    url: '/blog-post-2'
  },
  {
    name: 'Web Development Overview',
    path: 'https://cdn.discordapp.com/attachments/303544651200331776/858724186817560576/img_565446.png',
    url: '/blog-post-1'
  }
]
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path='/'>
        {blogPosts.map((post) => {
          return (<MediaCard serviceName={post.name} serviceImgPath={post.path} serviceURL={post.url} key={post.name}/>)
        })}
      </Route>
      <Route path='/discord'>
        <Discord />
      </Route>
      <Route path='/blog-post-1'>
        <WebDevOverview />
      </Route>
      <Route path='/blog-post-2'>
        <PasswordManagement />
      </Route>
      <Route path='/contact'>
        <MediaCard serviceName="Discord" serviceImgPath="https://cdn.discordapp.com/attachments/303544651200331776/858715171147743232/Discord-Logo-Color.png" serviceURL="https://discordapp.com" />
      </Route>
      <Route path='/about'>
        <AboutMe />
      </Route>
    </Switch>  
    </>  
      
  );
}

export default App;
