import './App.css';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Discord from './components/Discord';

function App() {
  return (
    <Route>
        <Navbar />
      <Switch exact path='/'>

      </Switch>
      <Switch exact path='/discord'>
        <Discord />
      </Switch>
    </Route>    
      
  );
}

export default App;
