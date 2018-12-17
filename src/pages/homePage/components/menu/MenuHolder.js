import React, { Component } from 'react'
import { storage } from "../../../../server/fbConfig"

class MenuHolder extends Component {
    constructor(props){
        super(props);
           this.state={
               urlImage:null
             }
    }
    
  componentDidMount=()=>{
    const pic = this.props.x.newMenu
    storage.ref('image').child(pic && pic.picture).getDownloadURL().then(url=>{
      if(url){
        this.setState({urlImage:url})
         }
        })
    }
   
  render() {
   const pathname = this.props.pathname;
    const x = this.props.x.newMenu;
    const id = this.props.x.id;
    const picName=this.props.x.newMenu.picture;
    const menu = "menu"
  return (
     <div className="col-md-3 menu-grid" >
         <img src={this.state.urlImage} className="img-responsive" id="menu" alt="" />
             <div className="menu-info">
                  <h4>{x && x.price}.<sup>99</sup></h4>
                     <h5>{x && x.title}.</h5>
                     {pathname === "/admin"?
                        <button type="button" className="btn btn-warning btn-circle"
                            onClick={event => {
                              this.props.deleteHandler(event, id, picName, menu);
                             }}><b>X</b>
           
					              </button>:null}
            </div>
      </div>
  )
  }
}

export default MenuHolder


