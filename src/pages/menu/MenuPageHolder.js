import { storage } from "../../server/fbConfig"

import React, { Component } from 'react'


class MenuPageHolder extends Component {
    constructor(props){
    super(props);
    this.state={
      urlImage:null
    }

    }


  componentDidMount=()=>{
    storage.ref('image').child(this.props.value.picture).getDownloadURL().then(url=>{
      if(url){
        this.setState({urlImage:url})
      }
        
  })
}
  render() {
  
    const value= this.props.value
  
      return (
      <div className="menu-grids wow bounceIn animated" data-wow-delay="0.4s" >
           <div className="col-md-3 menu-grid"  >
        <img src={this.state.urlImage} className="img-responsive" alt="" />
          <div className="menu-info">
            <h4>{value.price}.<sup>99</sup></h4>
            <h5>{value.title}.</h5>
          </div>
      </div>
      </div>
    )
  }
}


export default MenuPageHolder


