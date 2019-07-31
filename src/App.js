import React,{Component} from 'react';
import './App.css';
import Gallery from './components/gallery';
import Album from './components/photobus07/Album';
import Gallery08 from './components/photobus08/Gallery08'
import {BrowserRouter,  Route, Switch } from "react-router-dom";


class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Gallery} />
      <Route path='/Album' component={Album} />
      <Route path='/Gallery08' component={Gallery08}/>
      <Route path='/Gallery' component={Gallery}/>
    </Switch>
    
</BrowserRouter>
 
  );
}
}
export default App;
  