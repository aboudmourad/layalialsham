import React, { Component } from 'react'
import MainMenuInput from './MainMenuInput';
import { connect } from "react-redux"
import picture from "../../store/action/PictureAction"
import MainFood from "../../pages/homePage/components/mainFood/MainFood"
import mainMenuAction from "../../store/action/mainMenuAction";
 class MainMenuPost extends Component {
    constructor(props){
        super(props);
        this.state = {
                description:"",
                title:"",
                selectedFile:null,
        }
      }
      handlePhotoChange =(event) => {
        this.setState({selectedFile:event.target.files[0]})
    }
  
    updateInputField=(event)=>{
      this.setState({[event.target.name] : event.target.value})
    }
      sendFrom=(event)=>{
        event.preventDefault();
        this.props.mainMenuAdmin(this.state)
        this.props.pictureSave(this.state.selectedFile)
      }

  render() {
    return (
        <div className="slide-adimn-section">
         <MainFood deleteHandler={this.props.deleteHandler} 
              pathname={this.props.pathname}/>
            <MainMenuInput state = {this.state} sendForm = {this.sendFrom} 
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
  }

}

const mapDispatchToProps=(dispatch)=>{ 
    return { 
        mainMenuAdmin: (data)=>dispatch(mainMenuAction(data)),
        pictureSave : (pic)=>{dispatch(picture(pic))}
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(MainMenuPost)
