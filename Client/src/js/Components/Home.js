var React = require('react');
var {browserHistory} = require('react-router');
var DisplayGame = require('./DisplayGame.js');
var Pager = require('./pager.js');
var HomeComponent = React.createClass({
  getInitialState: function () {
    return {
      pageGame :[],
      totalPage:10,
      activePage:1,
      pageSize:9,
      keyword:"",
      sorting:false,
      search:false
    };
  },
  paging:function(page){
    var flag = this.state.sorting;
    if(this.state.search){
      var s = this.state.keyword;
      $.ajax({
        url:'/game/find/'+s+'/'+this.state.pageSize+'/'+page,
        type: 'GET',
        success: function(data)
        {
          console.log(data);
          if((typeof data)=="string"){
            browserHistory.push('/login');
          }else{
            this.setState({activePage:page});
            this.setState({totalPage:data[data.length-1]});
            data.pop();
            this.setState({pageGame:data});

          }
        }.bind(this),
        error: function(err)
        {
          console.log(err);
        }.bind(this)
      });
      return;
    }
    if(!flag){
      $.ajax({
        url:'/game/get/'+this.state.pageSize+'/'+page,
        type: 'GET',
        success: function(data)
        {
          console.log(data);
          if((typeof data)=="string"){
            browserHistory.push('/login');
          }else{
            this.setState({activePage:page});
            this.setState({totalPage:data[data.length-1]});
            data.pop();
            this.setState({pageGame:data});
          }
        }.bind(this),
        error: function(err)
        {
          console.log(err);
        }.bind(this)
      });
    }
    else{
      $.ajax({
        url:'/game/getSort/'+this.state.pageSize+'/'+page,
        type: 'GET',
        success: function(data)
        {
          if((typeof data)=="string"){
            browserHistory.push('/login');
          }else{
            this.setState({activePage:page});
            this.setState({totalPage:data[data.length-1]});
            data.pop();
            this.setState({pageGame:data});
          }
        }.bind(this),
        error: function(err)
        {
          console.log(err);
        }.bind(this)
      });
    }
  },
  clickSort:function(){
    if(this.state.sorting){
      this.setState({sorting:false})
    }else{
      this.setState({sorting:true});
    }
    this.paging(this.state.activePage);
  },
  changeHandler:function(event){
    this.setState({keyword:event.target.value});
    //console.log(event.target.value);
  },
  runScript:function(e){
    if(e.key=='Enter'){
      if(this.state.keyword){
        this.setState({search:true});
        this.paging(1);
      }else{
        this.setState({search:false});
        this.paging(this.state.activePage);
      }
    }
  },
  render: function() {
    return (
      <div className="container-fluid">
      <div className="input-group input-group-lg">
      <input type="text" className="form-control" placeholder="Search (by name)" onChange={this.changeHandler} onKeyPress={this.runScript} ></input>
      <div className="input-group-btn">
      <button className="btn btn-default btn-lg pull-right" onClick={this.clickSort} ><span className="glyphicon glyphicon-filter" ></span></button>
      </div>
      </div>
      <DisplayGame gameObj={this.state.pageGame}/>
      <br />
      <br />
      <br />
      <Pager tP={this.state.totalPage} click={this.paging} aP={this.state.activePage} />
      <br/>
      </div>
    )
  },
  componentDidMount:function(){
    this.paging(1);
  }
});

module.exports = HomeComponent;
