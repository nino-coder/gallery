import React,{Component} from 'react';
import './GalleryItems.css'
import GalleryData from './data/gallery.json'
import {NavLink} from 'react-router-dom'
class GalleryItems extends Component{
    constructor(props){
        super(props);
       
    }
   
    render(){
        return(
            <div className="gallery-item"> 
          <NavLink to='/Fabrika' >  <img src={this.props.avatar}></img></NavLink>
                <h4>{this.props.name}</h4>
                <p>{this.props.description}</p>
            </div>
        );
    }
}
export default GalleryItems;