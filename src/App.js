import React,{Component} from 'react';
import './App.css';
import Gallery from './components/gallery';
import Fabrika from './components/photobus07/Fabrika';
import Gallery08 from './components/photobus08/Gallery08'
import {BrowserRouter,  Route, Switch } from "react-router-dom";

class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Gallery} />
      <Route path='/Fabrika' component={Fabrika} />
      <Route path='/Gallery08' component={Gallery08}/>
      <Route path='/Gallery' component={Gallery}/>
    </Switch>
    
</BrowserRouter>
 
  );
}
}
export default App;
  