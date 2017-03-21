var React = require('react');
var {browserHistory}= require ('react-router');
var LoginComponent = React.createClass({
checkUser:function(){
  var userObj={"username":this.refs.userName.value,"password":this.refs.passWord.value};
  $.ajax({
    url:'/login',
    type: 'POST',
    data:userObj,
    dataType:"JSON",
    success: function(data)
    {
   console.log("Ajax login success");
     browserHistory.push('/');
    }.bind(this),
    error: function(err)
    {
      console.log(err);
    }.bind(this)
  });
},
render : function () {
  return(
    <div className="container">
        <h1 className="form-signin-heading">Please LOGIN</h1>
        <div className="input-group input-group-lg">
            <span className="input-group-addon">Username</span>
            <input type="text" ref='userName' className="form-control"></input>
        </div>
        <br></br>
        <div className="input-group input-group-lg">
            <span className="input-group-addon">Password</span>
            <input type="password" ref='passWord' className="form-control"></input>
        </div>
        <br></br>
        <button onClick={this.checkUser} className="btn btn-lg btn-primary btn-block">LOGIN</button>
        <br></br>
    </div>
  )
}
});

module.exports = LoginComponent;
