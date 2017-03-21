var React = require('react');
var Footer = React.createClass({

  render : function(){
    return(
        <footer style={{backgroundColor : '#4286f4'}} className="footer">
          <div style={{color:'#ffffff'}} className="container">
            <div className="row">
              <div className="col-sm-3">
                <h5>Copyright &copy; 2017</h5>
                <h5>Game Arena</h5>
              </div>
              <div className="col-sm-5">
                <h5>About Us</h5>
                <p>We provide the best solution to manage</p>
                <p>all your Games..!!</p>
                </div>
                <div className="col-sm-2">
                  <h5>Follow Us</h5>
                    <span className="fa fa-facebook-official"></span>&emsp;
                    <span className="fa fa-twitter"></span>&emsp;
                    <span className="fa fa-instagram"></span>&emsp;
                    <span className="fa fa-youtube-play"></span>&emsp;
                </div>
                <div className="col-sm-2">
                  <h6>Coded  With  <span className="glyphicon glyphicon-heart"></span>  by  Harsh</h6>
                </div>
              </div>
            </div>
          </footer>
    );
  }
});

module.exports = Footer;
