import React from 'react'

const MainMenuInput = (props) => {
  return (
    <div className="container">
    <h3>Post a Main Menu</h3>
<form>
  <div className="contact-grids wow bounceInRight animated" data-wow-delay="0.4s" id="mainFood">
    <div className="col-md-4 contactgrid">
      <input type="text" name="title" className="text" 
        value={props.state.title} onChange={props.updateInputField} 
          placeholder="Title" required/>
    </div>
    <div className="col-md-4 contactgrid">
      <textarea type="text" name="description" className="text"
        value={props.state.description} onChange={props.updateInputField} 
          placeholder="description" required/>
    </div>
    <div className="col-md-4 button1">
      <input type="file" onChange={props.handlePhotoChange}
        placeholder="Picture" required/>
          <progress value={props.pictureProgess} max="100"/>
    </div>
    <div className="col-md-12 contactgrid2" id="slide">
      <h1 style={{color:"red"}}>
        {props.pictureError !== null ?"Error Saving Pic":null}
      </h1>
        <button type="submit" onClick={props.sendForm}>Submit</button>
    </div>
    <div className="clearfix"></div>
  </div>
</form>
</div>
  )
}

export default MainMenuInput