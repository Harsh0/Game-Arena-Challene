import React from 'react';
import axios from 'axios';

export default class ImageUplaod extends React.Component {
    constructor(props) {
        super(props);
        this.state ={ allFiles: [],
          dimmerstate:false};
    }
    componentDidMount = ()=>{
       axios.get('/alldata').then(function(response) {
          console.log(response.data)
            }.bind(this)).catch(function(error) {
                //console.log(error);
                if (error) {}
            });
    }
   
   render() {
    return (
      <div>
      </div>
      )
   }
 }
