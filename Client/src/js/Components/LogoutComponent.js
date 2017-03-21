var React = require('react');
var {browserHistory}= require ('react-router');
var LogoutComponent = React.createClass({

  logout(){
    $.ajax({
      url:'/logout',
      type: 'GET',
      success: function(data)
      {
       if(data="logged out"){
          browserHistory.push('/');
       }
      }.bind(this),
      error: function(err)
      {
        console.log(err);
      }.bind(this)
    });
  },
  componentDidMount:function(){
    this.logout();
  },
  render : function () {
    return(
      <div>
      <h3>you will be logout in some second if not please click <a onClick={this.logout} >here</a> to logout.</h3>
      </div>
    )
  }
});

module.exports = LogoutComponent;
