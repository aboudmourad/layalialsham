import React from 'react'
import { connect } from "react-redux"
import MainFoodHolder from './MainFoodHolder';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase'

const MainFood = (props) => {

    const mainDishes =props.MainDishes;
    let dishes
    if(mainDishes){
     dishes = mainDishes.map((value, index)=>{
        return <MainFoodHolder value={value} key={value.id} 
                                deleteHandler={props.deleteHandler} 
                                 pathname={props.pathname}/>
    })
}
  return (
    <div className="about-section" id="about">
			<div className="container">
				<h3>OUR Main Food Culture</h3>
					<div className="main wow bounceInLeft animated" id="mainFood"data-wow-delay="0.4s"> 
                       {dishes}
                <div className="clearfix"></div>
                </div>
			</div>
	</div>
  )
}

const mapStateToProps=(state)=>{
    return {
        MainDishes:state.firestore.ordered.mainDishes
    }
}

export default compose(
	firestoreConnect([
		{collection: 'mainDishes', limit:3}
	]),connect(mapStateToProps))(MainFood)
