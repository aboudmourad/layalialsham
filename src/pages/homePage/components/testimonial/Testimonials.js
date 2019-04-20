import React from 'react'
import { connect } from "react-redux"
import TestInfo from './testInfo';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase'

const Testimonials = (props) => {
	const pathname = props.pathname
	const info = props.info
	let test;
		if(info){
			 test = info.map((value,index)=>{
					return <TestInfo value={value} 
						index={index} key={value.id} 
							deleteHandler={props.deleteHandler}
								pathname={pathname}/>
			})
		}	
			return (
				<div className="test-section" id="tests">
					<div className="container">
						<h3>TESTIMONIALS</h3>
							<div className="test-grids ">
								{test}
									<div className="clearfix"></div>
							</div>
					</div>
				</div>
)
}

const mapStateToProps=(state)=>{
	return {
	  info :state.firestore.ordered.post
	}
  
  }

export default compose(
	firestoreConnect([
		{collection: 'post'}
	]),connect(mapStateToProps))(Testimonials)
