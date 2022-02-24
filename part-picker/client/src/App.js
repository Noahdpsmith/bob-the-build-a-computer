import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage.js';
import About from './components/About.js';
import Newbuild from './components/Newbuild.js';
import MyBuilds from './components/MyBuilds.js';
import Parts from './components/Parts.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
// import Cpu from './components/part_components/Cpu';
// import Ram from './components/part_components/Ram';
// import Motherboard from './components/part_components/Mobo';
// import Gpu from './components/part_components/Gpu';
// import St0rage from './components/part_components/St0rage';
// import Psu from './components/part_components/Psu';
// import Case from './components/part_components/Case';
// import Cooler from './components/part_components/Cooler';
// import Accessories from './components/part_components/Accessories';
// import Fan from './components/part_components/Fan';
// import LoginRegister from './components/LoginRegister.js';

import { BuildContextProvider } from './components/context/BuildContext';

import SignInForm from './components/SignInForm/index';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <BuildContextProvider>
    <Router>

      <Header/>

        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/about' component={About} />
          <Route exact path='/newbuild' component={Newbuild} />
          <Route exact path='/mybuilds' component={MyBuilds} />
          <Route exact path='/login' component={SignInForm} />
          <Route exact path='/parts' component={Parts} />
          

        </Switch>

      <Footer/>

    </Router>
    </BuildContextProvider>
    </ApolloProvider>
  );
}

export default App;



        
              // <Route exact path='/parts/cpu' component={Cpu} />
              // <Route exact path='/parts/ram' component={Ram} />
              // <Route exact path='/parts/motherboard' component={Motherboard} />
              // <Route exact path='/parts/gpu' component={Gpu} />

              //    {/* note: storage is spelled with a '0' rather than an 'o' to prevent react from trying to implement local-storage or other types of storage */}
              //    {/* storage component will be for hdd and ssd */}

              // <Route exact path='/parts/storage' component={St0rage} />
              // <Route exact path='/parts/psu' component={Psu} />
              // <Route exact path='/parts/case' component={Case} />
              // <Route exact path='/parts/cooler' component={Cooler} />
              // <Route exact path='/parts/accessories' component={Accessories} />
              // <Route exact path='/parts/fan' component={Fan} />
              
              
              
              
        //       <Route
        //   path="/parts"
        //   render={({ match: { url } }) => (
        //     <>
        //       <Route path={`${url}/`} component={Parts} exact/>
        //       <Route path={`${url}/cpu`} component={Cpu} />
        //       <Route path={`${url}/gpu`} component={Gpu} />
        //       <Route path={`${url}/ram`} component={Ram} />
        //       <Route path={`${url}/motherboard`} component={Motherboard} />
        //         {/* note: storage is spelled with a '0' rather than an 'o' to prevent react from trying to implement localstorage or other types of storage */}
        //         {/* storage component will be for hdd and ssd */}
        //       <Route path={`${url}/storage`} component={St0rage} />
        //       <Route path={`${url}/psu`} component={Psu} />
        //       <Route path={`${url}/case`} component={Case} />
        //       <Route path={`${url}/cooler`} component={Cooler} />
        //       <Route path={`${url}/accessories`} component={Accessories} />
        //       <Route path={`${url}/fan`} component={Fan} />
        //     </>
        //   )}
        // />