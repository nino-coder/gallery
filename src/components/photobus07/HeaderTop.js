import React,{Component} from 'react'
import './HeaderTop.css'
import { withTranslation, Trans } from 'react-i18next';
class HeaderTop extends Component{
    constructor(props){
        super(props);
        this.state = { value:'en'};
        this.handlechange=this.handlechange.bind(this);
      
    }
  
    handlechange(e){
        this.setState({ value:e.target.value})
        }
    
    render(){
        const { t, i18n } = this.props;
   
        const changeLanguage = (lng) => {
          i18n.changeLanguage(lng);
        }
       
        return(
            <div className="header-profile">
               
                <select 
                 className="language"
                 value={this.state.value}
                 onClick={()=> changeLanguage(this.state.value)}
                 onChange={this.handlechange}
                >
                    <option  value='en' >ENG</option>
                    <option  value='ge' >GEO</option>
                </select>
                <img className="bell" src={require("../../assets/bell.png")}/>
                    <img className="profile-photo"src={require("../../assets/profile.png")}/>
                    <p>Sathish Kumar</p>
           
             </div>
        );
    }
}

export default withTranslation("translations")(HeaderTop);