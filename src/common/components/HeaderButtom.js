import React, { Component } from 'react'
import { Nav } from "../config/Nav";
import { NavAdmin } from "../config/NavAdmin";
import { HashLink as NavLink } from "react-router-hash-link"
import { connect } from "react-redux"
import { authSingOut } from "../../store/action/authAction";



class HeaderButtom extends Component {
    constructor(props){
        super(props);
        this.state={
            session:true
        }
    }
    
    componentDidMount=()=>{
        window.initJqueriesPlugins();
    }
   
  render() {
    const { authID, authLogout } = this.props
    let currentNav = Nav;
    if(authID){ currentNav = NavAdmin}
    const navigation =currentNav.map((value, index)=>{
        // let scroll =""
        // if (value.name !== "menus" && value.name !=="home"){
        //     scroll="scroll"
        // }
        return <li key={index}>
                   <NavLink activeclassname="active" exact="true" 
                           className="scroll" to={`${value.link}`}>
                           <span data-hover={`${value.name}`}>
                               {`${value.name}`}
                           </span>
                   </NavLink>
               </li>
   
    })
     return (
       <div className="header-bottom">
               <div className="fixed-header">
               <div className="container">
                   <div className="top-menu">
                       <span className="menu"><img src="template/images/nav.png" alt=""/> </span>
                        <ul>
                           <nav className="cl-effect-5">
                               {navigation}
                               { authID ?
                               <li> <a onClick={authLogout} href="/" className="scroll">
                               <span data-hover="logout">Logout</span></a></li>:null}
                           </nav>
                        </ul>
                     </div>
                   </div>
               </div>
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
          authLogout: ()=>dispatch(authSingOut())
      }
    }
    export default connect(mapStateToProps,mapDispatchToProps)(HeaderButtom)

