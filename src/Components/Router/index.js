import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/details/:id" component={Details} />
   
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2> 
    <Test item={1}/>
    <Test item={2}/>   
  </div>
);



const Details = () => (
  <div>
    <h2>Product Details</h2>
  </div>
);


class Test extends React.Component {
    state = {
        redirect: false
    }
    
    handleOnClick = () => {
        this.setState({redirect: true});
    }
    
    render() {
        console.log(this.state)
        if (this.state.redirect) {
            return <Redirect push to={`/details/${this.props.item}`} />;
        }
        
        return <div onClick={this.handleOnClick}>I am a product</div>;
    }
}




export default BasicExample;