import { StylesProvider, CssBaseline } from "@material-ui/core";
import { Sample } from "./components/Sample";

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <Sample />

    </StylesProvider>
  );
}

export default App;
