import { StylesProvider, CssBaseline, ThemeProvider } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import { Layout } from "./components/Layout";
import { theme } from "./config/theme";
import { Main } from "./pages";
import "./styles/fonts.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FilterPage } from './pages/filter-page';
import SideDrawer from './components/Navbar/mini_tools/SideDrawer'

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
            <Route exact path="/films" component={FilterPage} />
          </Switch>
        </Layout>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
