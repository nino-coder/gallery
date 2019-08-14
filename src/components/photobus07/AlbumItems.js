import React,{Component} from 'react';
import './AlbumItems.css'
import GalleryData from '../data/gallery.json'
import {Link} from 'react-router-dom'
class AlbumItems extends Component{
  
    render(){
        return(
                 
            <div className="items"> 
            <Link to={{
                pathname: '/Gallery08',
                state: {
                    image:this.props.image,
                    logo: this.props.logo
                }
            }} > 

               <img  className="photo" src={this.props.image}/> </Link>
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
export default AlbumItems;