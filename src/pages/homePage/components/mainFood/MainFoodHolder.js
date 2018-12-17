import React, { Component } from 'react'
import { storage } from "../../../../server/fbConfig"

class MainFoodHolder extends Component {
    constructor(props){
        super(props);
           this.state={
               urlImage:null
             }
    }
    componentDidMount=()=>{
        const pic =this.props.value.newMainMenu.picture
        storage.ref('image').child(pic).getDownloadURL().then(url=>{
          if(url){
            this.setState({urlImage:url})
             }
            })
        }
      

  render() {
     
    const pathname = this.props.pathname;
    const id = this.props.value.id
    const value = this.props.value.newMainMenu
    const picName = value.picture
    const mainDishes = "mainDishes"
    return (
           <div className="view view-fourth" > 
                  <img src={this.state.urlImage} alt="foodImage"/>
                      <div className="mask">
                          <h2>{value.title}</h2>
                          <p>{value.description}</p>
                          {pathname === "/admin"? 
                          <button type="button" className="btn btn-warning btn-circle"
                            onClick={event => {
                              this.props.deleteHandler(event, id, picName, mainDishes);
                             }}><b>X</b>
           
					              </button>:null}
                      </div>
                   
          </div>
    )
  }
}


  export default MainFoodHolder
