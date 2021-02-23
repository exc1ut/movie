import { StylesProvider, CssBaseline } from "@material-ui/core";
import React from "react";
import { Sample } from "./components/Sample";
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
const  App: React.FC = () =>{
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
    
    </div>
    </BrowserRouter>
    
  );
}

export default App;
