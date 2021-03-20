import { muiTheme } from "storybook-addon-material-ui";
import { theme } from "../src/config/theme";
import { addDecorator } from "@storybook/react";
import { CssBaseline } from "@material-ui/core";
import { StylesProvider } from "@material-ui/core/styles";
import store from "../src/store/store";
import { Provider } from "react-redux";
import "../src/styles/fonts.css";
import "slick-carousel/slick/slick.css";
import { initializeWorker, mswDecorator } from "msw-storybook-addon";

import "slick-carousel/slick/slick-theme.css";
import { QueryClient, QueryClientProvider } from "react-query";

initializeWorker();
addDecorator(mswDecorator);

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const customViewports = {
  lg: {
    name: "lg",
    styles: {
      width: "1280px",
      height: "963px",
    },
  },
  md: {
    name: "md",
    styles: {
      width: "960px",
      height: "801px",
    },
  },
  sm: {
    name: "sm",
    styles: {
      width: "600px",
      height: "801px",
    },
  },
  xs: {
    name: "xs",
    styles: {
      width: "360px",
      height: "801px",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "dark",
    values: [
      {
        name: "dark",
        value: theme.dark,
      },
      {
        name: "light",
        value: "#fff",
      },
    ],
  },
  viewport: {
    viewports: customViewports,
  },
};

export const decorators = [muiTheme([theme])];

addDecorator((story) => (
  <Provider store={store}>
    <QueryClientProvider client={mockedQueryClient}>
      <StylesProvider injectFirst>
        <CssBaseline />
        {story()}
      </StylesProvider>
    </QueryClientProvider>
  </Provider>
));

if (typeof global.process === "undefined") {
  const { worker } = require("../src/mocks/browser");
  worker.start();
}
