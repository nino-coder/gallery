import React,{Component} from 'react'
import '../Sidebar.css'
import Sidebar from '../Sidebar'
import HeaderTop from '../photobus07/HeaderTop'
import './Gallery08.css'

class Gallery08 extends Component{
render(){
    return(
        <div className="main-container">
        <Sidebar/>
        <div className="main-gallery">
            <div>
           <HeaderTop/>
           </div>
           <div className="header-bottom">
               <div className="shapeimg">
               <img src={require("../../assets/shape.png")}></img>
               </div>
               <div className="fabrikaimg">
               <img  src={require("../../assets/fabrika.png")}></img>
               </div>
            </div> 
            <div className="gallery-image" >
                <img src={require("../../assets/fabrika.png")}></img>
            </div>
        </div>
</div>
    );
}
}
export default Gallery08;