import React,{Component} from 'react'
import './HeaderTop.css'

class HeaderTop extends Component{
    render(){
        return(
            <div className="header-profile">
               
                <ul>
                    <li>ENG</li>
                </ul>
                <img className="bell" src={require("../../assets/bell.png")}/>
                    <img className="profile-photo"src={require("../../assets/profile.png")}/>
                    <p>Sathish Kumar<select></select></p>
           
             </div>
        );
    }
}
export default HeaderTop;