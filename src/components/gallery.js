import React,{Component} from 'react';
import Sidebar from './Sidebar';
import GalleryItems from './GalleryItems';
import GalleryHeader from './GalleryHeader';
import './gallery.css';

class Gallery extends Component{
    render(){

        return(
            <div className="main-container">
            <Sidebar/>
            <div className="gallery-elements">
               <GalleryHeader/>
                <div className="gallery-boxes-first">
                    <GalleryItems/>
                    <GalleryItems/>
                    <GalleryItems/>
                </div>
                <div className="gallery-boxes-second">
                    <GalleryItems/>
                    <GalleryItems/>
                    <GalleryItems/>
                </div>             
        </div>
    </div>
        );
    }
}
export default Gallery;