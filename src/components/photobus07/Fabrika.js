import React,{Component} from 'react';
import '../Sidebar.css'
import Sidebar from '../Sidebar'
import Header from './Header'
import FabrikaItems from './FabrikaItems'
import './Fabrika.css'
import GalleryData from '../data/gallery.json'
import {NavLink} from "react-router-dom"
class Fabrica extends Component{
    render(){
        return(
            <div className="main-container">
                <Sidebar/>
                <div className="gallery-elements">
                <Header/>
                <div className="gallery-boxes">
                {GalleryData.map(prop => (
                    <FabrikaItems
                    images={prop.images}
                    
                    />  
                ))}
            </div>
                       
        </div>
            </div>
        );
    }
}
export default Fabrica;