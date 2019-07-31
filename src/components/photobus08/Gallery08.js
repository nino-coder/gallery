import React,{Component} from 'react'
import '../Sidebar.css'
import Sidebar from '../Sidebar'
import HeaderTop from '../photobus07/HeaderTop'
import './Gallery08.css'
import GalleryData from '../data/gallery.json'
import '../photobus07/AlbumItems.css'
import '../photobus07/AlbumItems'

class Gallery08 extends Component{
  constructor(props){
      super(props);
  }
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
            <div className="items08"> 
                <div className="one-image-container">
            <img className="fabrikaimg"src={this.props.image}></img> 
            <div className="socialbuttons">
                <button>
                    <img className="icon08" src={require("../../assets/facebook.png")}/>
                </button>
                <button>
                    <img className="icon08" src={require("../../assets/instagram.png")}/>
                </button>
                <button>
                    <img className="icon08" src={require("../../assets/mail.png")}/>
                </button>
                <button>
                    <img className="icon08" src={require("../../assets/download.png")}/>
                </button>
              
            </div>
            <div className="threepoint">
                <img  src={require("../../assets/point.png")}/>
            </div>
                </div>
        </div>
       
        </div>
</div>
    );
}
}
export default Gallery08;