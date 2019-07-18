import React, {Component} from 'react';
import './Header.css'
import '../GalleryHeader.css'
class Header extends Component{
    render(){
        return(
            <div className="header">
                <div className="header-profile">
               
                    <ul>
                        <li>ENG</li>
                    </ul>
                      <img className="bell" src={require("../../assets/bell.png")}/>
                        <img className="profile-photo"src={require("../../assets/profile.png")}/>
                        <p>Sathish Kumar<select></select></p>
                   
                </div>
                <div className="header-image">
                 <img src={require("../../assets/fabrika.png")}></img> 
                 <h3>FABRIKA</h3>
                 <p>LOREM IPSUM VADRUN A SHERN</p>
                </div>
            </div>
        );
    }
}
export default Header;