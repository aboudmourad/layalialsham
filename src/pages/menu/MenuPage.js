import { connect } from "react-redux"
import MenuPageHolder from './MenuPageHolder';
import React, { Component } from 'react'
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase'


class MenuPage extends Component {
	constructor(props){
		super(props);
		this.state={
			search:""
		}
	}

	
	updateSearch=(event)=>{
    this.setState({search: event.target.value.toUpperCase()})
  }

  render() {
	  let food, menuFood
	  if(this.props.menuFood){
		
		menuFood =this.props.menuFood
	//  menuFood =this.props.menuFood.filter((food)=>{
	// 	return food.title.search(this.state.search) !== -1;
	// });
	 food = menuFood.map((value,index)=>{return <MenuPageHolder value={value.newMenu} getPic={this.props.getPic} key={value.id}/>
	})
}
  return (
		<div className="menu-section1">
			<div className="container">
				<h3> featured menu</h3>
					<div className="menu-grids wow bounceIn animated" data-wow-delay="0.4s" id="mainFood">
						<div className="col-md-12 contactgrid">
							<input type="text" value={this.state.search} onChange={this.updateSearch}  placeholder="Search"/>
						</div>
						<div className="top-menu">
							{food}
							<div className="clearfix"></div>
						</div>
							<div className="clearfix"></div>
					</div>
			</div>
		</div>
  )
}


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
	connect(mapStateToProps)
	)(MenuPage)
