import React, {Component} from 'react';
import './Header.css'
import '../GalleryHeader.css'
import HeaderTop from './HeaderTop'

class Header extends Component{
    render(){
        return(
            <div className="header">
                <HeaderTop/>
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