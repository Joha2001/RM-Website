import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Navigation from './components/Navigation/Navigation.js'
import Contact from './components/Contact/Contact.js';
import Work from './components/Work/Work.js';
class App extends Component {
  render() {
    return (      
      <BrowserRouter>
        <Navigation />
          <Switch>
           <Route path="/" component={Home} exact/>
           <Route path="/About" component={About}/>
           <Route path = "/Contact" component={Contact}/>
           <Route path ="/Work" component={Work}/>
         </Switch>
    </BrowserRouter>
    );
  }
}

export default App;