import './App.css';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Discord from './components/Discord';
import WebDevOverview from './components/WebDevOverview';
import PasswordManagement from './components/PasswordManagement';
import ContactPage from './components/ContactPage';
import AboutMe from './components/AboutMe';
import HomePage from './components/HomePage';
import ObjectsPage from './components/ObjectsPage';
import SSL from './components/SSL';
import Learning from './components/Learning';
import Rifter from './components/Rifter';
function App() {
  
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route path='/discord'>
        <Discord />
      </Route>
      <Route path='/blog-post-0'>
        <Learning />
      </Route>
      <Route path='/blog-post-1'>
        <WebDevOverview />
      </Route>
      <Route path='/blog-post-2'>
        <PasswordManagement />
      </Route>
      <Route path='/blog-post-3'>
        <ObjectsPage />
      </Route>
      <Route path='/blog-post-4'>
        <SSL />
      </Route>
      <Route path='/blog-post-5'>
        <Rifter />
      </Route>
      <Route path='/contact'>
        <ContactPage />
      </Route>
      <Route path='/about'>
        <AboutMe />
      </Route>
    </Switch>  
    </>  
      
  );
}

export default App;
