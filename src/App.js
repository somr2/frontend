// @flow
import React, { Component } from 'react';
// import './App.css';
import HeaderNav from './Containers/HeaderNav'
import CoverPhoto from './Containers/CoverPhoto'
import Product from './Containers/Product'
import ProductListing from './Containers/ProductListing'
import { BrowserRouter as Router, Route } from "react-router-dom";

// main component for final integration
class App extends Component<Props, State> {

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            {/* home paage */}
            <Route path="/" component={HeaderNav} />
            <Route exact path="/" component={CoverPhoto} />
            <Route exact path="/" component={ProductListing} />

            {/* product page */}
            <Route exact path="/necklace/:item_id" component={Product} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
