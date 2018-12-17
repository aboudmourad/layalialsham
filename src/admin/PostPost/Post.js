import React, { Component } from 'react'
import { connect } from "react-redux"
import picture from "../../store/action/PictureAction"
import post from "../../store/action/PostAction";
import Testimonials from '../../pages/homePage/components/testimonial/Testimonials';
import PostInput from './PostInput';
class Post extends Component {
  constructor(props){
    super(props);
      this.state = {
                name:"",
                price:"",
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
          this.props.post(this.state)
            this.props.pictureSave(this.state.selectedFile)
      }

  render() {
    const pathname = this.props.pathname;
    return (
        <div className="slide-adimn-section">
         <Testimonials deleteHandler={this.props.deleteHandler} pathname={pathname}/>
            <PostInput state = {this.state} sendForm = {this.sendFrom} 
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
        post: (data)=>dispatch(post(data)),
        pictureSave : (pic)=>{dispatch(picture(pic))}
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Post)
