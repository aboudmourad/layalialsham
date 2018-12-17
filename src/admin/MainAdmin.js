import React, { Component } from 'react'
import MenuPost from './MenuPost/MenuPost';
import MainMenuPost from './MainMenuPost/MainMenuPost';
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import Post from './PostPost/Post';
import {deleteAction, deletePicAction } from "../store/action/deleteAction"
import { withRouter } from "react-router";
import { compose } from 'redux';

class MainAdmin extends Component {

  deleteHandler=(event ,id, pic, colName)=>{
		this.props.deleteField(id, colName)
		this.props.deletePic(pic)
	}
  render() {
    const pathname = this.props.location.pathname;
    const { authID } = this.props;
    if(!authID) return <Redirect to="/"/>
    return (
      <div>
        <MainMenuPost deleteHandler={this.deleteHandler} 
              pathname={pathname}/>

        <MenuPost deleteHandler={this.deleteHandler} 
              pathname={pathname}/>

        <Post deleteHandler={this.deleteHandler} 
              pathname={pathname}/>
      </div>
    )
  }
}


const mapStateToProps=(state)=>{
  return {
    authID: state.firebase.auth.uid
  }
}
  const mapDispatchToProps=(dispatch)=>{ 
    return { 
        deleteField: (data, database)=>dispatch(deleteAction(data,database)),
        deletePic: (pic)=>dispatch(deletePicAction(pic))
    }
  }
  export default compose(withRouter,
    connect(mapStateToProps,mapDispatchToProps))(MainAdmin)
