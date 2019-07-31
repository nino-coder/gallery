import React, {Component} from 'react';
import './Header.css'
import '../GalleryHeader.css'
import HeaderTop from './HeaderTop'
import GalleryData from '../data/gallery.json'

class Header extends Component{
    render(){
        return(
            <div className="header">
                <HeaderTop/>
                <div className="header-image">
                <img  className="logo" src={GalleryData[0].logo}></img>
                 <h3>{GalleryData[0].name}</h3>
                 <p>{GalleryData[0].description} </p>
                </div>
            </div>
        );
    }
}
export default Header;