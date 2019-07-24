import React,{Component} from 'react';
import './GalleryItems.css'
import GalleryData from './data/gallery.json'

class GalleryItems extends Component{
    constructor(props){
        super(props);
       
    }
   
    render(){
        return(
            <div className="gallery-item"> 
             <img src={this.props.avatar}></img>
                <h4>{this.props.name}</h4>
                <p>{this.props.description}</p>
            </div>
        );
    }
}
export default GalleryItems;