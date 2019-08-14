import React,{Component} from 'react';
import './App.css';
import Gallery from './components/gallery';
import Album from './components/photobus07/Album';
import Gallery08 from './components/photobus08/Gallery08'
import {
  BrowserRouter ,
  Route,
  Switch,
} from 'react-router-dom';
import Login from './components/Login/Login';
import fire from './config/Fire'


class App extends Component {
  constructor(){
    super(); 
    this.state={
      user:null
    }
  }
  componentDidMount(){
    this.authListener();
  }
  authListener(){
     fire.auth().onAuthStateChanged((user)=>{
       if(user){
         this.setState({user});
       }else{
         this.setState({user:null});
       }
     });
  }
  render(){
    const gallerypage= this.state.user?(Gallery): Login
    const albumpage= this.state.user?(Album): Login
    const imagepage= this.state.user?(Gallery08): Login
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={gallerypage}/>
   <Route path='/Album' component={albumpage} />
   <Route path="/Gallery08" component={imagepage}/>
   <Route path="/Gallery" component={Gallery}/>
    </Switch>
    
</BrowserRouter>

  );
}
}
export default App;
  