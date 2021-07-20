import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoMatch from "./pages/NoMatch"
import Contact from "./pages/Contact"
import Main from "./pages/Main"
import Footer from "./components/Footer"

const App = () => {
  return (
      <Router>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/contact" component={Contact} />
              <Route render={NoMatch} />
            </Switch>
          <Footer />
      </Router>
  );
};

export default App;
