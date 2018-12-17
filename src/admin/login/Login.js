import React, { Component } from 'react'
import { connect } from "react-redux"
import { authSingIn } from "../../store/action/authAction"

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
                email:"",
                password:"",
        }
      }
    
    updateInputField=(event)=>{
      this.setState({[event.target.name] : event.target.value})
    }

    sendForm=(event)=>{
        event.preventDefault();
        this.props.authLogin(this.state)
    }
  render() {
      const { authError } = this.props
    return (
        <div className="slide-adimn-section" id="login">
        <div className="container">
                <h3>Login</h3>
                <form onSubmit={this.sendForm}>
                    <div className="contact-grids wow bounceInRight animated" data-wow-delay="0.4s" id="mainFood">
                        <div className="col-md-4 contactgrid">
                            <input type="text" name="email"  value={this.state.email} onChange={this.updateInputField} 
                            className="text" placeholder="Email" 
                            autoComplete="user-name" required/>
                        </div>
                        <div className="col-md-4 contactgrid">
                            <input type="password" name="password" value={this.state.password} onChange={this.updateInputField} 
                            className="text" placeholder="Password" 
                            autoComplete="current-password" required/>
                        </div>
                        <div className="col-md-4 contactgrid2">
                            <button type="submit">Login</button>
                        </div>
                        {authError?
                       <div style={{color:"red"}}><h3>{authError}</h3></div>: null}
                        <div className="clearfix"></div>
                    </div>
                 </form>
        </div>
    </div>
    )
  }
}
const mapStateToProps=(state)=>{
    return {
      authError: state.auth.authError
    }
  
  }
  
  const mapDispatchToProps=(dispatch)=>{ 
      return { 
          authLogin: (data)=>dispatch(authSingIn(data))
      }
    }
    export default connect(mapStateToProps,mapDispatchToProps)(Login)