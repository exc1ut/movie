import { StylesProvider, CssBaseline, ThemeProvider } from "@material-ui/core";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { theme } from "./config/theme";
import { MainC } from "./pages/Main";
import "./styles/fonts.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FilterPage } from './pages/filter-page';
import SideDrawer from './components/Navbar/mini_tools/SideDrawer'
import SignIn from "./pages/SignIn"
function App() {

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <CssBaseline />
        <BrowserRouter>

          <Layout>

            <Switch>
              <Route exact path="/">
                <MainC />
              </Route>
              <Route exact path="/films" render={() => <FilterPage content_type={1} />} />
              <Route exact path="/serials" render={() => <FilterPage content_type={3} />} />
              <Route exact path="/cartoons" render={() => <FilterPage content_type={2} />} />
              <Route exact path="/sport" render={() => <FilterPage content_type={4} />} />
              <Route exact path="/culture" render={() => <FilterPage content_type={6} />} />
              <Route exact path="/education" render={() => <FilterPage content_type={7} />} />
              <Route path="/signIn" component={SignIn} />
            </Switch>


          </Layout>

        </BrowserRouter>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
