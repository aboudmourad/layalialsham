import React, { Component } from 'react'

export default class MenuHolder extends Component {
  render() {
    return (
        <div className="container">
            <h3>Post a Menu</h3>
        <form>
          <div className="contact-grids wow bounceInRight animated" data-wow-delay="0.4s" id="mainFood">
            <div className="col-md-4 contactgrid">
              <input type="text" name="title" className="text" 
                value={this.props.state.title} onChange={this.props.updateInputField} 
                  placeholder="Title" required/>
            </div>
            <div className="col-md-4 contactgrid">
              <input type="text" name="price" className="text"
                value={this.props.state.price} onChange={this.props.updateInputField} 
                  placeholder="price" required/>
            </div>
            <div className="col-md-4 button1">
              <input type="file" onChange={this.props.handlePhotoChange}
                placeholder="Picture" required/>
                  <progress value={this.props.pictureProgess} max="100"/>
            </div>
            <div className="col-md-12 contactgrid2" id="slide">
              <h1 style={{color:"red"}}>
                {this.props.pictureError !== null ?"Error Saving Pic":null}
              </h1>
                <button type="submit" onClick={this.props.sendForm}>Submit</button>
            </div>
            <div className="clearfix"></div>
          </div>
        </form>
    </div>
)
  }
}

