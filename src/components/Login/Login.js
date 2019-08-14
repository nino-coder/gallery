import React, {Component} from 'react';
import './styles.css';
import fire from '../../config/Fire';
import  { useState } from "react";
import show from "../../assets/show-password.png";
import hide from '../../assets/hide-password.png';
class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
            password:'',
            fireErrors:'',
            formTitle:'Login',
            loginBtn:true,
            hidden: true
        }
        this.toggleShow = this.toggleShow.bind(this);
    }
    toggleShow() {
        this.setState({ hidden: !this.state.hidden });
      }

    handleChange=e=>{
        this.setState({[e.target.name]:e.target.value});
    }
    login=e=>{
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .catch((error)=>{
            this.setState({fireErrors:error.message})
        });
    }
    register=e=>{
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .catch((error)=>{
            this.setState({fireErrors:error.message})
        });
    }
    getAction = action => {
        if(action === 'reg'){
            this.setState({formTitle: 'Register New User', loginBtn: false, fireErrors: ''});
        }else{
            this.setState({formTitle: 'Login', loginBtn: true, fireErrors: ''});
        }
    }

    componentDidMount() {
        if (this.props.password) {
          this.setState({ password: this.props.password });
        }
      }

render(){

    let errorNotification=this.state.fireErrors?
    (<div className="Error">{this.state.fireErrors}</div>):null;

    let submitBtn = this.state.loginBtn ? 
    (<input className="loginBtn" type="submit" onClick={this.login} value="sign in"/>) : 
    (<input className="loginBtn" type="submit" onClick={this.register} value="Register" />);

    let login_register = this.state.loginBtn ?
    (<button className="registerBtn" onClick={() => this.getAction('reg')}>Register</button>) : 
    (<button className="registerBtn" onClick={() => this.getAction('login')}>Login</button>)
  
    let ShowHide = this.state.hidden ? hide : show;
    return(
        <div className="main">
            <div className="main-first">
                       <h1>Welcome back.</h1>
                    <div className="secondWrapper">
                        <div className="inputs">
                        {errorNotification}
                            <form>
                            <input type="text"
                            value={this.state.email} 
                            onChange={this.handleChange}
                            name="email"
                            placeholder="Your Email"
                            />

                            <div className="login-password">
                                <input 
                                    type={this.state.hidden? "password":"text"}
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    placeholder="Password"
                                    name="password"
                                    />
                                
                                <div className="show-hide-password">
                                    <img  onClick={this.toggleShow} src={ShowHide} /> 
                                 </div>
                              </div>
                            </form>
                        </div>
                        <div className="check">
                            <div className="login" >
                                <div className="check1">
                                    <input type="checkbox" />
                                    <p>Keep me logged in</p>
                                </div>
                                <a href="url">Forgot password?</a>
                            </div>
                           
                            {submitBtn} 
                        </div>
                        {login_register}
                        </div>
            </div>
             
            <div className="main-second">
              <img src={require("../../assets/Bitmap.png")}/>
            </div>
        </div>
    );
}
}

export default Login;