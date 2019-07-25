import React,{Component} from 'react';
import './Sidebar.css'
import {NavLink} from 'react-router-dom'
class Sidebar extends Component {
    render() {
        return (
            <nav className="side-bar">
                 <div className="side-bar-dropdown">
                                <div>
                                <p>Devices</p></div>
                                <div>
                                <select>
                                    <option value="Ensyspace">Ensyspace</option>
                                </select></div>
                            </div>
                            <nav className="side-bar-elements">
                            
                            <ul>
                                <li className="navigation">
                                    <img src={require("../assets/home.png")}></img>
                                <NavLink to="/Gallery">home</NavLink>
                                  
                                </li>
                                <li className="navigation">
                                    <img src={require("../assets/galleries.png")}></img>
                                    <a href="url">galleries</a>
                       
                                </li>
                                <div className="line">
                                    <p>Device control</p>
                                </div>
                                <li className="navigation">
                                    <img src={require("../assets/gallery.png")}></img>
                                    <a href="url"><p>Gallery</p></a>
                                </li>
                                <li className="navigation">
                                    <img src={require("../assets/Camera.png")}></img>
                                    <a href="url"><p>Camera</p></a>
                                </li>
                                <li className="navigation">
                                    <img src={require("../assets/Design.png")}></img>
                                    <a href="url"><p>Design</p></a>
                                </li>
                                <li className="navigation">
                                    <img src={require("../assets/Colors.png")}></img>
                                    <a href="url"><p>Colors</p></a>
                                </li>
                                <li className="navigation">
                                    <img src={require("../assets/Drawing.png")}></img>
                                    <a href="url"><p>Drawing</p></a>
                                </li>
                                <li className="navigation">
                                    <img src={require("../assets/Sharing.png")}></img>
                                    <a href="url"><p>Sharing_Option</p></a>
                                </li>
                                <li className="navigation">
                                    <img src={require("../assets/Effects.png")}></img>
                                    <a href="url"><p>Effects</p></a>
                                </li>
                                <hr/>
                                <li className="navigation">
                                    <img src={require("../assets/setting.png")}></img>
                                    <a href="url"><p>Settings</p></a>
                                </li>
                                <li className="navigation">
                                    <img src={require("../assets/feedback.png")}></img>
                                    <a href="url"><p>Feedback</p></a>
                                </li>
                                <li className="navigation">
                                    <img src={require("../assets/help.png")}></img>
                                    <a href="url"><p>Help</p></a>
                                </li>
                            </ul>
                           
                        </nav>
            </nav>
        )
    }
}
export default Sidebar;