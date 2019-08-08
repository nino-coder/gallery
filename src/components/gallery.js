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
                {GalleryData.map(info=> (
                    <GalleryItems
                        avatar={info.avatar}
                        name={info.name}
                        description={info.description}
                        images={info.images}
                        logo={info.logo}
                    /> 
                   
                ))}
                 </div>
                     
        </div>
    </div>
        );
    }  
}
export default Gallery;