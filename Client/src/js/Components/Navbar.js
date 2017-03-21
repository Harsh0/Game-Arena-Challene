var React = require('react');
var {Link} = require('react-router');

var Navbar = React.createClass({

  render: function() {
    return (
      <nav className="navbar navbar-default">
      <div style={{backgroundColor:"#f47d41"}} className="container-fluid">
      <div style={{color:'#ffffff'}} className="navbar-header">
      <a className="navbar-brand" href="/">Capillary Game Arena</a>
      </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav navbar-right">
      <li><Link style={{fontSize: 20,color:'#ffffff'}} to="/signup">SIGN UP <span className="glyphicon glyphicon-pencil"></span></Link></li>
      <li><Link style={{fontSize: 20,color:'#ffffff'}} to="/login">LOGIN <span className="glyphicon glyphicon-log-in"></span></Link></li>
      <li><Link style={{fontSize: 20,color:'#ffffff'}} to="/logout">LOGOUT <span className="glyphicon glyphicon-log-out"></span></Link></li>
      </ul>
      </div>
      </div>
      </nav>
    )
  }
});

module.exports = Navbar;
