var React = require('react');
var GameDisplayBox = require('./gameDisplayBox2.js');

var Displaygame = React.createClass({
  render : function () {
    var gameArray = this.props.gameObj.map(function(game) {
      return(
        <GameDisplayBox gameObj={game} />
      )
    });
    return(
      <div className="row">
      {gameArray}
      </div>
    )
  }
});

module.exports = Displaygame;
