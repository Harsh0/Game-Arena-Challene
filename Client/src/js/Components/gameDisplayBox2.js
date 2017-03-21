var React=require('react');

var GameDisplayBox=React.createClass({
  render: function(){

    return (
      <div  className="dcpp col-md-4">
      <div className="dcp">
      <div className="pull-right">
      {this.props.gameObj.editors_choice=='Y'?<span className="glyphicon glyphicon-star"></span>:""}
      </div>
      <div className="dataContainer">
      <div>
      <img src="./css/images.jpg" className="img-rounded" alt="Balcony & Outdoor Furniture"></img>
      </div>
      <div className="info">
      <div>
      <h3>{this.props.gameObj.title}</h3>
      <h4>{this.props.gameObj.platform}</h4>
      </div>
      </div>
      </div>
      <div className="genereDesc">
      Genere : {this.props.gameObj.genre}
      <div className="pull-right score">
      {this.props.gameObj.score}
      </div>
      </div>
      </div>
      </div>
      );
    }
  });

  module.exports=GameDisplayBox;
