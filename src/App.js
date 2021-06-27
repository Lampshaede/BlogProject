import './App.css';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Discord from './components/Discord';
import WebDevOverview from './components/WebDevOverview';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path='/'>
        <span>Hello, this is home</span>
      </Route>
      <Route path='/discord'>
        <Discord />
      </Route>
      <Route path='/blog-post-1'>
        <WebDevOverview />
      </Route>
    </Switch>  
    </>  
      
  );
}

export default App;
