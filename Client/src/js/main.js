var React = require('react');
var ReactDOM = require('react-dom');
var {browserHistory, Route, Router, IndexRoute,hasHistory} = require('react-router');
var HomeComponent = require('./Components/Home.js');
var LoginComponent = require('./Components/LoginComponent.js');
var SignupComponent = require('./Components/Signup.js');
var LogoutComponent = require('./Components/LogoutComponent.js');
var Navbar = require('./Components/Navbar.js');
var Footer = require('./Components/Footer.js');

var MainComponent = React.createClass({
  render:function(){
    return (
      <div>
      <Navbar />
      {this.props.children}
      <br />
      <Footer />
      </div>
    );
  }
});
//when the method is called, this method gets instantiated, and returns the virtual DOM. after getting V DOM, it renders and display this div tagfrom index.
ReactDOM.render(
  <Router history = {browserHistory}>
  <Route path="/" component={MainComponent}>
  <IndexRoute component={HomeComponent}/>
  <Route path="/about" component={LogoutComponent}/>
  <Route path="/home" component={HomeComponent}/>
  <Route path="/signup" component={SignupComponent}/>
  <Route path="/login" component={LoginComponent}/>
  <Route path="/logout" component={LogoutComponent}/>
  </Route>
  </Router>,document.getElementById('app'));
