<<<<<<< HEAD
import { StylesProvider, CssBaseline } from "@material-ui/core";
import { Sample } from "./components/Sample";
import './App.css';

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <Sample />
    </StylesProvider>
  );
}

export default App;
=======

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
    </ThemeProvider>)
}

export default App;
>>>>>>> 9722e18f2d46be52ed6d944305b410ce0332c357
