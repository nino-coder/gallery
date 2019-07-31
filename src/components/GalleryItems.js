import React,{Component} from 'react';
import './GalleryItems.css'
import {NavLink} from 'react-router-dom'
import Gallery08 from './photobus08/Gallery08'
class GalleryItems extends Component{
    render(){
        const { images, logo,name,description } = this.props
        return(
            <div className="gallery-item"> 
          <NavLink to={{
              pathname: '/Album',
              state: {
                  images,
                  logo,
                  name,
                  description
              }
          }} >  <img src={this.props.avatar}></img></NavLink>
                <h4>{this.props.name}</h4>
                <p>{this.props.description}</p>
            </div>
        );
    }
}
export default GalleryItems;