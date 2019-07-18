import React,{Component} from 'react';
import '../Sidebar.css'
import Sidebar from '../Sidebar'
import Header from './Header'
import FabrikaItems from './FabrikaItems'
import './Fabrika.css'
class Fabrica extends Component{
    render(){
        return(
            <div className="main-container">
                <Sidebar/>
                <div className="gallery-elements">
                <Header/>
                <div className="gallery-boxes">
                <FabrikaItems/>
                <FabrikaItems/>
                <FabrikaItems/>
            </div>
            <div className="gallery-boxes">
                <FabrikaItems/>
                <FabrikaItems/>
                <FabrikaItems/>
                </div>             
        </div>
            </div>
        );
    }
}
export default Fabrica;