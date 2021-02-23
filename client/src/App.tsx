<<<<<<< HEAD
import { StylesProvider, CssBaseline, ThemeProvider } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import { Layout } from "./components/Layout";
import { theme } from "./config/theme";
import { Main } from "./pages";
import "./styles/fonts.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <CssBaseline />
        <Layout>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
          </Switch>
        </Layout>
      </StylesProvider>
    </ThemeProvider>
=======
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
    
>>>>>>> 0f0c6ce13e7d4146867326f301a7900bae00233e
  );
}

export default App;
