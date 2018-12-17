import React, { Component } from 'react'
import { storage } from "../../../../../server/fbConfig"

class TestInfoLeft extends Component {
    constructor(props){
		super(props);
			 this.state={
					 urlImage:null
				 }
		}
		componentDidMount=()=>{
				const pic =this.props.info.newPost.picture
				storage.ref('image').child(pic).getDownloadURL().then(url=>{
					if(url){
						this.setState({urlImage:url})
						}
						})
				}
  render() {
            const info = this.props.info.newPost
            const pathname = this.props.pathname;
			const id = this.props.info.id
            const picName = this.props.info.newPost.picture
            const post = "post"
    return (
        <div className="test-grid2 wow bounceInLeft animated" data-wow-delay="0.4s" id="mainFood">
        <div className="col-md-7 test-left01">
        <h4>{info.title}</h4>
                <p>{info.description}</p>
        </div>
        <div className="col-md-5 test-right01 test1">
            <img src={this.state.urlImage} className="img-responsive" alt="" />
                <div className="textbox textbox1">
                    <p>{info.name}</p>
                        <h4>{info.price}<sup>95</sup></h4>
                        {pathname === "/admin"?
							<button type="button" className="btn btn-warning btn-circle"
                            onClick={event => {
                              this.props.deleteHandler(event,id,picName, post);
                             }}><b>X</b>
					            </button>:null}
                </div>
        </div>
        <div className="clearfix"> </div>
    </div>
    )
  }
}
export default TestInfoLeft