import React,{Component} from 'react';
import '../Sidebar.css'
import Sidebar from '../Sidebar'
import HeaderTop from './HeaderTop'
import AlbumItems from './AlbumItems'
import './Album.css'
import GalleryData from '../data/gallery.json'
import {NavLink} from "react-router-dom"
class Album extends Component{



    render(){
        const { images,logo,name,description } = this.props.location.state
        return(
            <div className="main-container">
                <Sidebar/>
                <div className="gallery-elements">
                    <HeaderTop/>
                    <div className="header">
                    <img src={logo}/>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    </div>
                    <div className="gallery-boxes07">
                    {images.map(img => (
                        <AlbumItems image={img}
                        logo={logo} /> 
                        
                    ))}

                
            </div>
                       
        </div>
            </div>
        );
    }
}
export default Album;
