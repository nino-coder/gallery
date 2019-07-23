import React,{Component} from 'react';
import Sidebar from './Sidebar';
import GalleryItems from './GalleryItems';
import GalleryHeader from './GalleryHeader';
import './gallery.css';
import GalleryData from './data/gallery.json'
class Gallery extends Component{
    render(){

        return(
            <div className="main-container">
            <Sidebar/>
            <div className="gallery-elements">
               <GalleryHeader/>
                <div className="gallery-boxes-first">
                {GalleryData.map(prop => (
                    <GalleryItems
                    avatar={prop.avatar}
                    name={prop.name}
                    description={prop.description}
                    />  
                ))}
                 </div>
                     
        </div>
    </div>
        );
    }  
}
export default Gallery;