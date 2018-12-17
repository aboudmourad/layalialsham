import React, { Component } from 'react'
import menu from "../../store/action/menuAction"
import { connect } from "react-redux"
import Menu from '../../pages/homePage/components/menu/Menu';
import picture from "../../store/action/PictureAction"
import MenuHolder from './MenuHolder';

class MenuPost extends Component {
    constructor(props){
        super(props);
        this.state = {
                price:"",
                title:"",
                selectedFile:null,
        }
      }
      handlePhotoChange =(event) => {
        console.log(event.target.files[0])
        this.setState({selectedFile:event.target.files[0]})
    }
  
    updateInputField=(event)=>{
      this.setState({[event.target.name] : event.target.value})
    }
      sendFrom=(event)=>{
        event.preventDefault();
        this.props.menuAdmin(this.state)
        this.props.pictureSave(this.state.selectedFile)
      }

  render() {
    return (
        <div className="slide-adimn-section">
          <Menu deleteHandler={this.props.deleteHandler} 
              pathname={this.props.pathname}/>

            <MenuHolder state = {this.state} sendForm = {this.sendFrom} 
                  updateInputField={this.updateInputField}
                    handlePhotoChange={this.handlePhotoChange}
                      pictureProgess={this.props.pictureProgess}
                       pictureError={this.props.pictureError}/>
                       
        </div>

    )
  }
}
const mapStateToProps=(state)=>{
  return {
    pictureProgess :state.picture.progress,
    pictureError : state.picture.error,
    menuResponse : state.menu.menu
  }

}

const mapDispatchToProps=(dispatch)=>{ 
    return { 
      menuAdmin : (data)=>dispatch(menu(data)),
      pictureSave : (pic)=>{dispatch(picture(pic))}
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(MenuPost)