import React from 'react'

const TestInfoRight = (props) => {
   const info = props.info.newPost
return (
<div className="test-grid1 wow bounceInRight animated" data-wow-delay="0.4s" id="mainFood">
   <div className="col-md-5 test-left test1">
	   <img src={info.picture} className="img-responsive" alt="" />
		   <div className="textbox">
			   <p>{info.name}</p>
				   <h4>{info.price}<sup>95</sup></h4>
			</div>
   </div>
   <div className="col-md-7 test-right">
	   <h4>{info.title}</h4>
		   <p>{info.description}</p>
   </div>
   <div className="clearfix"> </div>
</div>
)
}

export default TestInfoRight

