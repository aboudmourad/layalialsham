import React, { Component } from 'react'
import slides from "../store/action/slideAction"
import { connect } from "react-redux"

class SlidePost extends Component {
    constructor(props){
        super(props);
        this.state = {
            description:"",
            title:"",
            picture :"",
            // selectedFile:null,
            // picError : null,
        }
      }
      handlePhotoChange =(event) => {
        this.setState({ selectedFile: event.target.files[0] })
    }
    
      updateInputField=(event)=>{
        this.setState({[event.target.name] : event.target.value})
      }

      sendFrom=(event)=>{
        event.preventDefault();
        if(this.state.title !== "" && this.state.description !== "" && this.state.picture !== "" ){
            console.log(this.state)
        const fb= new FormData();
        fb.append("description", this.state.description);
        fb.append("title", this.state.title);
        fb.append("picture", this.state.picture)
        this.props.slideAdmin(this.state)
      
        }else{
          this.setState({picError : "Please Add your Picture" , loginError : "Please fill the empty felds"})
        }
      }


  render() {
    return (
    <div className="slide-adimn-section">
		<div className="container">
			<h3>Post a Slide</h3>
                <form>
                    <div className="contact-grids wow bounceInRight animated" data-wow-delay="0.4s" id="mainFood">
                         <div className="col-md-4 contactgrid">
                            <input type="text" name="title" className="text" 
                            value={this.state.title} onChange={this.updateInputField} 
                            placeholder="Title"/>
                         </div>
                          <div className="col-md-4 contactgrid">
                                <input type="text" name="description" className="text"
                                value={this.state.description} onChange={this.updateInputField} 
                                 placeholder="Description"/>
                          </div>
                          <div className="col-md-4 contactgrid">
                            <input type="text" name="picture" className="text"
                            value={this.state.picture} onChange={this.updateInputField}
                              placeholder="Picture"/>
                        </div>
                         <div className="col-md-12 contactgrid2" id="slide">
                                <button type="submit" onClick={this.sendFrom}>Submit</button>
                        </div>
                         <div className="clearfix"></div>
                    </div>
                </form>
        </div>
    </div>

    )
  }
}

const mapDispatchToProps=(dispatch)=>{ 
    return { 
      slideAdmin : (data)=>dispatch(slides(data))
    }
  }
  export default connect(null,mapDispatchToProps)(SlidePost)