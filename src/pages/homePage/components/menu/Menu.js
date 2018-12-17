import React from 'react'
import { connect } from "react-redux"
import MenuHolder from './MenuHolder';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase'

const Menu = (props) => {
	const menuFood =props.menuFood;
		let food;
			if(menuFood){
				food = menuFood.map((value,index)=>{
					let id , newValue
						// if(index <=3){
							id= value.id 
							newValue = value
						// }
    							return <MenuHolder x={newValue} key={id} 
													deleteHandler={props.deleteHandler} 
              										pathname={props.pathname}/>
					
				})
			}
  return (
    <div className="menu-section" id="menus">
					<div className="container">
						<h3> featured menu</h3>
						<div className="menu-grids wow bounceIn animated" id="mainFood" data-wow-delay="0.4s">
								{food}
								<div className="clearfix"></div>
							</div>
						</div>
					</div>
  )
}

const mapStateToProps=(state)=>{
	return {
			menuFood:state.firestore.ordered.menu
	}
}

export default compose(
	firestoreConnect([
		{collection: 'menu'}
	]),
	connect(mapStateToProps),
	)(Menu)
