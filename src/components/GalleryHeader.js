import React,{Component} from 'react';
import './GalleryHeader.css';
class GalleryHeader extends Component{
    render(){
        return(
            <div className="gallery-elements-titles">
            <div className="titles-first-wrapper">
                  <button>ADD GALLERY+</button>
            </div>
            <div className="titles-second-wrapper">
                  <h2>GALLERY</h2>
            </div>
            <div className="titles-third-wrapper">
                 <img src={require("../assets/profile.png")}/>
                 <p>Sathish Kumar<select></select></p>
            </div>
        </div>
        );
    }
}
export default GalleryHeader;