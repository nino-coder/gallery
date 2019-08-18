import React,{Component} from 'react';
import './Sidebar.css'
import fire from '../config/Fire'
import {Link,withRouter} from 'react-router-dom'
import Login from './Login/Login';
import { withTranslation, Trans } from 'react-i18next';
class Sidebar extends Component {
    logout = () => {
        fire.auth().signOut();
        this.props.history.push("/");
    }
    render() {
        const { t, i18n } = this.props;
   
        const changeLanguage = (lng) => {
          i18n.changeLanguage(lng);
        };
        return (
            <nav className="side-bar">
                 <div className="side-bar-dropdown">
                                <div>
                                <p>{t('Devices')}</p></div>
                                <div>
                                <select>
                                    <option value="Ensyspace">Ensyspace</option>
                                </select></div>
                            </div>
                            <nav className="side-bar-elements">
                            
                            <ul>
                                <li className="navigation">
                                    <img src={require("../assets/home.png")}></img>
                                <Link to="/Gallery">{t('home')}</Link>
                                  
                                </li>
                                <li className="navigation">
                                    <img src={require("../assets/galleries.png")}></img>
                                    <a href="url">{t('galleries')}</a>
                       
                                </li>
                                <div className="line">
                                    <p><Trans>Device control</Trans></p>
                                </div>
                                <li className="navigation">
                                    <img src={require("../assets/gallery.png")}></img>
                                    <a href="url"><p>{t('Gallery')}</p></a>
                                </li>
                                <li className="navigation">
                                    <img src={require("../assets/Camera.png")}></img>
                                    <a href="url"><p>{t('Camera')}</p></a>
                                </li>
                                <li className="navigation">
                                    <img src={require("../assets/Design.png")}></img>
                                    <a href="url"><p>{t('Design')}</p></a>
                                </li>
                                <li className="navigation">
                                    <img src={require("../assets/Colors.png")}></img>
                                    <a href="url"><p>{t('Colors')}</p></a>
                                </li>
                                <li className="navigation">
                                    <img src={require("../assets/Drawing.png")}></img>
                                    <a href="url"><p>{t('Drawing')}</p></a>
                                </li>
                                <li className="navigation">
                                    <img src={require("../assets/Sharing.png")}></img>
                                    <a href="url"><p><Trans>Sharing Option</Trans></p></a>
                                </li>
                                <li className="navigation">
                                    <img src={require("../assets/Effects.png")}></img>
                                    <a href="url"><p>{t('Effects')}</p></a>
                                </li>
                                <hr/>
                                <li className="navigation">
                                    <img src={require("../assets/setting.png")}></img>
                                    <a href="url"><p>{t('Settings')}</p></a>
                                </li>
                                <li className="navigation">
                                    <img src={require("../assets/feedback.png")}></img>
                                    <a href="url"><p>{t('Feedback')}</p></a>
                                </li>
                                <li className="navigation">
                                    <img src={require("../assets/help.png")}></img>
                                    <a href="url"><p>{t('Help')}</p></a>
                                </li>
                                <li className="navigation">
                                <button onClick={this.logout}>Logout</button>
                                </li>
                            </ul>
                           
                        </nav>
            </nav>
        )
    }
}
export default withTranslation('translations')(withRouter(Sidebar));