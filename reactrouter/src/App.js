import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import {About} from './components/About';
import {Contact} from './components/Contact';
import {NavBar} from './components/NavBar';
import {Products} from './components/Products';
import {New} from './components/New';
import {Feature} from './components/Feature';
import {PageNotFound} from './components/PageNotFound';
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
import {Counter} from './FuncComponents/Counter'

class App extends React.Component{
  render(){
  return (<div>
    
    <NavBar/>
    <Counter count ={0} />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="products" element={<Products/>}>
        <Route path="new" element={<New/>}/>
        
        <Route path="feature" element={<Feature/>}/>
        <Route index element={<Feature/>}/>
      </Route>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="users" element={<Users/>}/>
      <Route path="users/:userid" element={<UserDetails/>}/>
      <Route path="*" element={<PageNotFound/>}/>

      </Routes>

    </div>
  );
}
}

export default App;
