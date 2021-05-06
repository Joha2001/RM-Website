import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Navigation from './components/Navigation/Navigation.js'
import Contact from './components/Contact/Contact.js';
import WorkP from './components/Work/WorkP.js';
import WorkV from './components/Work/WorkV.js';
import BottomBar from './components/BottomBar/BottomBar.js';
class App extends Component { // Nothing needs to be changed here unless adding new pages.
  render() {
    return (      
      <BrowserRouter>
        <Navigation />
          <Switch>
           <Route path="/" component={Home} exact/>
           <Route path="/About" component={About}/>
           <Route path = "/Contact" component={Contact}/>
           <Route path ="/WorkP" component={WorkP}/>
           <Route path ="/WorkV" component={WorkV}/>
         </Switch>
         <BottomBar />
    </BrowserRouter>
    );
  }
}

export default App;