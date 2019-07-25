import React,{Component} from 'react';
import './FabrikaItems.css'
import GalleryData from '../data/gallery.json'
import {NavLink} from 'react-router-dom'
class FabrikaItems extends Component{
    render(){
        return(
            <div className="items"> 
              {       <NavLink  to='/Gallery08'>
               <img  className="photo" src={this.props.images[0]}></img> </NavLink>}
                <button>
                    <img className="icon" src={require("../../assets/facebook.png")}/>
                </button>
                <button>
                    <img className="icon" src={require("../../assets/instagram.png")}/>
                </button>
                <button>
                    <img className="icon" src={require("../../assets/mail.png")}/>
                </button>
                <button>
                    <img className="icon" src={require("../../assets/download.png")}/>
                </button>
        </div>
        );
    }
}
export default FabrikaItems;