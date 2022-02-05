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
        {/* <Route exact path='/parts' component={Parts} /> */}
        <Route
          path="/parts"
          render={({ match: { url } }) => (
            <>
              <Route path={`${url}/`} component={Parts} exact/>
              <Route path={`${url}/cpu`} component={Cpu} />
              <Route path={`${url}/gpu`} component={Gpu} />
              <Route path={`${url}/ram`} component={Ram} />
              <Route path={`${url}/motherboard`} component={Motherboard} />
                {/* note: storage is spelled with a '0' rather than an 'o' to prevent react from trying to implement localstorage or other types of storage */}
                {/* storage component will be for hdd and ssd */}
              <Route path={`${url}/storage`} component={St0rage} />
              <Route path={`${url}/psu`} component={Psu} />
              <Route path={`${url}/case`} component={Case} />
              <Route path={`${url}/cooler`} component={Cooler} />
              <Route path={`${url}/accessories`} component={Accessories} />
              <Route path={`${url}/fan`} component={Fan} />
            </>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
