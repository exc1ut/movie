import logo from "./logo.svg";
import "./App.css";
import { StylesProvider, CssBaseline } from "@material-ui/core";

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <p>Hello world</p>
    </StylesProvider>
  );
}

export default App;
