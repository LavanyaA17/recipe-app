import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from './Home';
import { About } from './About';
import Recipes  from './Recipes';
import { Contact } from './Contact';
import Sidebar from './components/Sidebar';
import { FooterContainer } from './containers/footer';

function App() {
  return (
    <div className="App">
      <React.Fragment>
      <Router>
      <NavigationBar />
      <Sidebar />
      <Switch>
     <Route exact path="/" component={Home} />
     <Route path="/recipes" component={Recipes} />
     <Route path="/about" component={About} />
     <Route path="/contact" component={Contact} />
     </Switch>
     <FooterContainer />
      </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
