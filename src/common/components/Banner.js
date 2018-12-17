import React from 'react'
import { connect } from "react-redux"
import { NavLink } from 'react-router-dom'


const Banner = (props) => {
	const Slide =props.Slides;
	const slider= Slide.map((value, index)=>{
		return (
			<li key={index}>
				<img src={value.image} alt="slideimage"/>
					<div className="caption wow bounceIn animated" id="caption" data-wow-delay="0.4s">
						<div className="logo">
							<NavLink to="/">{value.title}</NavLink>
						</div>
						<h3>{value.description}</h3>
					</div>
			</li>
		)
	})

	return (
		<div className="slider" id="header">
				<div className="callbacks_container">
					<ul className="rslides" id="slider">
						{slider}
					</ul>
				</div>
			</div>
	)
}
const mapStateToProps=(state)=>{
    return {
		Slides:state.slides.Slide
	}
}
export default connect(mapStateToProps)(Banner)


