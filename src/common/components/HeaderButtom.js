import React, { Component } from 'react'
import { Nav } from "../config/Nav";
import { HashLink as NavLink } from "react-router-hash-link"




export default class HeaderButtom extends Component {
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
    const navigation =Nav.map((value, index)=>{
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
                           </nav>
                        </ul>
                     </div>
                   </div>
               </div>
           </div>
     )
}
}



