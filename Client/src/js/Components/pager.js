var React = require('react');
var Pager = React.createClass({
  render : function(){
    var pageArray = [];
    for(let i=1;i<=this.props.tP;i++){
      if(i==this.props.aP){
        pageArray.push(
          <li className="active"><a onClick={this.props.click.bind(this,i)} >{i}</a></li>
        );
      }else{
        pageArray.push(
          <li><a onClick={this.props.click.bind(this,i)} >{i}</a></li>
        );
      }
    }
    return (
      <ul className="pagination pagination-lg">
        {pageArray}
      </ul>
    );
  }
});

module.exports = Pager;
