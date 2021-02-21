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
