import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './components/About';
import Newbuild from './components/Newbuild';
import MyBuilds from './components/MyBuilds';
import Parts from './components/Parts';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/about' component={About} />
        <Route exact path='/newbuild' component={Newbuild} />
        <Route exact path='/mybuilds' component={MyBuilds} />
        <Route exact path='/parts' component={Parts} />
      </Switch>
    </Router>
  );
}

export default App;
