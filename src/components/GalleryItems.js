import React,{Component} from 'react';
import './GalleryItems.css';

class GalleryItems extends Component{
    render(){
        return(
            <div className="gallery-item"> 
                    <img src={require("../assets/photo.png")}></img> 
                    <p className="gallery-name">Gallery Name</p>
                    <p className="gallery-description">A small description of the gallery</p>
                </div>
        );
    }
}
export default GalleryItems;